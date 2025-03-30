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
        if (!target) return;
        
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        // Close mobile menu after clicking with smooth transition
        if (window.innerWidth < 1200) {
            setTimeout(() => {
                document.querySelector('.navmenu').classList.remove('mobile-nav-active');
                document.querySelector('.mobile-nav-toggle').classList.remove('bi-x');
                document.querySelector('.mobile-nav-toggle').classList.add('bi-list');
            }, 300);
        }
    });
});

// Ensure smooth scrolling for the entire page
document.documentElement.style.scrollBehavior = 'smooth';

// Initialize PureCounter
new PureCounter();


// Update active menu item based on scroll position
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navmenu a');

    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100; // Offset for header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
    
    // Update active link on page load
    updateActiveLink();
});

