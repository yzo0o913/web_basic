const menuOpenEl = document.getElementById('btn--open')
const menuCloseEl = document.getElementById('btn--close')
const sideMenuEL = document.getElementById('nav__menu')

menuOpenEl.addEventListener("click", function() {
    menuOpenEl.style.display="none"
    menuCloseEl.style.display="block"
    sideMenuEL.style.transform = 'translate(0)'
})

menuCloseEl.addEventListener("click", function() {
    menuOpenEl.style.display="block"
    menuCloseEl.style.display="none"
    sideMenuEL.style.transform = 'translate(100)'
})