var swiper = new swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesperView:'auto',
    coverfloweffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifer: 1,
        slidesShadow: true,
    },
    pagination: {
        el:'.swiper-pagination',
    },
    loop: true,
})