
      const body = document.querySelector('.body');
			const menuOpen = document.querySelector('.menu-toggle');
			const menuClose = document.querySelector('.cancel-btn');

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
