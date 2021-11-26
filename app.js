const link = document.querySelector(".button-box");
const price = document.querySelector(".pricing");
const head = document.querySelector(".scroll-up-btn");
const about = document.querySelector(".about");
const testimonials = document.querySelector(".testimonials");
const features = document.querySelector(".features");
link.addEventListener("click", () => {
  let el = document.getElementById(link.getAttribute("data-link"));
  el.scrollIntoView({ behavior: "smooth" });
});
price.addEventListener("click", () => {
  let el = document.getElementById(price.getAttribute("data-link"));
  el.scrollIntoView({ behavior: "smooth" });
});
head.addEventListener("click", () => {
  let el = document.getElementById(head.getAttribute("data-link"));
  el.scrollIntoView({ behavior: "smooth" });
});
about.addEventListener("click", () => {
  let el = document.getElementById(about.getAttribute("data-link"));
  el.scrollIntoView({ behavior: "smooth" });
});
testimonials.addEventListener("click", () => {
  let el = document.getElementById(testimonials.getAttribute("data-link"));
  el.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    window.scrollBy(0, 750);
  }, 500);
});
features.addEventListener("click", () => {
  let el = document.getElementById(features.getAttribute("data-link"));
  el.scrollIntoView({ behavior: "smooth" });
});

const slide = document.getElementById("slide");

const leftArrow = document.getElementById("arrow-dir-left");
const rightArrow = document.getElementById("arrow-dir-right");
let x = 0;
leftArrow.addEventListener("click", (e) => {
  // e.preventDefault();
  x += 500;
  if (x <= 0) {
    slide.style.transform = `translateX(${x}px)`;
  } else {
    x -= 500;
  }
});
rightArrow.addEventListener("click", (e) => {
  // e.preventDefault();
  x -= 500;
  if (x >= -1000) {
    slide.style.transform = `translateX(${x}px)`;
  } else {
    x += 500;
  }
});
