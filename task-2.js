let menuBar = document.getElementById("menuBarIcon");
let cancelIcon = document.getElementById("cancelIcon");
let menuSection = document.getElementById("menuSection");

function toggleMenu() {
    menuBar.classList.toggle("bar-icon-hide");
    menuSection.classList.toggle("menu-section-display");
    cancelIcon.classList.toggle("cancel-icon-display");
}

menuBar.addEventListener("click", toggleMenu);
cancelIcon.addEventListener("click", toggleMenu);