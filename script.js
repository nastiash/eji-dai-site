
      const body = document.querySelector('.body');
			const menuOpen = document.querySelector('.menu-toggle');
      const menuClose = document.querySelector('.cancel-btn');

      const boys = document.querySelector('.parents__boys');
      const girls = document.querySelector('.parents__girls');
      const openBoysButton = document.querySelector('.parents__button_boy');
      const openGirlsButton = document.querySelector('.parents__button_girl');

      // бургер
      function openMenu() {
        body.classList.add('menu-open');
      }

      function closeMenu() {
        body.classList.remove('menu-open');
      }

      menuOpen.addEventListener("click", () => {
        openMenu();
      });

      menuClose.addEventListener("click", () => {
        closeMenu();
      });

// переключение самцов и самок

function openGirls() {
  girls.classList.remove('parents_hidden');
  boys.classList.add('parents_hidden');
}

function openBoys() {
  girls.classList.add('parents_hidden');
  boys.classList.remove('parents_hidden');
}

openBoysButton.addEventListener("click", () => {
  openBoys();
});

openGirlsButton.addEventListener("click", () => {
  openGirls();
});
