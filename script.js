const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("menu-mobilne");
const year = document.getElementById("year");

let menuOpen = false;

function setMenu(open) {
    menuOpen = open;
    header.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
}

menuToggle.addEventListener("click", () => {
    setMenu(!menuOpen);
});

mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuOpen) {
        setMenu(false);
        menuToggle.focus();
    }
});

document.addEventListener("click", (event) => {
    if (menuOpen && !header.contains(event.target)) {
        setMenu(false);
    }
});

function handleScroll() {
    const isScrolled = window.scrollY > 50;

    header.classList.toggle("is-scrolled", isScrolled);
}

if (year) {
    year.textContent = String(new Date().getFullYear());
}

window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();
