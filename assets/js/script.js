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

// Asegúrate de que esto se ejecute después de que Swiper esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Encuentra todos los elementos con clase init-swiper
    const swiperElements = document.querySelectorAll('.init-swiper');
    
    swiperElements.forEach(function(swiperEl) {
        // Busca la configuración dentro del elemento
        let configEl = swiperEl.querySelector('.swiper-config');
        let config = {};
        
        if (configEl) {
            try {
                // Intenta analizar la configuración JSON
                config = JSON.parse(configEl.textContent);
                
                // Reducir los valores de spaceBetween si son demasiado grandes
                if (config.breakpoints) {
                    for (const [breakpoint, settings] of Object.entries(config.breakpoints)) {
                        // Ajusta spaceBetween a valores más razonables
                        if (settings.spaceBetween > 50) {
                            settings.spaceBetween = Math.min(settings.spaceBetween, 50);
                        }
                    }
                }
                
                // Asegurarse de que autoplay esté correctamente configurado
                if (config.autoplay === true) {
                    config.autoplay = {
                        delay: 2500,
                        disableOnInteraction: false
                    };
                }
                
                // Inicializar el Swiper con la configuración ajustada
                new Swiper(swiperEl, config);
                
                console.log('Swiper inicializado con éxito:', config);
            } catch (e) {
                console.error('Error al analizar la configuración del Swiper:', e);
                
                // Fallback a configuración básica en caso de error
                new Swiper(swiperEl, {
                    loop: true,
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    }
                });
            }
        } else {
            // Si no hay configuración, usar valores predeterminados
            new Swiper(swiperEl, {
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 20,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                }
            });
        }
    });
    
    // Código para depuración - descomentar si necesitas ver los límites de los elementos
    /*
    const debugSwipers = document.querySelectorAll('.init-swiper');
    debugSwipers.forEach(function(swiper) {
        swiper.classList.add('debug-mode');
    });
    */
});
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  const swiperMarcas = new Swiper(".mySwiperMarcas", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 50
      }
    }
  });
