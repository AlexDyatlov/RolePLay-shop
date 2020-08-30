$(function(){

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 5,
    wrapperClass: 'slider__inner',
    slideClass: 'shop__item',
    direction: 'vertical',
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: true,
  });

});