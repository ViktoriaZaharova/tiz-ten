$('.btn-arrow-toggle').on('click', function (e) {
    e.preventDefault();
    $('.footer-box h3').removeClass('click');
    $('.footer-box__body').slideUp();
    $(this).parent().toggleClass('click').siblings('.footer-box__body').slideToggle();
});

// $('.menu-main__list li a').each(function () {
//     var location = window.location.href;
//     var link = this.href;
//     if (location === link) {
//         $(this).addClass('current');
//     }
// });

$('.btn-catalog').on('click', function (e) {
    e.preventDefault();
    $('.overlay-menu').fadeToggle();
    $(this).toggleClass('open-menu');
    $('.menu-container').fadeToggle();
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

$(".mega-menu__route").hover(function () {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="'+ id +'"]');

    $('.mega-menu__route.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});


// accordeon
function accordeon() {
    var panel = $('.panel_heading');

    if (panel.hasClass('in')) {
        $('.in').find('.block_hover').slideDown();
    }

    $('.panel_heading .block_title').on('click', function () {
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
    });
}

accordeon();


$('.gallery-product-max').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: false,
    asNavFor: '.gallery-product-preview',
    focusOnSelect: true,
});

$('.gallery-product-preview').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    asNavFor: '.gallery-product-max',
    focusOnSelect: true,
    vertical: true,
    responsive: [
        {
            breakpoint: 860,
            settings: {
                vertical: false,
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
                vertical: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                vertical: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                vertical: false,
            }
        }
    ]
});

// tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$('.breadcrumbs-button').on('click', function () {
   $('.breadcrumb').toggleClass('open');
});