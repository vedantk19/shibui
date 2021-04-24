const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const overlayText = document.getElementById("overlay-text");

window.addEventListener("load", (event) => {
  setTimeout(addoverlayText, 700);
});

function addoverlayText() {
  overlayText.classList.add("overlayText-show");
}
