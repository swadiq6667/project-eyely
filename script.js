document.addEventListener("DOMContentLoaded", () => {
    
    // --- STICKY NAVIGATION BLUR EFFECT ---
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "0.8rem 0";
            navbar.style.background = "rgba(5, 7, 11, 0.92)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
        } else {
            navbar.style.padding = "1.25rem 0";
            navbar.style.background = "rgba(5, 7, 11, 0.75)";
            navbar.style.boxShadow = "none";
        }
    });

    // --- ANIMATED PERFORMANCE STATISTICS ENGINE ---
    const statsSection = document.querySelector("#stats");
    const statNumbers = document.querySelectorAll(".stat-number");
    
    let statsAnimated = false;

    const countUp = (element) => {
        const target = +element.getAttribute("data-target");
        const speed = target / 40; 
        
        const updateCount = () => {
            const current = +element.innerText;
            if (current < target) {
                element.innerText = Math.ceil(current + speed);
                setTimeout(updateCount, 30);
            } else {
                element.innerText = target + "+";
            }
        };
        updateCount();
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statNumbers.forEach(num => countUp(num));
                statsAnimated = true;
            }
        });
    }, { threshold: 0.4 });

    if(statsSection) {
        statsObserver.observe(statsSection);
    }

    // --- INTERACTIVE MOBILE MENU BACKBONE ---
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navMenu = document.querySelector(".nav-menu");

    mobileToggle.addEventListener("click", () => {
        const isOpen = navMenu.style.display === "flex";
        if(isOpen) {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "flex";
            navMenu.style.flexDirection = "column";
            navMenu.style.position = "absolute";
            navMenu.style.top = "100%";
            navMenu.style.left = "0";
            navMenu.style.width = "100%";
            navMenu.style.background = "rgba(5, 7, 11, 0.95)";
            navMenu.style.padding = "2rem";
            navMenu.style.gap = "1.5rem";
            navMenu.style.borderBottom = "1px solid var(--border-glass-hover)";
        }
    });

    // Close mobile menu on landing link clicks automatically
    const navLinks = document.querySelectorAll(".nav-link, .nav-btn");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if(window.innerWidth <= 768) {
                navMenu.style.display = "none";
            }
        });
    });
});