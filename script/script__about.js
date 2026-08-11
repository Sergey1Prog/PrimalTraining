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

// SLIDER
const dynamicOpenSlider = new Swiper(".dynamic-open__slider", {
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
    nextEl: ".dynamic-open__slider-btn--right",
    prevEl: ".dynamic-open__slider-btn--left",
  },

  pagination: {
    el: ".dynamic-open__slider .swiper-pagination",
    clickable: true,
  },

  on: {
    init: function () {
      checkDynamicOpenSlide(this);
    },

    slideChange: function () {
      checkDynamicOpenSlide(this);
    },
  },
});

function checkDynamicOpenSlide(swiper) {
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

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
