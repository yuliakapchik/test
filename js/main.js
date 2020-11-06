$(document).ready(function () {
  // ----------------Подключение слайдера со статьями----------------------
var articlesSlider = new Swiper('.articles-container', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

// ------------------------------Подключение слайдера с фото -----------------------
var gallerySlider = new Swiper('.gallery-container', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
  speed: 600,
})

// ------------------------------Слайдер с отзывами--------------------------------
var reviewsSlider = new Swiper('.reviews-container', {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  // If we need pagination
  pagination: {
    el: '.reviews-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },

})

// Подключение плагина валидации форм
  $(".cooperation__form").validate({
      messages: {
        name: {
          required: "Пожалуйста, введите Ваше имя",
          minlength: "Минимум 2 буквы",
        },
        phone: {
          required: "Оставьте, пожалуйста, Ваш номер телефона",
        },
      },
    });
// Подключение плагина маски для телефона
$('.phone').mask('+375 (00) 000-00-00');

// при нажатии на пункт меню, меню должно открываться/закрываться
var menuButton = $(".menu-button");
menuButton.on("click", function () {
  $(".navbar-menu").toggleClass("navbar-menu--visible");
});
});