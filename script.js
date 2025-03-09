document.addEventListener("DOMContentLoaded", function () {
    // Бургер-меню
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', (event) => {
        menu.classList.toggle('nav-active');
        burger.classList.toggle('open');
        event.stopPropagation();
    });

    document.body.addEventListener('click', () => {
        menu.classList.remove('nav-active');
        burger.classList.remove('open');
    });

    menu.addEventListener('click', (event) => event.stopPropagation());

    function toggleBurgerVisibility() {
        if (window.innerWidth <= 768) {
            burger.style.display = "flex";
        } else {
            burger.style.display = "none";
            menu.classList.remove('nav-active');
            burger.classList.remove('open');
        }
    }

    window.addEventListener("load", toggleBurgerVisibility);
    window.addEventListener("resize", toggleBurgerVisibility);

    // Кнопка "Наверх"
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Секция отзывов
    const reviews = document.querySelectorAll(".review");
    let reviewIndex = 0;

    function showNextReview() {
        reviews[reviewIndex].classList.remove("active");
        reviewIndex = (reviewIndex + 1) % reviews.length;
        reviews[reviewIndex].classList.add("active");
    }
    setInterval(showNextReview, 5000);

    // Показать / скрыть контактную форму
    const contactForm = document.querySelector(".contact-form-section");
    const toggleButton = document.createElement("button");
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        contactForm.classList.toggle("show");
    });

    // FAQ секция
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        item.querySelector(".faq-question").addEventListener("click", function () {
            item.classList.toggle("active");
        });
    });

    // Слайдер
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let slideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
        slideIndex = index;
    }

    function autoSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    setInterval(autoSlide, 5000);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showSlide(index));
    });

    showSlide(0);

    // Контактная кнопка
    const contactLink = document.querySelector(".contact-button");
    const navLinks = document.querySelector(".nav-links");

    contactLink.addEventListener("click", function (event) {
        event.preventDefault();
        navLinks.classList.remove("nav-active");
        burger.classList.remove("open");

        const targetSection = document.querySelector("#contact-form");
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth",
            });
        }
    });

    // Показ скрытых элементов при прокрутке
    const hiddenElements = document.querySelectorAll(".hidden");

    function checkScroll() {
        hiddenElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 100) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    // Управление стрелками
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowUp") {
            window.scrollBy(0, -50);
        } else if (event.key === "ArrowDown") {
            window.scrollBy(0, 50);
        }
    });
});
