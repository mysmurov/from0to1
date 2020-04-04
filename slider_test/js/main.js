$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    asNavFor: '.thumbs',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
  });
  $('.thumbs').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider',
    focusOnSelect: true,
    centerMode: false,
  });
});