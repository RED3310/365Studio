jQuery(document).ready(function ($) {

    $( document).on( "click", ".pre-order-modal, .overflow", function() {
        $('#preOrderModal').toggleClass('show');
        $('#pre-order-form-product_id').val($(this).data('id'))
    });

    /** Валидация формы подписки */
    $('#pre-order-form').validate({
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "Введите имя",
            },
            phone: {
                required: "Введите телефон",
            }
        },
        submitHandler: function(form) {
            let data = {
                action: 'pre_order_forms_action',
                name: $('#pre-order-form-name').val(),
                phone: $('#pre-order-form-phone').val(),
                email: $('#pre-order-form-email').val(),
                product_id: $('#pre-order-form-product_id').val(),
            };

            jQuery.post(konradiajax, data, function (response) {
                $('.confirmation-2').removeClass('hidden');
                $('#pre-order-form').addClass('hidden');
                $('#response-content-2').html(response.message);
            });
        }
    })

})