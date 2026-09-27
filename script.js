const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-nav');
function setMenu(open) {
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  menu.hidden = !open;
}
toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
window.matchMedia('(min-width: 901px)').addEventListener('change', event => {
  if (event.matches) setMenu(false);
});
