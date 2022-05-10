const nav_contain = document.getElementById("nav_contain");
const menu = document.getElementById("menu");
const menu_close = document.getElementById("menu-close");
const arrow = document.querySelectorAll(".arrow");
const extend = document.querySelectorAll(".extend");
const overlay = document.querySelector(".overlay");

const arrowArr = [...arrow];
const extendArr = [...extend];

menu.addEventListener("click", () => {
  nav_contain.classList.remove("close");
  overlay.classList.toggle("hidden");
});

menu_close.addEventListener("click", () => {
  nav_contain.classList.add("close");
  overlay.classList.toggle("hidden");
});

arrowArr.forEach((el, idx) => {
  el.addEventListener("click", () => {
    el.classList.toggle("up");
    extendArr[idx].classList.toggle("switch");
  });
});
