const nav = document.querySelector('.nav')
const menu = document.querySelector('.hum-menu')

menu.addEventListener('click', (e) => {
    nav.classList.toggle('open')
    menu.classList.toggle('close')
})