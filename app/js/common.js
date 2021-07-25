$('.btn-arrow-toggle').on('click', function (e) {
    e.preventDefault();
    $('.footer-box h3').removeClass('click');
    $('.footer-box__body').slideUp();
    $(this).parent().toggleClass('click').siblings('.footer-box__body').slideToggle();
});

$('.menu-main__list li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location === link) {
        $(this).addClass('current');
    }
});


$('.btn-burger-mobile').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('clicked');
    $('.mobile-menu').fadeToggle();
});

$('.dropdown-item__links').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.dropdown-menu').css('left', '0');
});

$('.prev-menu').on('click', function (e) {
    e.preventDefault();
    $(this).parent('.dropdown-menu').css('left', '-100%');
});

