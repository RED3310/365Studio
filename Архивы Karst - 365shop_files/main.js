!function(e){function t(t){t.on("click touchstart tap",(function(t){t.preventDefault();var o=e(this).attr("href");if(o.length){var s=e(o).offset().top;e("html, body").animate({scrollTop:s},600)}}))}e(document).ready((function(){var t,o=e(".block-values .fl-row-content"),s=e(".block-values__count");function i(e){for(var t=e,o=0,s=0;s<t.length;++s)t[s].style.height="",o<t[s].clientHeight&&(o=t[s].clientHeight);for(s=0;s<t.length;++s)t[s].style.height=o+"px"}o.on("init reInit afterChange",(function(e,t,o,i){var n=(o||0)+1;s.html(n>=10?n+" / "+t.slideCount:"0"+n+" / 0"+t.slideCount)})),o.slick({infinite:!1,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0}),e(document).on("click touchstart tap",".custom-scroll .fl-button",(function(){return e("html, body").animate({scrollTop:e(this).parents(".fl-row").next().position().top},"500","swing"),!1})).on("click touchstart tap",".fl-page-footer-wrap .custom-scroll-footer",(function(){return e("html, body").animate({scrollTop:0},"500","swing"),!1})),e("body:not(.fl-builder-edit) .block-homepage-slider .fl-col-content").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:767,settings:{arrows:!1}}]}),e(".block-goods ul.products").on("init",(function(t,o){e(o.$slides).each((function(e,t){t.setAttribute("style","--slide-width:"+o.slideWidth+"px")}))})),e(window).width()>767&&e(".block-goods ul.products").slick({infinite:!1,slidesToShow:3,slidesToScroll:3,arrows:!0,responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{arrows:!1}},{breakpoint:420,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".woocommerce-product-gallery__wrapper").on("init",(function(t,o){e(o.$slides).each((function(t,o){e(o).zoom({url:e("img",o).attr("src")})}))})),e(".woocommerce-product-gallery__wrapper").slick({infinite:!1,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,responsive:[{breakpoint:767,settings:{arrows:!1}}]}),e(".related.products .products.columns-4").slick({infinite:!1,slidesToShow:3,slidesToScroll:3,arrows:!0,responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1}},{breakpoint:420,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]}),e(".special-products .products").on("init",(function(t,o){e(o.$slides).each((function(e,t){t.setAttribute("style","--slide-width:"+o.slideWidth+"px")}))})),e(".special-products .products").slick({infinite:!1,slidesToShow:3,slidesToScroll:1,arrows:!0,responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]}),e(".card-header").on("click",(function(){e(this).siblings().slideToggle(),e(this).toggleClass("active")})),e(".testimonials_item[data-slick-index]").click((function(t){t.preventDefault();var o=e(this).data("slick-index");e(".testimonials_slider-results").slick("slickGoTo",o-1)})),e('[data-fancybox="images"]').fancybox({}),e(".woocommerce-LostPassword a").magnificPopup({type:"inline",midClick:!1,closeBtnInside:!0}),i(e(".page-template-default.has-blocks .woocommerce ul.products li.product .title-wrapper .title")),i(e(".fl-module-products_favorites .woocommerce-loop-product__title")),i(e(".fl-module-new_products .woocommerce-loop-product__title")),i(e(".special-products .woocommerce-loop-product__title")),i(e(".products-list-wrapper .woocommerce-loop-product__title")),i(e(".related ul.products li.product .woocommerce-loop-product__title")),e("#map").length&&(t=new google.maps.Map(document.getElementById("map"),{center:{lat:51.137029,lng:4.436292},zoom:15,styles:[]}),new google.maps.Marker({position:{lat:51.1384263,lng:4.4341143},map:t,icon:"/wp-content/themes/bb-theme-child/images/marker.svg"})),e(".orderby").select2(),e(".birth-day").select2(),e(".birth-mon").select2(),e(".birth-year").select2(),e(window).width()>1025&&e(document).on("click",".menu-item-has-children > a",(function(){location.href=e(this).attr("href")}))})),t(e("")),t(e("")),e(".navbar-toggle").on("click",(function(){e(this).toggleClass("active"),e(this).toggleClass("open"),e(".sticky_menu_block").toggleClass("open"),e("body").toggleClass("menu-fixed")})),e(window).width()<1025&&(e(document).on("click",".menu-item-has-children > a",(function(t){t.preventDefault(),e(this).parent().addClass("active-step"),e(this).siblings(".sub-menu").find(".back-step").length||(e(this).siblings(".sub-menu").append('<div class="back-step">back</div>'),e(this).siblings("> .sub-menu").find(".menu-item").wrapAll("<div class='scroll-height'></div>"))})),e(".menu-item-type-custom").on("click",(function(){e(this).addClass("active-step"),e(".back-step",this).length||e(".brands-list",this).append('<div class="back-step">Back</div>')})),e(document).on("click",".back-step",(function(){console.log(e(this)),e(this).parent().parent().removeClass("active-step")}))),e(".mini-cart_popup").length&&e(".menu-top-panel-ru-container li.custom-trash a").after(e(".mini-cart_popup")),e(".menu-account").length&&e(".menu-top-panel-ru-container li.custom-account a").after(e(".menu-account").removeClass("menu-account-default")),e(window).width()>=1025&&(e(".fl-page-header.fl-page-header-primary").css("top",e(".fl-page-bar").height()+1+"px"),e(".search-form input").on("focusin",(function(){e("body").addClass("search-g")})),e(".search-form input").on("focusout",(function(){e("body").removeClass("search-g")})),e(".custom-account").mouseenter((function(){e("body").addClass("active-hover")})),e(".custom-account").mouseleave((function(){e("body").removeClass("active-hover")})),e(".brands-list .brands-list__index li:first-child").addClass("active"),e(".brands-wrapper.brands-b").addClass("active")),e(window).width()>=1025&&(e(window).scroll((function(){e(".widget_shopping_cart_content").hasClass("active")&&(e(".widget_shopping_cart_content").removeClass("active"),e("body").removeClass("active-hover"))})),e("body").css("padding-top",e(".fl-page-bar").height()+e(".fl-page-header.fl-page-header-primary").height()+"px"),e(".custom-trash").mouseenter((function(){e("body").addClass("active-hover")})),e(".custom-trash").mouseleave((function(){e("body").removeClass("active-hover")}))),e(window).width()<=767&&(e(".search-form button").on("click",(function(t){e("body").toggleClass("active-body-search"),e(".search-form").toggleClass("active"),e(".search-form",this).removeClass("active")})),e(document).mouseup((function(t){var o=e(".search-form.active");o.is(t.target)||0!==o.has(t.target).length||o.hide("search-form.active")}))),e(window).width()<1025&&(e(".custom-account").on("click",(function(t){if(e("body").toggleClass("active-body-account"),e(this).toggleClass("active-account"),e(".menu-account",this).removeClass("open"),!e(this).hasClass("open"))return e(this).addClass("open"),e(this).siblings().removeClass("open"),e(".menu-account",this).addClass("open"),!1})),e(document).mouseup((function(t){var o=e(".menu-account.open");o.is(t.target)||0!==o.has(t.target).length||o.hide("menu-account.open")}))),e(window).width()<1025&&(e(".custom-trash").on("click",(function(t){if(e(this).toggleClass("active-cart"),e(".widget_shopping_cart_content",this).removeClass("open"),!e(this).hasClass("open"))return e(this).addClass("open"),e("body").addClass("active-body-cart"),e(this).siblings().removeClass("open"),e(".widget_shopping_cart_content",this).addClass("open"),!1})),e(document).mouseup((function(t){var o=e(".widget_shopping_cart_content");o.is(t.target)||0!==o.has(t.target).length||(o.removeClass("open"),e("body").removeClass("active-body-cart"))}))),e(".brands-list").length&&e(".navbar-right.menu li.menu-item-type-custom a").after(e(".brands-list").removeClass("brands-list-default")),window.addEventListener("scroll",(function(e){for(var t=document.querySelectorAll('section[id^="nav"]'),o=0;o<t.length;o++)document.querySelector('a[href="#'+t[o].id+'"]').className=1>=t[o].getBoundingClientRect().top&&t[o].getBoundingClientRect().top>=1-t[o].offsetHeight?"red":""}),!1)}(jQuery);