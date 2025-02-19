// Пример простой функции для кнопки "Узнать больше" на главной
function learnMore() {
    alert("Переход на страницу услуг!");
    window.location.href = "services.html";
  }
  
  // Дополнительный код (валидация формы или что-то ещё) можете добавить здесь.
  document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.");
        contactForm.reset();
      });
    }
  });
  