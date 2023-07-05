document.querySelector('.header__submit').addEventListener('click', function() {
  document.querySelector('.header__form').classList.add('header__form_active')
})
document.querySelector('.header__button_close').addEventListener('click', function() {
  document.querySelector('.header__form').classList.remove('header__form_active')
})
