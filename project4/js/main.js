$(document).ready(function () {
  $('.slider__inner').slick({
    arrows: false,
    asNavFor: '.thumbs__inner',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
  });
  $('.thumbs__inner').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider__inner',
    focusOnSelect: true,
    centerMode: false,
  });
});