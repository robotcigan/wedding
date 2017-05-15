$(document).ready(function () {

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
  })

  $('.show-more').on('click', function() {
    $(this).text('Скрыть');
  })

  // Masonry
  $('.masonry').masonry();

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
  })
  $('.reg-action__container--second').mouseenter(function() {
    $('.reg-action').css("background-image", "url('../img/registration-user.jpg')")
  })


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
    minimumResultsForSearch: Infinity
  });

  $('.ya-share2__icon').after('<span class="ya-share2__text">Поделиться</span>');

  $('.ya-share2__link').each(function() {
    if ( $(this).attr('title') === 'Twitter' ) {
      $(this).find('.ya-share2__text').text('Твитнуть')
    }
  })

})