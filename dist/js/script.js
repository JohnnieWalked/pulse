"use strict";
$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 700,
		adaptiveHeight: false,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				dots: true,
				arrows: false
			}
			}
		]
	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleTabLink(className) {
		$(className).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
		});
	}

	toggleTabLink('.catalog-item__link');
	toggleTabLink('.catalog-item__back');

	// Modal -------------------------------------------------------------------

	$('[data-modal=consultation]').on('click', () => {
		$('.overlay, #consultation').fadeIn();
		document.body.style.overflow = 'hidden';
	});

	$('.modal__close').on('click', () => {
		$('.overlay, #consultation, #order, #thanks').fadeOut();
		document.body.style.overflow = '';
	});

	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__subheader').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn();
			document.body.style.overflow = 'hidden';
		});
	});

	const overlay = document.querySelector(".overlay");
	document.addEventListener('keydown', (e) => {
		if(e.code === `Escape` && overlay.style.display == 'block') {
			$('.overlay, #consultation, #order, #thanks').fadeOut();
			document.body.style.overflow = '';
		}
	});

	function viladateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Please, enter your name",
					minlength: jQuery.validator.format("At least {0} characters required!")
				},
				phone: "Please, enter your phone number",
				email: {
					required: "Please, enter your mail",
					email: "Incorrect mail"
				},
			}
		});
	}

	viladateForms('#consultation-form');
	viladateForms('#consultation form');
	viladateForms('#order .feed-form');
	
	$('input[name=phone]').mask("+38 (999) 999-99-99");
	
	$('form').submit(function(e) {
		e.preventDefault();

		if(!$(this).valid()) {
			return;
		}

		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn();

			$('form').trigger('reset');
		});
		return false;
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	new WOW().init();
	




});