import { handlerClickOfBurger } from './header.ts';
import { accordion } from './accordion.ts';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    handlerClickOfBurger();
    accordion();
  });
});
