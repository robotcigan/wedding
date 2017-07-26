'use strict';

$(document).ready(function () {

  // Header шапка
  var page = window.location.pathname;

  if (page === '/wedding/_index.html') {
    $('.main-header').addClass('main-header--black');
  }

  function mainHeaderScroll() {
    if ($(window).scrollTop() > 20) {
      $('.main-header').addClass('main-header--scroll');
    } else {
      $('.main-header').removeClass('main-header--scroll');
    }
  }

  // Шапка
  $(window).scroll(function () {
    mainHeaderScroll();
  });

  mainHeaderScroll();

  // Табы
  $('.tabs__header .tabs__link').on('click', function () {
    var index = $(this).index();
    var parent = $(this).closest('.tabs');
    var link = $(this);
    // console.log(parentIndex)
    // console.log('index', parent.find('.tabs__content').index())
    if ($(this).parent().hasClass('tabs__header--links')) {
      console.log('lol');
    } else {
      parent.find('.tabs__link--active').first().removeClass('tabs__link--active');
      link.addClass('tabs__link--active');
      parent.find('.tabs__content').removeClass('tabs__content--active');
      parent.find('.tabs__content').eq(index).addClass('tabs__content--active');
      // $('.masonry').isotope({ filter: '*' });
      $('.masonry').masonry('destroy');
      $('.masonry').masonry();
    }
  });

  // $('.lazy').lazy({
  //   effect: "fadeIn",
  //   effectTime: 200,
  //   threshold: 0,
  //   // placeholder: "https://facebook.ampla.com.br/moura/aniversario/img/loading.gif",
  //   beforeLoad: function (element) {
  //     console.log('load')
  //   },
  //   afterLoad: function(element) {
  //     let items = $(`<div class="masonry__column"><a href="${element[0].src}"><img href=${element[0].src}></a></div>`)
  //     $('.portfolio-gallery').append(items).masonry( 'appended', items );
  //     // $('.portfolio-gallery').masonry('destroy');
  //     $('.portfolio-gallery').masonry();
  //   }
  // });

  $('.accordion .accordion__btn').on('click', function () {
    var parent = $(this).closest('.accordion');
    parent.find('.accordion__body').slideToggle();
  });

  $('.show-more').on('click', function () {
    $(this).text('Скрыть');
  });

  // Masonry
  // $('.masonry').masonry();

  // if ($('.masonry').length) {
  //   var container = document.querySelector('.masonry');
  //   var msnry = new Masonry( container );

  //   msnry.on( 'layoutComplete', function( msnryInstance, laidOutItems ) {
  //     $('.masonry').css('opacity', 1);
  //     $(window).trigger('resize');
  //   });

  //   msnry.layout();
  // }
  // $('.masonry').on('layoutComplete', function () {
  //   console.log('fdsgf')
  //   $('.masonry').css('opacity', 1);
  // })
  // $('.masonry').isotope({ filter: '*' });

  // Image gallery
  $('.portfolio-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    // mainClass: 'mfp-animation',
    gallery: {
      enabled: true
    }

  });

  $('.delete').on('click', function () {
    confirm("Удалить работу?");
  });

  $('.documents-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    // mainClass: 'mfp-animation',
    gallery: {
      enabled: true
    }
  });

  $('.reg-action__container--first').mouseenter(function () {
    $('.reg-action').css("background-image", "url('./img/registration-specialist.jpg')");
  });
  $('.reg-action__container--second').mouseenter(function () {
    $('.reg-action').css("background-image", "url('./img/registration-user.jpg')");
  });

  // Датапикер
  $('.datepicker').flatpickr({
    dateFormat: "d.m.Y",
    altInput: true
  });

  function dates() {
    if ($('.datepicker-container').length) {
      var _dates = $('.datepicker-container').data('dates');
      var datesArray = _dates.split(', ');
      return datesArray;
    }
  }

  $('.datepicker-inline').flatpickr({
    inline: true,
    dateFormat: "d.m.Y",
    // mode: "range",
    minDate: "today",
    // maxDate: "09.09.2017",
    // altInput: true,
    // defaultDate: dates(),
    onChange: function onChange(selectedDates, dateStr, instance) {
      console.log($(this).data('dates'));
      // this.defaultDate = dates();
      $('.datepicker-inline-date').val(dateStr).trigger('change');
    }
  });

  // Кастомный селект
  $('.custom-select').select2({
    minimumResultsForSearch: Infinity,
    dropdownAutoWidth: true
  });

  $('.custom-select-type-2 .custom-select').select2({
    minimumResultsForSearch: Infinity,
    dropdownAutoWidth: true,
    width: 'auto'
  });

  $('.ya-share2__icon').after('<span class="ya-share2__text">Поделиться</span>');

  $('.ya-share2__link').each(function () {
    if ($(this).attr('title') === 'Twitter') {
      $(this).find('.ya-share2__text').text('Твитнуть');
    }
  });

  // Слайдеры
  $('.commercial-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true
  });

  $('.slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  // Sorting
  $('.sorting__item').on('click', function () {
    $('.sorting__item').removeClass('sorting__item--active');
    $(this).addClass('sorting__item--active');
  });

  // Модальное окно
  $('.modal-open').magnificPopup({
    type: 'inline'
  });

  // Модалочка нового пароля
  if (window.location.hash === '#new-password') {
    $.magnificPopup.open({
      items: {
        src: '#new-password'
      },
      type: 'inline'
    });
  }

  $('.gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
      enabled: true
    }
  });

  // Мобильное меню
  $('.mobile-menu-toggle').on('click', function () {
    $(this).toggleClass('mobile-menu-toggle--active');
  });

  var slideout = new Slideout({
    'panel': document.getElementById('page'),
    'menu': document.getElementById('mobile-menu'),
    'padding': 270,
    'tolerance': 70,
    'side': 'right',
    'easing': 'cubic-bezier(.32,2,.55,.27)'
  });

  slideout.disableTouch();

  $('.mobile-menu-toggle').on('click', function () {
    slideout.toggle();
  });

  // Поля
  $('.form-control input').on('keyup change ', function () {
    formValidation($(this));
  });

  function formValidation(self) {
    if (self.val().length || self.text().length) {
      self.parent().find('label').addClass('form-control__label--active');
    } else {
      self.parent().find('label').removeClass('form-control__label--active');
    }
  }

  $('.form-control input').each(function () {
    formValidation($(this));
  });

  // Телефон маска
  $('.phone-mask').inputmask({
    mask: "+7 (999) 999 99 99",
    showMaskOnHover: false
  });

  $('.phone .phone__show').on('click', function () {
    $(this).closest('.phone').find('.phone__popup').addClass('phone__popup--active');
    $(this).hide();
    $(this).closest('.phone').find('.phone__number').hide();
    $(this).closest('.phone').find('.phone__number-link').addClass('phone__number-link--active');
  });

  // Закрытие блока по нажатию вне его области
  $(document).on('click', function (event) {
    $('body').addClass('body--cursor-pointer');
    var div = $(".phone .phone__popup");
    if (!$(event.target).closest($('.phone')).length) {
      div.removeClass('phone__popup--active');
      $('body').removeClass('body--cursor-pointer');
    }
  });

  // Смена города
  $('.city-selection__city').on('click', function () {
    $(this).parent().addClass('city-selection--active');
  });
  $('.city-selection__close').on('click', function () {
    $(this).closest('.city-selection').removeClass('city-selection--active');
  });

  // Закрытие блока по нажатию вне его области
  $(document).on('click', function (event) {
    $('body').addClass('body--cursor-pointer');
    var div = $(".city-selection");
    if (!$(event.target).closest(div).length) {
      div.removeClass('city-selection--active');
      $('body').removeClass('body--cursor-pointer');
    }
  });

  // Кнопки сохранить и редактировать в акциях
  $('.audio .btn--edit').on('click', function () {
    $(this).closest('.audio').find('.audio__title').hide();
    $(this).closest('.audio').find('.audio__title-edit').show();
    $(this).hide();
    $(this).closest('.audio').find('.btn--save').css('display', 'inline-block');
  });
  $('.audio .btn--save').on('click', function () {
    $(this).closest('.audio').find('.audio__title-edit').hide();
    $(this).closest('.audio').find('.audio__title').show();
    $(this).hide();
    $(this).closest('.audio').find('.btn--edit').css('display', 'inline-block');
  });

  // При нажатии на плеер другие останавливаются
  $('audio, video').bind('play', function () {
    var activated = this;
    $('audio, video').each(function () {
      if (this != activated) this.pause();
    });
  });

  // Dragndrop
  $('.dragndrop').on('dragover dragenter', function () {
    $(this).addClass('dragndrop--active');
  }).on('dragleave dragend drop', function () {
    $(this).removeClass('dragndrop--active');
  });
});

$(window).on("load", function () {
  $('.masonry').masonry();
  $('.masonry').css('opacity', 1);
});