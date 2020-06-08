// For side-menu
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}


// For auto-slideshow
// initialize swiper
var swiper = new Swiper('.swiper-container', {
    speed: 1000,
    delay: 3000,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination'
    },
});

// For auto-slideshow
var mySwiper = document.querySelector('.swiper-container').swiper

// Now you can use all slider methods like
mySwiper.autoplay.start();