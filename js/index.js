// burger
document.querySelector('.header__burger').addEventListener('click', function() {
  document.querySelector('.header__menu').classList.add('is-active')
})
document.querySelector('.menu__btn').addEventListener('click', function() {
  document.querySelector('.header__menu').classList.remove('is-active')
})

// form
document.querySelector('.header__submit').addEventListener('click', function() {
  document.querySelector('.header__form').classList.add('header__form_active')
})
document.querySelector('.header__button_close').addEventListener('click', function() {
  document.querySelector('.header__form').classList.remove('header__form_active')
})

// slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 1,
});

// tabs
document.querySelectorAll('.how-item__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll('.how-item__btn').forEach(function(btn){
      btn.classList.remove('how-item__btn_active')
    })
      event.currentTarget.classList.add('how-item__btn_active')

    document.querySelectorAll('.how__wrap').forEach(function(btn) {
      btn.classList.remove('how__wrap_active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('how__wrap_active')
  })
})

// accordion

$( ".accordion" ).accordion({
  icons: false,
  heightStyle: "content",
  collapsible: true,
  active: false
});



























