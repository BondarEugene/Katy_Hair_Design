const burger = document.querySelector('.list-header__burger');
const menu = document.querySelector('.list-header');

burger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');

  burger.setAttribute('aria-expanded', isOpen);
  burger.setAttribute('aria-label', isOpen ? 'Закрити меню' : 'Відкрити меню');
});

menu.querySelectorAll('.list-header__item a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', false);
    burger.setAttribute('aria-label', 'Відкрити меню');
  });
});
