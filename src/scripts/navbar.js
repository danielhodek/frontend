import * as effects from './effects.js';

function setupNavbar(toggle) {
  let collapse = document.getElementById(toggle.getAttribute('data-target'));

  toggle.addEventListener('click', () => {

    if (collapse.style.maxHeight) {
      collapse.classList.add('navbar__collapse-transition');
      effects.hideMaxHeight(collapse);
    } else {
      collapse.classList.add('navbar__collapse-transition');
      effects.showMaxHeight(collapse);
    }

    collapse.addEventListener('transitionend', () => {
      collapse.classList.remove('navbar__collapse-transition');
    });
  });
}

export function setupNavbars() {
  let navbarToggles = Array.from(document.querySelectorAll('.navbar__tgl'));
  navbarToggles.forEach(n => setupNavbar(n));
}
