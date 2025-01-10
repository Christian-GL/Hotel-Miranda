
const swiperHomeRoom = new Swiper('.swiper__home__room', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

const swiperHomeFacilities = new Swiper('.swiper__home__facilities', {
    loop: true,
    pagination: {
        el: '.swiper__home__facilities .swiper-pagination',
        clickable: true,
    }
})

const swiperHomeFoods = new Swiper('.swiper__home__foods', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

const swiperHomeImgs = new Swiper('.swiper__home__imgs', {
    loop: true,
    pagination: {
        el: '.swiper__home__imgs .swiper-pagination',
        clickable: true,
    }
})