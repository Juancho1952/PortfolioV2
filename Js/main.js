const bxmenu = document.querySelector("#navbar-button")
const lowernavbar = document.querySelector("#navbar__items")
const linkMenu = document.querySelector("#navbar-ul__routes")

bxmenu.addEventListener("click", () => {
    lowernavbar.classList.toggle("navbar__items-show");
});
linkMenu.addEventListener("click", () => {
    lowernavbar.classList.remove("navbar__items-show"); 
})

