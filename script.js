$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    navText: [],
    responsive: {
      0: {
        items: 1
      }
    }
  });

  $('.form__check').on('click',function(event) {
    if(event.target.tagName != 'A') {
      $('div span', this).toggleClass("form__checkbox-active");
    }
  });

  $('.check').on('click',function(event) {
    if(event.target.tagName != 'A') {
      $(this).toggleClass("check-active");
    }
  });

  $('.menu a[href*=#]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
    return false;
  });

  $(".subscribe__form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Введите пожалуйста ваше имя",
        minlength: "Минимальное количество символов 2"
      },
      email: "Пожалуйста введите корректный email"
    }
  });

  $(".subscribe__form--two").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Введите пожалуйста ваше имя",
        minlength: "Минимальное количество символов 2"
      },
      email: "Пожалуйста введите корректный email"
    }
  });



});