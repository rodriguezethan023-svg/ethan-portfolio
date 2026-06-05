// nav.js - Global Navigation Component for E.RODRIGUEZ
document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
        <nav class="nav">
            <a href="index.html" class="nav-logo">E.RODRIGUEZ<span>.</span></a>
            
            <!-- Desktop Links -->
            <ul class="nav-links">
                <li><a href="index.html" id="nav-home">Home</a></li>
                <li><a href="about.html" id="nav-about">About</a></li>
                <li><a href="index.html#work" id="nav-portfolio">Portfolio</a></li>
                <li><a href="contact.html" id="nav-contact">Connect</a></li>
            </ul>

            <!-- Mobile Menu Toggle -->
            <button class="menu-btn" id="menuBtn" aria-label="Toggle Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>

        <!-- Mobile Navigation Overlay -->
        <div class="mobile-nav" id="mobileNav">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="index.html#work" class="mobile-link">Portfolio</a>
            <a href="contact.html">Connect</a>
        </div>
    `;

    // Inject the Nav into the placeholder
    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navHTML;
        setupNavLogic();
        highlightActiveLink();
    }
});

function setupNavLogic() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const body = document.body;

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Close menu when clicking a mobile link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
}

function highlightActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    if (page === "index.html" || page === "") {
        document.getElementById('nav-home').classList.add('active');
    } else if (page === "about.html") {
        document.getElementById('nav-about').classList.add('active');
    } else if (page === "contact.html") {
        document.getElementById('nav-contact').classList.add('active');
    } else if (page.includes("basketball") || page.includes("branding") || page.includes("dataviz")) {
        document.getElementById('nav-portfolio').classList.add('active');
    }
}