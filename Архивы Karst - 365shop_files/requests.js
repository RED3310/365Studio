jQuery(document).ready(function ($) {
    let today = new Date(),
        weekday = today.getDay();
    if (weekday === 6 || weekday === 0) {
        activatePopup('popup_info', '.popup-holiday.popup-info');
    }
    // if( localStorage.getItem('popup_holiday') === null){
    //    $('.popup-holiday').addClass('active');
    //     localStorage.setItem('popup_holiday', 'true');
    // }
    // $(document).mouseup(function (e){
    //     var div = $(".popup-content");
    //     if (!div.is(e.target)
    //         && div.has(e.target).length === 0) {
    //         $('.popup-holiday').removeClass('active');
    //     }
    // });
    // $(document).on('click', '.popup-holiday .close-popup', function (){
    //     $(this).parents('.popup-holiday').removeClass('active');
    // });
    $(document).on('change', '.woocommerce-billing-fields__field-wrapper input', function(){
        localStorage.setItem($(this).attr('name'), $(this).val());
    });
    $('.woocommerce-billing-fields__field-wrapper input').each(function(){
        if(  localStorage.getItem($(this).attr('name')) !== undefined){
            $(this).val(localStorage.getItem($(this).attr('name')));
        }
    });
    $(document).on('click','.filter-block .filter-toggle', function (){
        $(this).toggleClass('active');
        $('.wcpf-filter',$(this).parent()).toggleClass('active');
        return false;
    });
    if($(window).width() <= 767) {
        $(document).on('click','li.type-product a.woocommerce-LoopProduct-link', function (){
           if(!$(this).parents('.type-product').hasClass('active')){
               $(this).parents('.type-product').addClass('active');
               return false;
           }
        });
    }
    $('.custom-trash > a').html($('.custom-trash > a').html() + '<span class="count">'+(+$('.fl-page-header-primary').data('cart_total_items') > 0 ? $('.fl-page-header-primary').data('cart_total_items') : '')+'</span>');

    $('body').on("added_to_cart", function(e){
        $.ajax( {
            url:  window.ajax_url,
            dataType: "json",
            data: {
                action: 'get_cart_total'
            },
            success: function( data ) {
                $('.custom-trash .count').text(data);
                if($(window).width() > 1024) {
                    $('.menu .widget_shopping_cart_content').addClass('active');
                    $('body').addClass('active-hover');
                } else {
                    $('.custom-trash').addClass('active-cart open');
                    $('.widget_shopping_cart_content').addClass('open');
                    $('body').addClass('active-body-cart');
                }
                setTimeout(function(){
                    $('.menu .widget_shopping_cart_content').removeClass('active');
                    $('body').removeClass('active-hover');
                    $('.custom-trash').removeClass('active-cart open');
                    $('.widget_shopping_cart_content').removeClass('open');
                    $('body').removeClass('active-body-cart');
                }, 3000);
            }
        } );
    });
    $('body').on("removed_from_cart", function(e){
        $.ajax( {
            url:  window.ajax_url,
            dataType: "json",
            data: {
                action: 'get_cart_total'
            },
            success: function( data ) {
                $('.custom-trash .count').text(data);
                if(+data <= 0){
                    if($(window).width() > 1024) {
                        $('.menu .widget_shopping_cart_content').removeClass('active');
                        $('body').removeClass('active-hover');
                    } else {
                        $('.custom-trash').removeClass('active-cart open');
                        $('.widget_shopping_cart_content').removeClass('open');
                        $('body').removeClass('active-body-cart');
                    }
                }
            }
        } );
    });
    $("input.fl-search-input").autocomplete({
        appendTo: '.search-form',
        classes: {
            "ui-autocomplete": "search-autocomplete",
        },
        source: function( request, response ) {
            $.ajax( {
                url:  window.ajax_url,
                dataType: "json",
                data: {
                    term: request.term,
                    action: 'products_search'
                },
                success: function( data ) {
                    response( data );
                }
            } );
        },
        minLength: 3,
    }).autocomplete("instance")._renderItem = function(ul, item) {
            var item = $('<a class="list_item_container" href="' + item.link + '">' + item.thumbnail + '<div class="search-title"> ' + item.label + '</div> ' + item.price + '</a>')
            return $("<li>").append(item).appendTo(ul);
    };

    $( document ).on( 'click', '.single_add_to_cart_button', function(e) {


        var $thisbutton = $(this),
            $form = $thisbutton.closest('form.cart'),
            id = $thisbutton.val(),
            product_qty = $form.find('input[name=quantity]').val() || 1,
            product_id = $form.find('input[name=product_id]').val() || id,
            variation_id = $form.find('input[name=variation_id]').val() || 0;

        var data = {
            action: 'woocommerce_ajax_add_to_cart',
            product_id: product_id,
            product_sku: '',
            quantity: product_qty,
            variation_id: variation_id,
        };

        $(document.body).trigger('adding_to_cart', [$thisbutton, data]);

        $.ajax({
            type: 'post',
            url: wc_add_to_cart_params.ajax_url,
            data: data,
            beforeSend: function (response) {
                $thisbutton.removeClass('added').addClass('loading');
            },
            complete: function (response) {
                $thisbutton.addClass('added').removeClass('loading');
            },
            success: function (response) {

                if (response.error && response.product_url) {
                    window.location = response.product_url;
                    return;
                } else {
                    $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
                }
            },
        });

        return false;
    });

    function activatePopup(name, popup_selector) {
        if(localStorage.getItem(name) === null){
            $(popup_selector).addClass('active');
            localStorage.setItem(name, 'true');
        }
        $(document).mouseup(function (e){
            let div = $(popup_selector + " .popup-content");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                $(popup_selector).removeClass('active');
            }
        }).on('click', popup_selector + ' .close-popup', function (){
            $(this).parents(popup_selector).removeClass('active');
        });
    }
});