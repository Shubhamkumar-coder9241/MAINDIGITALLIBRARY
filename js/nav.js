const menuBtn = document.querySelector("#menu");
const sideMenu = document.querySelector("#sideMenu");
const closeBtn = document.querySelector("#closeMenu");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
});