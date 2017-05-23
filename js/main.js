$(document).ready(function () {

  // wow
  new WOW().init();

    // Header шапка
  var page = window.location.pathname;

  if(page === '/wedding/_index.html') {
    $('.main-header').addClass('main-header--black');
  }

  $(window).scroll(function () {
    if( $(window).scrollTop() > 20 ) {
      $('.main-header').addClass('main-header--scroll');
    } else {
      $('.main-header').removeClass('main-header--scroll');
    }
  })


  // Табы
  $('.tabs__header .tabs__link').on('click', function() {
    var index = $(this).index();
    var parent = $(this).closest('.tabs');
    parent.find('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');
    parent.find('.tabs__content').hide();
    parent.find('.tabs__content').eq(index).show();
  });

  $('.accordion .accordion__btn').on('click', function() {
    var parent = $(this).closest('.accordion');
    parent.find('.accordion__body').slideDown();
  });

  $('.show-more').on('click', function() {
    $(this).text('Скрыть');
  });

  // Masonry
  $('.masonry').masonry();

  $('.masonry').isotope({ filter: '*' });

  $('.btn.btn--dashed').eq(0).on('click', function() {
    $('.masonry').isotope({ filter: '*' });
  })

  $('.btn.btn--dashed').eq(1).on('click', function() {
    $('.masonry').isotope({ filter: '.masonry-column__country' });
  })

  $('.btn.btn--dashed').eq(2).on('click', function() {
    $('.masonry').isotope({ filter: '.masonry-column__city' });
  })


    // Image gallery
  $('.portfolio-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    // mainClass: 'mfp-animation',
    gallery: {
      enabled: true
    }
  });

  $('.documents-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    // mainClass: 'mfp-animation',
    gallery: {
      enabled: true
    }
  });

  $('.reg-action__container--first').mouseenter(function() {
    $('.reg-action').css("background-image", "url('../img/registration-specialist.jpg')")
  });
  $('.reg-action__container--second').mouseenter(function() {
    $('.reg-action').css("background-image", "url('../img/registration-user.jpg')")
  });


  // Датапикер
  $('.datepicker').flatpickr({
    dateFormat: "d.m.Y",
    altInput: true
  });
  
  $('.datepicker-inline').flatpickr({
    inline: true,
    dateFormat: "d.m.Y",
    altInput: true,
    onChange: function(selectedDates, dateStr, instance) {
      $('.datepicker-inline-date').val(dateStr);
    }
  });

    // Кастомный селект
  $('.custom-select').select2({
    minimumResultsForSearch: Infinity,
    dropdownAutoWidth : true
    // width: 'auto'
  });

  $('.ya-share2__icon').after('<span class="ya-share2__text">Поделиться</span>');

  $('.ya-share2__link').each(function() {
    if ( $(this).attr('title') === 'Twitter' ) {
      $(this).find('.ya-share2__text').text('Твитнуть')
    }
  })

  // Слайдеры
  $('.commercial-slider').slick({
    dots: false,
    arrows: true
  })

  $('.slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  // Аудио
  // mejs.i18n.language('ru'); // Setting German language
    
  // $('audio,video').mediaelementplayer({
  //     success: function(player, node) {
      
  //       // Optional
  //         $(player).closest('.mejs__container').attr('lang', mejs.i18n.language());
          
  //         $('html').attr('lang', mejs.i18n.language());
          
  //         // More code
  //     }
  // });

  // Sorting
  $('.sorting__item').on('click', function() {
    $('.sorting__item').removeClass('sorting__item--active');
    $(this).addClass('sorting__item--active');
  });

  // Модальное окно
  $('.modal-open').magnificPopup({
    type: 'inline'
  });

  $('.gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
      enabled:true
    }
  });
  


})