// MOBILE MENU - MODAL BLOCK
const buttonMobile = document.querySelector(".button-mobile");
const menuMobileNav = document.querySelector(".menu-mobile__nav");
const overlay = document.querySelector(".overlay");
const modalBlock = document.querySelector(".modal");
const openModalBlock = document.querySelectorAll(
  ".section__link, .personal-training__link",
);
const closeModalBlock = document.querySelector(".modal-btn__close");
let selectorClass = "";

buttonMobile.addEventListener("click", () => {
  menuMobileNav.classList.toggle("active");
  buttonMobile.classList.toggle("active");
  overlay.classList.toggle("active");
});

openModalBlock.forEach((button) => {
  button.addEventListener("click", () => {
    scrollPosition = window.scrollY;
    modalBlock.classList.add("active");
    document.body.style.overflow = "hidden";
    selectorClass = button.dataset.class;
  });
});

closeModalBlock.addEventListener("click", () => {
  modalBlock.classList.remove("active");
  document.body.style.overflow = "";
  window.scrollTo(0, scrollPosition);
});

overlay.addEventListener("click", () => {
  if (modalBlock.classList.contains("active")) {
    modalBlock.classList.remove("active");
    document.body.style.overflow = "";
    window.scrollTo(0, scrollPosition);
  }
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

//ORDER
const messageModal = document.querySelector(".modal-form__message");
const btnModal = document.querySelector(".modal-form__btn");

document
  .getElementById("modal-form")
  .addEventListener("submit", async function (element) {
    element.preventDefault();

    const data = {
      rate: selectorClass,
      name: this.name.value,
      phone: this.phone.value,
      message: this.message.value,
    };

    try {
      const response = await axios.post("/api/order", data);

      if (response.data.success) {
        messageModal.classList.remove("disp");
        btnModal.classList.add("sent");
      }
    } catch (error) {
      console.warn(error);
    }
  });

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
