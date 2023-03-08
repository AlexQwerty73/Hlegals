let burger = document.querySelector('.burger')
let cross = document.querySelector('.cross')
let menu = document.querySelector('.fix')
let body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('hidden')
})
cross.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('hidden')
})