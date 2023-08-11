const menuIcon = document.getElementById("menu-icon");
const navbarHiddenPart = document.getElementById("hidden-part");

menuIcon.addEventListener("click", () => {
    navbarHiddenPart.classList.toggle("hidden");
});
