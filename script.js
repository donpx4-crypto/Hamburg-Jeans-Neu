// Mobiles Menü: öffnet/schließt die Navigation per Klick auf den Menü-Button
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
btn.addEventListener('click', () => {
  const offen = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', offen);
});
