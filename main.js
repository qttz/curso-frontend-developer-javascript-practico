const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

let inactive = 1

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");

/*     if(inactive == 1) {
        desktopMenu.setAttribute("class", "desktop-menu");
        inactive = 0;
    } else {
        desktopMenu.setAttribute("class", "desktop-menu inactive");
        inactive = 1;
    } */
    
}