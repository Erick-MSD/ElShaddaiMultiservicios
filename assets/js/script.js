// Mobile Navigation
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("mobile-nav-toggle");
    const navMenu = document.getElementById("navmenu");

    // Toggle menu
    toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        navMenu.classList.toggle("mobile-nav-active");
        this.classList.toggle("bi-x");
        this.classList.toggle("bi-list");
    });

    // Close menu when clicking links
    document.querySelectorAll('.navmenu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove("mobile-nav-active");
            toggle.classList.remove("bi-x");
            toggle.classList.add("bi-list");
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navmenu') && !e.target.closest('.mobile-nav-toggle')) {
            navMenu.classList.remove("mobile-nav-active");
            toggle.classList.remove("bi-x");
            toggle.classList.add("bi-list");
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        // Close mobile menu after clicking
        document.querySelector('.navmenu').classList.remove('active');
        document.querySelector('.mobile-nav-toggle').classList.remove('bi-x');
    });
});

