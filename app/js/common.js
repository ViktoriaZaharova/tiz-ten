$(document).ready(function () {
    $('.panel_heading:first-child').addClass('in').find('.block_hover').fadeIn();

    $('.panel_heading > .block_title').on('click', function () {
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
        $(this).parent().siblings('.panel_heading').not(this).removeClass('in').find('.block_hover').slideUp();
    });

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

$('.tabs__caption-mobile').on('click', function () {
    $('.tabs__content').removeClass('active');
   $(this).siblings('.tabs__content').slideDown();
});


// событие клика за пределами блока
$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".breadcrumb.open"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('open'); // скрываем его
    }
});

// скрыть меню каталога по клику за его пределами
$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".menu-container"); // тут указываем ID элемента
    var btn = $('.btn-catalog');
    if (!div.is(e.target) // если клик был не по нашему блоку
        && !btn.is(e.target) && btn.has(e.target).length === 0
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(); // скрываем его
        $('.overlay-menu').fadeOut();
        btn.removeClass('open-menu');
    }
});

$(document).ready(function() {
    $('.js-example-basic-single').select2({
        placeholder: '',
        allowClear: true,
        width: '100%',
    });
});

// load header+footer all pages
$(function () {
    var includes = $('[data-include]');
    jQuery.each(includes, function () {
        var file = 'views/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});


$('.btn-load-characteristics').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parent().find('.list-characteristics li');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.html('Свернуть');

        content.css('display', 'flex');
    } else {
        $this.removeClass('trigger');
        $this.html('Все характеристики');

        content.slice(4).slideUp();
    }
});

$(document).ready(function(){
    $('.zoom-box').zoom();
});

$(window).on('load resize', function() {
    if ($(window).width() < 768) {
        $('.zoom-box').trigger('zoom.destroy');
    }
});

// header js
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
        content = $('.js-tab-content[data-tab="' + id + '"]');

    $('.mega-menu__route.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});


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

// input search
$(function () {
    $('.form-search input').keydown(checkInput).keyup(checkInput);
});

function checkInput() {
    if ($('.form-search input').val() === '') {
        $(this).parents('.form-search-wrap').removeClass('clicked');
    } else {
        $(this).parents('.form-search-wrap').addClass('clicked');
    }
}

// модальные окна (несколько)
$(function () {
    let overlay = $('.overlay'),
        open_modal = $('.open_modal'),
        close = $('.modal__close, .overlay'),
        modal = $('.modal__div');

    open_modal.on('click', function (event) {
        event.preventDefault();

        modal.css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        }, 200);

        let div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
                $('.slick-slider').slick('setPosition');
            });

    });

    close.on('click', function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});

$('#gallery-product-max-1').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow.svg" alt=""></button>',
    dots: false,
    // asNavFor: '.gallery-product-preview',
    focusOnSelect: true,
    afterChange: function (slickSlider, i) {
        //remove all active class
        $('#gallery-product-preview-1 .slick-slide').removeClass('slick-active');
        //set active class for current slide
        $('#gallery-product-preview-1 .slick-slide').eq(i).addClass('slick-active');
    },
    responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: true, arrows: false,
            }
        }
    ]
});

$('#gallery-product-preview-1').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    asNavFor: '#gallery-product-max-1',
    focusOnSelect: true,
    vertical: true,
    responsive: [
        {
            breakpoint: 860,
            settings: {
                vertical: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                vertical: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                vertical: false,
            }
        }
    ]
});

$('#gallery-product-max-2').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow.svg" alt=""></button>',
    dots: false,
    // asNavFor: '.gallery-product-preview',
    focusOnSelect: true,
    afterChange: function (slickSlider, i) {
        //remove all active class
        $('#gallery-product-preview-2 .slick-slide').removeClass('slick-active');
        //set active class for current slide
        $('#gallery-product-preview-2 .slick-slide').eq(i).addClass('slick-active');
    },
    responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: true, arrows: false,
            }
        }
    ]
});

$('#gallery-product-preview-2').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    asNavFor: '#gallery-product-max-2',
    focusOnSelect: true,
    vertical: true,
    responsive: [
        {
            breakpoint: 860,
            settings: {
                vertical: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                vertical: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                vertical: false,
            }
        }
    ]
});

//set active class to first slide
$('#gallery-product-preview-1 .slick-slide').eq(0).addClass('slick-active');

var slideTimer1;
var slideTimer2;
$('#gallery-product-preview-1').on('mouseenter', '.slick-slide', function (e) {
    var $currTarget = $(e.currentTarget);
    $('#gallery-product-preview-1 .slick-slide').removeClass('slick-current');
    $currTarget.addClass('slick-current');

    slideTimer1 = setInterval(function () {
        var index = $('#gallery-product-preview-1').find('.slick-current').data('slick-index');
        var slickObj = $('#gallery-product-preview-1').slick('getSlick');
        slickObj.slickGoTo(index);
    }, 200);
}).on('mouseleave', '.slick-slide', function (e) {
    clearTimeout(slideTimer1);
});

$(document).on('click', '.gallery-product-max__item', function() {
    $('.slick-slider').slick('slickGoTo', $(this).parent().attr('data-slick-index'));
});

$('#gallery-product-preview-2').on('mouseenter', '.slick-slide', function (e) {
	var $currTarget = $(e.currentTarget);
	$('#gallery-product-preview-2 .slick-slide').removeClass('slick-current');
	$currTarget.addClass('slick-current');
	var index = $('#gallery-product-preview-2').find('.slick-current').data('slick-index');
	var slickObj = $('#gallery-product-preview-2').slick('getSlick');
	slickObj.slickGoTo(index);
    slideTimer2 = setTimeout(function () {
		var $currTarget = $(e.currentTarget);
		$('#gallery-product-preview-2 .slick-slide').removeClass('slick-current');
		$currTarget.addClass('slick-current');
		var index = $('#gallery-product-preview-2').find('.slick-current').data('slick-index');
		var slickObj = $('#gallery-product-preview-2').slick('getSlick');
		slickObj.slickGoTo(index);
    }, 150);
}).on('mouseleave', '.slick-slide', function (e) {
	/*/
    clearTimeout(slideTimer2);
	/*/
});

$('#gallery-product-max-2').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $('#gallery-product-preview-2 .slick-slide').removeClass('slick-current');
    $('#gallery-product-preview-2 .slick-slide').eq(currentSlide).addClass('slick-current');
});
