const navbarEl = document.querySelector(".navbar")
const navbarMobileEl = document.querySelector(".navbar-mobile")

window.addEventListener("scroll", stickyNav)

function stickyNav() {
    navbarEl.classList.toggle("active", scrollY > 0)
    navbarMobileEl.classList.toggle("active", scrollY > 0)
}