window.addEventListener("DOMContentLoaded", () => {
  const navigation = document.querySelector("#navigation"),
    menuButton = document.querySelector("#menu-icon"),
    menuLink = document.querySelectorAll(".menu__link");

  menuButton.onclick = () => {
    navigation.classList.toggle("navigation_active");
  };

  // menuLink.forEach((item) => {
  //   item.addEventListener("click", () => {
  //     navigation.classList.remove("navigation_active");
  //   });
  // });

  // при клике в любом месте окна браузера
  window.addEventListener("click", (e) => {
    // находим элемент, на котором был клик
    const target = e.target;
    // если этот элемент не кнопка
    if (!target.closest("#menu-icon")) {
      // то закрываем окно навигации, удаляя активный класс
      navigation.classList.remove("navigation_active");
    }
  });
});
