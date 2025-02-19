// Открытие/закрытие меню на мобильных устройствах
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const topNav = document.getElementById("topNav");
  
    menuToggle.addEventListener("click", function () {
      if (topNav.style.display === "block") {
        topNav.style.display = "none";
      } else {
        topNav.style.display = "block";
      }
    });
  });
  