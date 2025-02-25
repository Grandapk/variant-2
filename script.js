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