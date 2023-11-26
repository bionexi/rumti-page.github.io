"use strict";

window.addEventListener("DOMContentLoaded", function () {
  var navigation = document.querySelector("#navigation"),
      menuButton = document.querySelector("#menu-icon"),
      menuLink = document.querySelectorAll(".menu__link");

  menuButton.onclick = function () {
    navigation.classList.toggle("navigation_active");
  }; // menuLink.forEach((item) => {
  //   item.addEventListener("click", () => {
  //     navigation.classList.remove("navigation_active");
  //   });
  // });
  // при клике в любом месте окна браузера


  window.addEventListener("click", function (e) {
    // находим элемент, на котором был клик
    var target = e.target; // если этот элемент не кнопка

    if (!target.closest("#menu-icon")) {
      // то закрываем окно навигации, удаляя активный класс
      navigation.classList.remove("navigation_active");
    }
  });
});