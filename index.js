const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerMenuContent = document.getElementById("hamburger-menu-content");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  hamburgerMenuContent.classList.toggle("open");
});

document.querySelectorAll(".lists-mobile a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("open");
    hamburgerMenuContent.classList.remove("open");
  });
});

document.querySelector(".dropdown-button").addEventListener("click", () => {
  hamburgerMenuContent.classList.toggle("open");
});