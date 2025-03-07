document.addEventListener("DOMContentLoaded", function () {
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

  menu.addEventListener('click', (event) => {
      event.stopPropagation();
  });

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
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Показываем кнопку при прокрутке вниз
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    // Прокрутка страницы вверх при клике на кнопку
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelectorAll(".review");
    let currentIndex = 0;

    function showNextReview() {
        reviews[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % reviews.length;
        reviews[currentIndex].classList.add("active");
    }

    setInterval(showNextReview, 5000); // Переключение каждые 5 секунд
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form-section");
    const toggleButton = document.createElement("button");


    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        contactForm.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        item.querySelector(".faq-question").addEventListener("click", function () {
            item.classList.toggle("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
        currentIndex = index;
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(autoSlide, 5000); // Авто-смена каждые 5 секунд

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showSlide(index));
    });

    showSlide(0); // Показываем первый слайд при загрузке
});
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
        currentIndex = index;
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(autoSlide, 5000); // Авто-смена каждые 5 секунд

    // Определяем `currentSlide`, чтобы onclick работал
    window.currentSlide = function(index) {
        showSlide(index);
    };

    showSlide(0); // Показываем первый слайд при загрузке
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".service-slide");
    const dots = document.querySelectorAll(".service-dot");

    function showServiceSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
        currentIndex = index;
    }

    function autoServiceSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showServiceSlide(currentIndex);
    }

    setInterval(autoServiceSlide, 5000); // Авто-смена слайдов каждые 5 секунд

    window.currentServiceSlide = function (index) {
        showServiceSlide(index);
    };

    showServiceSlide(0); // Показываем первый слайд при загрузке
});


document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.querySelector(".contact-button"); // Кнопка "Связаться"
    const navLinks = document.querySelector(".nav-links"); // Мобильное меню
    const burger = document.querySelector(".burger"); // Бургер-меню

    contactLink.addEventListener("click", function (event) {
        event.preventDefault(); // Отключаем стандартное поведение ссылки

        // Закрываем мобильное меню
        navLinks.classList.remove("nav-active");
        burger.classList.remove("open"); // Закрываем бургер-меню

        // Плавный скролл к секции "contact-form"
        const targetSection = document.querySelector("#contact-form");
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Учитываем отступ сверху
                behavior: "smooth",
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
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
});

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        window.scrollBy(0, -50);
    } else if (event.key === "ArrowDown") {
        window.scrollBy(0, 50);
    }
});

