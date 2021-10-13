// Testimonial hover effect
const rightColEL = document.querySelector(".testimonials__right-col");
const cardsEl = document.querySelectorAll(".testimonials__card");
const imagesEl = document.querySelectorAll(".testimonials__img");

rightColEL.addEventListener("mouseover", function (e) {
  const cardTarget = e.target;
  if (cardTarget.className !== "testimonials__card") return;

  // Remove 'active' class from all the cards and add only to to target card
  cardsEl.forEach((card) => card.classList.remove("active"));

  cardTarget.classList.add("active");

  // Add 'hidden' class to all the images and remove only for the target image
  imagesEl.forEach((img) => {
    img.classList.add("hidden");
    if (img.dataset.testimonial !== cardTarget.dataset.testimonial) return;

    img.classList.remove("hidden");
  });
});

// Burger menu popup
const burgerBtnEl = document.querySelector(".burger-btn");
const shadeLayoutEl = document.querySelector(".burger-layout");
const burgerMenuEl = document.querySelector(".nav__list");

burgerBtnEl.addEventListener("click", function (e) {
  const btn = e.target.closest(".burger-btn");
  if (!btn) return;

  shadeLayoutEl.classList.toggle("hidden");

  if (getComputedStyle(burgerMenuEl).display === "none")
    burgerMenuEl.style.setProperty("display", "flex");
  else burgerMenuEl.style.setProperty("display", "none");
});

shadeLayoutEl.addEventListener("click", () => {
  burgerMenuEl.style.setProperty("display", "none");
  shadeLayoutEl.classList.add("hidden");
});
