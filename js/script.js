document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // HEADER / SCROLL
    // ==============================

    const header = document.querySelector(".header");

    function handleScroll() {
        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();


    // ==============================
    // MENÚ MÓVIL
    // ==============================

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            menuToggle.classList.toggle("active");
            nav.classList.toggle("active");
            document.body.classList.toggle("menu-open");

            const menuOpen = nav.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                menuOpen ? "true" : "false"
            );
        });

        const navLinks = document.querySelectorAll(".nav a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                menuToggle.classList.remove("active");
                nav.classList.remove("active");
                document.body.classList.remove("menu-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });
        });
    }


    // ==============================
    // ANIMACIONES AL HACER SCROLL
    // ==============================

    const elements = document.querySelectorAll(
        ".service-card, .solution-card, .process-item, .about-content, .about-visual, .contact-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("reveal-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        elements.forEach(function (element) {

            element.classList.add("reveal");
            observer.observe(element);
        });

    } else {

        elements.forEach(function (element) {

            element.classList.add("reveal-visible");
        });
    }


    // ==============================
    // AÑO AUTOMÁTICO DEL FOOTER
    // ==============================

    const yearElements = document.querySelectorAll("[data-year]");

    yearElements.forEach(function (element) {

        element.textContent = new Date().getFullYear();
    });

});
