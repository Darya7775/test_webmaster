const parent = document.querySelector<HTMLElement>('[data-accordion="parent"]');
const buttons = parent?.querySelectorAll<HTMLElement>('[data-accordion="button"]');
const contents = parent?.querySelectorAll<HTMLElement>('[data-accordion="content"]');

export const accordion = () => {
  buttons?.forEach((button, i) => {
    button.addEventListener('click', () => {
      if (button.getAttribute('data-state') === 'active') {
        button.setAttribute('data-state', '');
        contents && (contents[i].style.maxHeight = '0');
      } else {
        buttons.forEach((but, iall) => {
          but.setAttribute('data-state', '');
          contents && (contents[iall].style.maxHeight = '0');
        })
        button.setAttribute('data-state', 'active');
        contents && (contents[i].style.maxHeight = `${contents[i].scrollHeight}px`);
      }
    })
  });
};

