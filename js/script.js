$(document).ready(function() {
	$('.menu__items.one').click(function(event) {
		$('.sub__menu').toggleClass('slide_down');

	});
	$('.menu__items.two').click(function(event) {
		$('.sub__menu2').toggleClass('slide_down');

	});
	$('.menu__items.three').click(function(event) {
		$('.sub__menu3').toggleClass('slide_down');

	});
	$('.burger__menu').click(function(event) {
		$('.menu,.burger__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

/**/



$(document).ready(function() {
	$('.menu__items').click(function(event) {
		$('.accord__menu').toggleClass('down').next().slideToggle(300);
	});
});
