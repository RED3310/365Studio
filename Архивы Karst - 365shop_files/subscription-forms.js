jQuery(document).ready(function ($) {

    $(document).on("click", ".toggle-modal, .overflow", function () {
        $('#openModal').toggleClass('show');
    });

    /** Отобразить модальное окно и заполнить куки */
    function showWidget() {
        if ($.cookie('widgetShowed') === '0') {
            $('#openModal').addClass('show');
            $.cookie('widgetShowed', '1');
        }
    }

    /** Проверка куки для отображения формы */
    if ($.cookie('widgetShowed')) {
        if ($.cookie('widgetShowed') === '0') {
            setTimeout(showWidget, 90000)
        }
    } else {
        $.cookie('widgetShowed', '0');
        setTimeout(showWidget, 90000)
    }

    /** Валидация формы подписки */
    $('#subscribe-form').validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Введите имя",
            },
            email: {
                required: "Введите email",
                email: "Email должен быть в формате name@domain.com"
            }
        },
        submitHandler: function (form) {
            let data = {
                action: 'subscription_forms_action',
                name: $('#subscription-form-name').val(),
                email: $('#subscription-form-email').val(),
            };

            jQuery.post(konradiajax, data, function (response) {
                $('.confirmation').removeClass('hidden');
                $('#subscribe-form').addClass('hidden');
                $('#response-content').html(response.message);
            });
        }
    })
})


/*--------------------------------SLIDER----------------------*/


