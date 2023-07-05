window.addEventListener('DOMContentLoaded', function() {
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
})
