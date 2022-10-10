$().ready(function () {
  $('.card-form').validate(
    {
      rules: {
        'credit-card-number': {
          required: true,
          minlength: 19,
          maxlength: 22,
        },
        'credit-card-exp-date' : {
          required: true,
          minlength: 7,
          maxlength: 7,
        },
        'credit-card-cvc' : {
          required: true,
          minlength: 3,
          maxlength: 3,
        }
      },
      messages: {
        'credit-card-number': {
          minlength: jQuery.validator.format('Введите хотя бы 16 символов'),
          required: jQuery.validator.format('Поле обязательное'),
        },
        'credit-card-exp-date' : {
          minlength: jQuery.validator.format('Минимум 4 символа'),
          required: jQuery.validator.format('Поле обязательное'),
        },
        'credit-card-cvc' : {
          minlength: jQuery.validator.format('Минимум 3 символа'),
          required: jQuery.validator.format('Поле обязательное'),
        }
      },
      validClass: 'valid',
      submitHandler: function(form) {
        const ccNumber = $('#credit-card-number').val()
        const ccExpDate = $('#credit-card-exp-date').val()
        const ccCVC = $('#credit-card-cvc').val()

        const c = confirm(`Номер карты: ${ccNumber} \n Месяц / Год: ${ccExpDate} \n Код: ${ccCVC}`);

        if (c) {
          $(".card-form__submit").attr("disabled", true);
          form.submit();
        }

      }
    }
  )

  formatInputMask($('#credit-card-number'), ' ', [4, 4, 4, 7]);
  formatInputMask($('#credit-card-exp-date'), ' / ', [2, 2]);
  formatInputMask($('#credit-card-cvc'), '', [3]);

  $('.card-form input').bind('keyup blur click', function () {
    if ($('.card-form').validate().checkForm()) {
      $('.card-form__submit').prop('disabled', false);
    } else {
      $('.card-form__submit').prop('disabled', true);
    }
  });
})
