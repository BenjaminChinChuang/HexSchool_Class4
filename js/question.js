jQuery(document).ready(function () {
  jQuery('.btnToggle').click(function (e) {
    e.preventDefault()
    jQuery('.header-navigation-container').toggleClass('active')
  })

  jQuery('.slidedownBtn').click(function (e) {
    e.preventDefault()
    jQuery(this).toggleClass('animate')
    jQuery(this).parent().siblings().slideToggle()
  })
})
