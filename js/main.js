$(document).ready(function(){
    
    // Search

    $(".i-search").click(function(){
        $('.search').slideDown();
    });
    $(".cross").click(function(){
        $('.search').slideUp();
    });

    
    // Log in & Register

    $(".user,.already-account").click(function(){
        $('.form').addClass('login-active').removeClass('sign-up-active');
    });
    $(".sign-up-btn").click(function(){
        $('.form').addClass('sign-up-active').removeClass('login-active');
    });$(".form-cancel").click(function(){
        $('.form').removeClass('login-active').removeClass('sign-up-active');
    });

    // Cart

    $(".cart").click(function(){
        $('.cart-modal').slideDown();
    });
    $(".modal-cross").click(function(){
        $('.cart-modal').slideUp();
    });

    // Top Slider

    $('.slider').slick({
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: '<div class="left"><i class="fas fa-arrow-left"></i></div>',
        nextArrow: '<div class="right"><i class="fas fa-arrow-right"></i></div>'
    });

    // Categories

    $('.categories-items').slick({
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '.c-left',
        nextArrow: '.c-right',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});