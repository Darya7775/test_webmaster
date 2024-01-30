const body = document.querySelector<HTMLElement>('body');
const button = document.querySelector<HTMLElement>('.header__menu');
const menu = document.querySelector<HTMLElement>('[data-menu="nav"]');
const overlay = document.querySelector<HTMLElement>('.overlay');

const openMenu = () => {
  button?.setAttribute('data-state', 'active');
  button?.setAttribute('aria-label', 'закрыть меню');
  menu && (menu.style.display = 'block');
  overlay && (overlay.style.display = 'block');
  body && (body.style.overflow = 'hidden');
  overlay?.addEventListener('click', closeMenu);
};

const closeMenu = () => {
  button?.setAttribute('data-state', '');
  button?.setAttribute('aria-label', 'открыть меню');
  menu && (menu.style.display = 'none');
  overlay && (overlay.style.display = 'none');
  body && (body.style.overflow = 'auto');
  overlay?.removeEventListener('click', closeMenu);
};

export const handlerClickOfBurger = () => {
  button?.addEventListener('click', () => {

    if (button.getAttribute('data-state') === 'active') {
      closeMenu();
    } else {
      openMenu();
    }
  });
};

const breakpoint = window.matchMedia('(min-width: 1024px)');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    menu && (menu.style.display = 'flex');
    button?.setAttribute('data-state', '');
    body && (body.style.overflow = 'auto');
    overlay && (overlay.style.display = 'none');
    overlay?.removeEventListener('click', closeMenu);
  } else {
    menu && (menu.style.display = 'none');
  }
};

breakpoint.addEventListener('change', breakpointChecker);
breakpointChecker();
