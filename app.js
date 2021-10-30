const link = document.querySelector(".button-box");
const price = document.querySelector(".pricing");
const head = document.querySelector(".scroll-up-btn");
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
