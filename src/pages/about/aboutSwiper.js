
const swiperAboutFacilities = new Swiper('.swiper__about__facilities', {
    loop: true,
    pagination: {
        el: '.swiper__about__facilities .swiper-pagination',

        // dynamicBullets: true,
        // dynamicMainBullets: 3,
        

        clickable: true,
    }
})

const swiperAboutRoom = new Swiper('.swiper__about__room', {
    loop: true,
    pagination: {
        el: '.swiper__about__room .swiper-pagination',
        clickable: true,
    }
})