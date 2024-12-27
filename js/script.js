$(document).ready(function(){
  $('.slider').slick({
    dots: false,
    arrows: false, // Показывать точки для навигации
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость перехода в мс
    slidesToShow: 3, // Количество видимых слайдов
    slidesToScroll: 1, // Количество слайдов при скролле
    autoplay: false, // Автоматическое переключение
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ], // Задержка перед автоматическим переключением
  });
});
