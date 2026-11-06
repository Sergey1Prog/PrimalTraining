const form = document.querySelector(".macro-calculator__form");

//animation
function animateNumber(element, finalValue, duration = 1000) {
  const interval = 50;
  const steps = duration / interval;

  let currentStep = 0;

  const animation = setInterval(() => {
    currentStep++;

    element.textContent = Math.floor(Math.random() * (finalValue * 1.5));

    if (currentStep >= steps) {
      clearInterval(animation);

      element.textContent = Math.round(finalValue);
    }
  }, interval);
}

//form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = Number(document.querySelector("#weight").value);
  const height = Number(document.querySelector("#height").value);
  const age = Number(document.querySelector("#age").value);
  const sex = document.querySelector("#sex").value;
  const activity = Number(document.querySelector("#activity").value);
  const goal = document.querySelector('input[name="goal"]:checked').value;
  const resultrCalories = document.querySelector("#result-calories");
  const resultrProteins = document.querySelector("#result-protein");
  const resultrCarbs = document.querySelector("#result-carbs");
  const resultrFats = document.querySelector("#result-fats");
  const resultrProteinPercentage = document.querySelector(
    "#result-protein-percent",
  );
  const resultrCarbsPercentage = document.querySelector(
    "#result-carbs-percent",
  );
  const resultrFatsPercentage = document.querySelector("#result-fats-percent");
  const resultBlock = document.querySelector(".macro-calculator__target-title");

  //calories
  let bmr;
  let calories;

  if (sex === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    calories = bmr * activity * goal;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    calories = bmr * activity * goal;
  }

  //protein
  let protein;
  if (goal === "0.85") {
    protein = weight * 0.8;
  } else if (goal === "1") {
    protein = weight * 1.2;
  } else {
    protein = weight * 2.2;
  }

  const proteinPercentage = ((protein * 4) / calories) * 100;

  //carbs
  let carbs;
  if (goal === "0.85") {
    carbs = weight * 2.5;
  } else if (goal === "1") {
    carbs = weight * 3.0;
  } else {
    carbs = weight * 6;
  }

  const carbsPercentage = ((carbs * 4) / calories) * 100;

  //fats
  const fats = weight * 0.9;
  const fatsPercentage = ((fats * 9) / calories) * 100;

  //results
  resultBlock.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  animateNumber(resultrCalories, calories);

  animateNumber(resultrProteins, protein);

  animateNumber(resultrCarbs, carbs);

  animateNumber(resultrFats, fats);

  animateNumber(resultrProteinPercentage, proteinPercentage);

  animateNumber(resultrCarbsPercentage, carbsPercentage);

  animateNumber(resultrFatsPercentage, fatsPercentage);
});

// mobile menu
const buttonMobile = document.querySelector(".button-mobile");
const menuMobileNav = document.querySelector(".menu-mobile__nav");
const overlay = document.querySelector(".overlay");

buttonMobile.addEventListener("click", () => {
  menuMobileNav.classList.toggle("active");
  buttonMobile.classList.toggle("active");
  overlay.classList.toggle("active");
});

//scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
