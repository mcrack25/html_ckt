$(document).ready(function () {

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
		callbacks: {}
	});

	$(".ckt__button").on("click", function (e) {
		e.preventDefault();
		var id = $(this).attr('data-id');

		$.magnificPopup.open({
			items: {
				src: '#popup-ckt'
			},
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in',
			callbacks: {}
		}).magnificPopup.open();
	});

	/* СКРОЛЛ СТРАНИЦЫ */
	/* Плавная прокрутка к секции Переезд в болгарию */
	$(".scrollTo").click(function (e) {
		e.preventDefault();
		var id = $(this).attr('data-to');
		$('html, body').animate({
			scrollTop: $(id).offset().top
		}, 2000);
	});

	$(".consultation_form").submit(function (e) {
		e.preventDefault();
		$('#popup-success .form-dialog__title').html('');
		var action = $(this).attr('action');
		var method = $(this).attr('method');

		$.ajax({
			type: method,
			url: action,
			data: $(this).serialize(),
			dataType: 'json',
			success: function (data) {
				$('#popup-success .form-dialog__title').html(data.message);

				$.magnificPopup.open({
					items: {
						src: '#popup-success'
					},
					type: 'inline',
					fixedContentPos: false,
					fixedBgPos: true,
					overflowY: 'auto',
					closeBtnInside: true,
					preloader: false,
					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in',
					callbacks: {}
				}).magnificPopup.open();
			}
		});
	});

	$(".sale_15_form").submit(function (e) {
		e.preventDefault();
		$('#popup-success .form-dialog__title').html('');
		var action = $(this).attr('action');
		var method = $(this).attr('method');

		$.ajax({
			type: method,
			url: action,
			data: $(this).serialize(),
			dataType: 'json',
			success: function (data) {
				$('#popup-success .form-dialog__title').html(data.message);
				$.magnificPopup.open({
					items: {
						src: '#popup-success'
					},
					type: 'inline',
					fixedContentPos: false,
					fixedBgPos: true,
					overflowY: 'auto',
					closeBtnInside: true,
					preloader: false,
					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in',
					callbacks: {}
				}).magnificPopup.open();
			}
		});
	});

	$(".get_recept_form").submit(function (e) {
		e.preventDefault();
		var action = $(this).attr('action');
		var method = $(this).attr('method');

		$.ajax({
			type: method,
			url: action,
			data: $(this).serialize(),
			dataType: 'json',
			success: function (data) {
				$.magnificPopup.open({
					items: {
						src: '#popup-recept'
					},
					type: 'inline',
					fixedContentPos: false,
					fixedBgPos: true,
					overflowY: 'auto',
					closeBtnInside: true,
					preloader: false,
					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in',
					callbacks: {}
				}).magnificPopup.open();
			}
		});
	});

	$(".have_questions_form").submit(function (e) {
		e.preventDefault();
		$('#popup-success .form-dialog__title').html('');
		var action = $(this).attr('action');
		var method = $(this).attr('method');

		$.ajax({
			type: method,
			url: action,
			data: $(this).serialize(),
			dataType: 'json',
			success: function (data) {
				$('#popup-success .form-dialog__title').html(data.message);
				$.magnificPopup.open({
					items: {
						src: '#popup-success'
					},
					type: 'inline',
					fixedContentPos: false,
					fixedBgPos: true,
					overflowY: 'auto',
					closeBtnInside: true,
					preloader: false,
					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in',
					callbacks: {}
				}).magnificPopup.open();
			}
		});
	});

	/* ВИДЕОФОН */
	if (!device.tablet() && !device.mobile()) {
		$('.player_test').mb_YTPlayer();
		$('.player_company').mb_YTPlayer();
	} else {
		$('.test').css({
			"background": 'url("../img/test_bg.jpg") no-repeat center top',
			"background-size": "cover"
		});
		$('.company').css("background", "#070707");
	}

	/* Выдвижное меню */
	$('.mobile-menu').on('click', function (e) {
		e.preventDefault();

		$('.overlay').toggleClass('overlay_active');
		$('.left-menu').toggleClass('left-menu_active');
	});

	$('.overlay, .left-menu__close').on('click', function (e) {
		e.preventDefault();
		$('.overlay').toggleClass('overlay_active');
		$('.left-menu').toggleClass('left-menu_active');
	});

	/* SLIDERS */
	$('.img-keyse-slider__list').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.text-keyse-slider__list',
		appendArrows: $('.img-keyse-slider__arrows'),
		prevArrow: '<button type="button" class="img-keyse-slider__arrow img-keyse-slider__arrow_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="img-keyse-slider__arrow img-keyse-slider__arrow_next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		dots: false,
	});

	$('.text-keyse-slider__list').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.img-keyse-slider__list',
		focusOnSelect: true,
		arrows: false,
		fade: true,
		cssEase: 'linear'
	});

});