$(document).ready(function () {
    $(".wish-icon").click(function () {
        let attr = $(this).find('.fa-heart').attr('data-prefix')
        if (attr == 'far') {
            $(this).find('.fa-heart').attr('data-prefix', 'fas')
        } else {
            $(this).find('.fa-heart').attr('data-prefix', 'far')
        }

    });
});

// Product details slider
$("[data-fancybox]").fancybox({
    buttons: [
        "zoom",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close",
    ],
});
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    autoplay: true,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});