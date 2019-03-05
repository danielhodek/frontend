import * as effects from './effects.js';

function setupDropdown(toggle) {
  let menu = document.getElementById(toggle.getAttribute('data-target'));
  let caret = toggle.querySelector('.caret');

  menu.addEventListener('click', e => e.stopPropagation());

  const handleClick = e => {
    toggleMenu();
    e.stopPropagation();
  };

  const toggleMenu = () => {
    caret.classList.toggle('caret-down');
    caret.classList.toggle('caret-up');
    if (menu.style.maxHeight) {
      effects.hideMaxHeight(menu);
      document.removeEventListener('click', handleClick);
    } else {
      effects.showMaxHeight(menu);
      document.addEventListener('click', handleClick);
    }
  };

  toggle.addEventListener('click', handleClick);
}

export function setupDropdowns() {
  let dropdownToggles = Array.from(document.querySelectorAll('.dropdown__tgl'));
  dropdownToggles.forEach(d => setupDropdown(d));
}
