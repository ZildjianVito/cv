const loaders = document.querySelectorAll(".toggleTheme");
loaders.forEach((loader) => {
    loader.addEventListener("click", handleOnClickToggleTheme);
});

let whiteBg = true;

function handleOnClickToggleTheme() {
    const root = document.documentElement;

    if (whiteBg == true) {
        root.style.setProperty('--bg-color', '20, 20, 20');
        root.style.setProperty('--text-color', '255, 255, 255');
        root.style.setProperty('--primary-color', '249, 168, 38');
        whiteBg = false;
    } else {
        root.style.setProperty('--bg-color', '255, 255, 255');
        root.style.setProperty('--text-color', '20, 20, 20');
        root.style.setProperty('--primary-color', '256, 173, 38');
        whiteBg = true;
    }
}


//Toggle for Mobile Responsive
const menus = document.querySelectorAll(".toggleMenu");
const links = document.querySelectorAll(".lnk");
const nav = document.querySelector(".nav");
menus.forEach((menu) => {
    menu.addEventListener("click", handleOnClickToggleMenu);
});
links.forEach((link) => {
    link.addEventListener("click", handleOnClickToggleMenu);
});

function handleOnClickToggleMenu() {
    nav.classList.toggle("nav-active");
}


//Scroll
document.onscroll = function () {
    if (window.scrollY > 60) {
        document.querySelector("header").style.borderBottom = "1px solid rgb(var(--text-color), .2)";
    } else {
        document.querySelector("header").style.borderBottom = "1px solid rgb(var(--bg-color), .2)";
    }
};