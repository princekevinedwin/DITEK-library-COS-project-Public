// Toggle search form
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

// Quote slider
let currentIndex = 0;
const quotes = document.querySelectorAll('.quote');
const totalQuotes = quotes.length;

function showQuote(index) {
    quotes.forEach((quote, i) => {
        quote.style.display = i === index ? 'block' : 'none';
    });
}

function nextQuote() {
    currentIndex = (currentIndex + 1) % totalQuotes;
    showQuote(currentIndex);
}

setInterval(nextQuote, 5000);

showQuote(currentIndex);

// Toggle login form
let loginForm = document.querySelector('.loginpage');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}

// Header behavior on scroll
window.onscroll = () => {
    searchForm.classList.remove('active');

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

// Swiper initialization
var swiperBooks = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiperFeatured = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});



document.addEventListener('DOMContentLoaded', function() {

    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

  
    const searchBtn = document.getElementById('search-btn');
    const searchForm = document.querySelector('.search-form');
    searchBtn.addEventListener('click', function() {
        searchForm.classList.toggle('active');
    });
});
