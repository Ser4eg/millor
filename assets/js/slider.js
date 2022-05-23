$(document).ready(function () {
    $('.offer-slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                },
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]       
    });

});

$(document).ready(function () {
    $('.products-slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 700,
        easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                },
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]       
    });

});
