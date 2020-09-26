$(function () {

	$('.slider').slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: 4000,
	});

	$('.icon-menu').on('click',function () {
		$('.menu').addClass('active');
	});

	$('.close-btn').on('click',function () {
		$('.menu').removeClass('active');
	});

});



