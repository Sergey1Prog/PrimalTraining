// MOBILE MENU
const buttonMobile = document.querySelector(".button-mobile");
const menuMobileNav = document.querySelector(".menu-mobile__nav");
const overlay = document.querySelector(".overlay");

buttonMobile.addEventListener("click", () => {
  menuMobileNav.classList.toggle("active");
  buttonMobile.classList.toggle("active");
  overlay.classList.toggle("active");
});

// ANIMATION
const animationItems = document.querySelectorAll(".animation-item");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

animationItems.forEach((item) => {
  observer.observe(item);
});

//SLIDER
const slidesOne = document.querySelectorAll(".media-item");
const slierGroupOne = document.querySelector(".train-hard__slider-group");
const btnRightSlidesOne = document.querySelector(
  ".train-hard__slider-btn--right",
);
const btnLeftSlidesOne = document.querySelector(
  ".train-hard__slider-btn--left",
);

const slidesTwo = document.querySelectorAll(".gallery-item");
const slierGroupTwo = document.querySelector(".train-hard__gallery-slider");
const btnRightSlidesTwo = document.querySelector(
  ".train-hard__gallery-btn--right",
);
const btnLeftSlidesTwo = document.querySelector(
  ".train-hard__gallery-btn--left",
);

const slidesTheree = document.querySelectorAll(".community-image__item");
const slierGroupTheree = document.querySelector(".community-slider__group");
const btnRightSlidesTheree = document.querySelector(".community__btn-right");
const btnLeftSlidesTheree = document.querySelector(".community__btn-left");

// SLIDER-ONE
const trainHardSlider = new Swiper(".train-hard__slider", {
  parallax: true,

  slidesPerView: 1,

  loop: true,

  speed: 1000,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: ".train-hard__slider-btn--right",
    prevEl: ".train-hard__slider-btn--left",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  on: {
    init: function () {
      checkActiveSlide(this);
    },

    slideChange: function () {
      checkActiveSlide(this);
    },
  },
});

function checkActiveSlide(swiper) {
  const activeSlide = swiper.slides[swiper.activeIndex];
  const video = activeSlide.querySelector("video");

  if (video) {
    swiper.autoplay.stop();

    video.currentTime = 0;

    video.play();

    video.onended = () => {
      swiper.slideNext();
    };
  } else {
    swiper.autoplay.start();
  }
}

//SLIDER-TWO
const trainHardGallery = new Swiper(".train-hard__gallery", {
  parallax: true,

  slidesPerView: 1,

  loop: true,

  speed: 1000,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: ".train-hard__gallery-btn--right",
    prevEl: ".train-hard__gallery-btn--left",
  },

  pagination: {
    el: ".train-hard__gallery .swiper-pagination",
    clickable: true,
  },
});

//SLIDER-THEREE
const communitySlider = new Swiper(".community-slider", {
  slidesPerView: "auto",

  spaceBetween: 0,

  loop: true,

  speed: 5000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  freeMode: true,
  freeModeMomentum: false,

  navigation: {
    nextEl: ".community__btn-right",
    prevEl: ".community__btn-left",
  },

  pagination: {
    el: ".community-slider .swiper-pagination",
    clickable: true,
  },
});

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
