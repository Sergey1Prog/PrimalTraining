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
