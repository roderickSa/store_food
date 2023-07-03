const menu = document.getElementById("menu-bar");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", (e) => {
    navbar.classList.toggle("active");
    e.target.classList.toggle("fa-times");
});

window.onload = setTimeout(loader, 3000);

window.onscroll = () => {
    navbar.classList.remove("active");
    menu.classList.remove("fa-times");
    if (window.scrollY > 60) {
        document.getElementById("scroll-top").classList.add("active");
    }
    if (window.scrollY <= 60) {
        document.getElementById("scroll-top").classList.remove("active");
    }
};

function loader() {
    document.querySelector(".loader-container").classList.add("fade-out");
}
