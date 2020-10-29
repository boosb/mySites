$(function () {
	$('.review-page__items').slick({
		prevArrow: '<button class="slider-btn slider-btn__left"><svg width="28" height="52" viewBox="0 0 28 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 1L2 26L27 51" stroke="black" stroke-width="2"/></svg></button>',
		nextArrow: '<button class="slider-btn slider-btn__right"><svg width="28" height="52" viewBox="0 0 28 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 51L26 26L1 1" stroke="black" stroke-width="2"/></svg></button>'
		//infinite: false
	});

	$('.review-page__video-items').slick({
		prevArrow: '<button class="video-slider-btn video-slider-btn__left"><svg width="28" height="52" viewBox="0 0 28 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 1L2 26L27 51" stroke="black" stroke-width="2"/></svg></button>',
		nextArrow: '<button class="video-slider-btn video-slider-btn__right"><svg width="28" height="52" viewBox="0 0 28 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 51L26 26L1 1" stroke="black" stroke-width="2"/></svg></button>',
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.experience-page__gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});

	$('.diploma-page__row-one').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});

	$('.diploma-page__row-two').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});

	$('.menu__btn').on('click', function () {
		$('.litebox').addClass('active');
	});

	$('.main-btn').on('click', function () {
		$('.litebox').addClass('active');
	});

	$('.litebox__close-btn').on('click', function () {
		$('.litebox').removeClass('active');
	});

	$('.further').on('click', function () {
		$('.further').addClass('unshow');
		$('.uglify').addClass('show');
	});

	$('.main__btn-phone').on('click', function () {
		$('.litebox').addClass('active');
	});

	$('.menu__phone-btn').on('click', function () {
		$('.phone-menu').addClass('show');
	});

	$('.phone-menu__close-btn').on('click', function () {
		$('.phone-menu').removeClass('show');
	});

	$('.phone-menu__list-item').on('click', function () {
		$('.phone-menu').removeClass('show');
	});

	$(document).ready(function () {

		//E-mail Ajax Send
		$(".form-in-litebox").submit(function () { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function () {
				alert("Спасибо! Ваше сообщение отправлено!");
				setTimeout(function () {
					// Done Functions
					//th.trigger("reset");
					$('.litebox').removeClass('active');
				}, 400);
			});
			return false;
		});

		//E-mail Ajax Send
		$(".form-in-footer").submit(function () { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function () {
				alert("Спасибо! Ваше сообщение отправлено!");
				setTimeout(function () {
					// Done Functions
					th.trigger("reset");
				}, 1000);
			});
			return false;
		});

	});
});