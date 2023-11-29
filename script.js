// LOADER
let loader = document.querySelector("#loader");
let hidden = document.querySelector(".hidden");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s";

    setTimeout(() => {
      loader.style.display = "none";
      hidden.classList.remove("hidden");
    }, 500);
  }, 1500);
});
