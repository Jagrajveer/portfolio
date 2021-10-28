const toggle = document.querySelector(".toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  if (toggle.classList.contains("active")) {
    toggle.classList.remove("active");
  } else {
    toggle.classList.add("active");
  }
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
});
