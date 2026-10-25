const HEADER_MARKUP = `
    <div class="site-header__inner">
        <a class="site-logo" href="/" aria-label="Michał Delikat — strona główna">
            <span class="site-logo__top">Michał Delikat</span>
        </a>
        <a class="btn btn--primary header-cta" href="/#kontakt">Napisz do mnie</a>
    </div>
`;

const FOOTER_MARKUP = `
    <div class="container footer__inner">
        <p class="footer__copy">&copy; ${new Date().getFullYear()} Michał Delikat</p>
        <div class="footer__links">
            <a class="footer__link" href="https://www.linkedin.com/in/micha%C5%82-delikat-333411230/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z"/>
                </svg>
            </a>
            <a class="footer__link" href="https://github.com/Michal-Delikat/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.91c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
                </svg>
            </a>
        </div>
    </div>
`;

function initHeader(header) {
    function handleScroll() {
        header.classList.toggle("is-scrolled", window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
}

class SiteHeader extends HTMLElement {
    connectedCallback() {
        if (this.dataset.ready) return;

        this.dataset.ready = "true";
        this.innerHTML = HEADER_MARKUP;
        initHeader(this);
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        if (this.dataset.ready) return;

        this.dataset.ready = "true";
        this.innerHTML = FOOTER_MARKUP;
    }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
