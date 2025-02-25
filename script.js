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