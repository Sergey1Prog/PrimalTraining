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

const animationQueue = [];

let isAnimating = false;

function processAnimationQueue() {
  if (isAnimating || animationQueue.length === 0) {
    return;
  }

  isAnimating = true;

  const item = animationQueue.shift();

  item.classList.add("visible");

  setTimeout(() => {
    isAnimating = false;

    processAnimationQueue();
  }, 300);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);

        animationQueue.push(entry.target);
      }
    });

    processAnimationQueue();
  },
  {
    threshold: 0.1,
  },
);

animationItems.forEach((item) => {
  observer.observe(item);
});

//scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
