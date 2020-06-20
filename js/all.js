jQuery(document).ready(function () {
  jQuery('.btnToggle').click(function (e) {
    e.preventDefault()
    jQuery('.header-navigation-container').toggleClass('active')
  })
})
