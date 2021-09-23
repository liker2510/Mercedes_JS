const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')
const menuList =document.querySelectorAll('.menu-list__item')

const toggleMune = () => {
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
}
const toggleMuneList = () => {
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
}
burger.addEventListener('click', () => {
    toggleMune()
})
menuList.forEach((btn,) => {
    btn.addEventListener('click', () => {
        toggleMuneList()
    })
})

