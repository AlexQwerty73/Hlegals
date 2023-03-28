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

$('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    // fade: true,
    cssEase: 'ease-in-out'
});

let count;
let w = window.innerWidth;

if (w < 1070) {
    count = 2
} else if (w < 1370) {
    count = 3
} else {
    count = 4
}

$('.slider').slick({
    dots: true,
    speed: 500,
    slidesToShow: count,
    slidesToScroll: count
});
