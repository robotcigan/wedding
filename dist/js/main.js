$(document).ready(function () {
  
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

})