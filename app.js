const video = document.querySelector('.video-background')
const swiperText = new Swiper('.swiper', {
    speed: 1800,
    mousewheel: { },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
})

swiperText.on('slideChange', function() {
    gsap.to(video, 2.5, {
        currentTime: (video.duration / this.slides.length) * this.realIndex,
        ease: Power1.easeOut
    })
})
swiperText.on('slideChangeTransitionStart', function() {
    video.classList.add('change')
}).on('slideChangeTransitionEnd', function() {
    video.classList.remove('change')
})
