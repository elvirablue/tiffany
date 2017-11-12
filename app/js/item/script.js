$(document).on('ready', function(){ 
    $('.nav.navbar-nav a').click(function () { 
        var el = $(this).attr('href');
        $('html,body').animate({scrollTop: $(el).offset().top - 120}, 600);
        return false;
      });
    
      $(window).scroll(function(){    
        if ($(window).scrollTop() >= 100) {
            $('.navbar-tf').addClass('scroll');       
        } 
        if ($(window).scrollTop() < 100) {
          $('.navbar-tf').removeClass('scroll');       
      } 
      });

  var owl1 = $('#owl-tiffany');
  
      owl1.owlCarousel({
          loop:true,//Зацикливаем слайдер
          margin:0,
          dots:false,
          autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
          autoplay:false, //Автозапуск слайдера
          smartSpeed:1000, //Время движения слайда
          autoplayTimeout:100, //Время смены слайда
          responsiveClass:true,        
          responsive:{
               0:{
                   items:2,
                   dots:true,
                   nav:false
               },
               400:{
                   items:3,
                   nav:true
               },
               600:{
                   items:4,
                   nav:true
               },
               1070:{
                  items:5,
                  nav:true
                },
               1230:{
                   items:5,
                   nav:true
               }
          }
      });

  //*****************



});