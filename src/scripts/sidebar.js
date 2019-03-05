function setupSidebar(toggle) {
  let menu = document.getElementById(toggle.getAttribute('data-target'));
  let bg = document.querySelector('.bg-shade');

  toggle.addEventListener('click', () => {
    if (menu.classList.contains('sidebar-open')) {
      closeSidebar();
    } else {
      openSidebar();
    } 
  });

  bg.addEventListener('click', closeSidebar);

  function openSidebar() {
    menu.classList.add('sidebar-open');
    bg.style.visibility = 'visible';
    bg.style.background = 'rgba(0,0,0,0.5)';
  }

  function closeSidebar() {
    menu.classList.remove('sidebar-open');
    bg.style.visibility = 'hidden';
    bg.style.background = null;
  }
}

export function setupSidebars() {
  let sidebarToggles = Array.from(document.querySelectorAll('.sidebar__tgl'));
  sidebarToggles.forEach(s => setupSidebar(s));
}
