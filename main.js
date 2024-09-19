
//carousel//



const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    carousel.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

// Configurer ScrollReveal
 

ScrollReveal().reveal('.carousel-container', {
    origin: 'bottom',
    distance: '50px',
    duration: 3000,
    delay: 800,
    reset: false
});

ScrollReveal().reveal('.product-card', {
    origin: 'bottom',
    distance: '150px',
    duration: 1000,
    delay: 200,
    interval: 200,
    reset: false
});

ScrollReveal().reveal('.boom-box', {
    origin: 'left',
    distance: '150px',
    duration: 2000,
    delay: 400,
    interval: 200,
    reset: false
});


ScrollReveal().reveal('.laptop', {
    origin: 'right',
    distance: '150px',
    duration: 2000,
    delay: 400,
    interval: 200,
    reset: false
});


ScrollReveal().reveal('.featured-item', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 300,
    reset: false
});

ScrollReveal().reveal('.category', {
    origin: 'bottom',
    distance: '50px',
    duration: 3000,
    delay: 800,
    reset: false
});



ScrollReveal().reveal('footer', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 400,
    reset: false
});
