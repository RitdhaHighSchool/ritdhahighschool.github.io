(function ($) {
	$('.twitter').on('touchstart mouseover ', function () {
		$('.fa-twitter, #username').addClass('twitterhover');
	}).on('touchend mouseout', function () {
		$('.fa-twitter, #username').removeClass('twitterhover');
	});
	$('.instagram').on('touchstart mouseover', function () {
		$('.fa-instagram, #username').addClass('instagramhover');
	}).on('touchend mouseout', function () {
		$('.fa-instagram, #username').removeClass('instagramhover');
	});
	$('.fbpage').on('touchstart mouseover', function () {
		$('.fa-facebook, #username').addClass('fbhover');
	}).on('touchend mouseout', function () {
		$('.fa-facebook, #username').removeClass('fbhover');
	});
	$('body').on('contextmenu dragstart', 'img, a', function (e) {
		e.preventDefault();
	});
	$('.fancybox').on('click auxclick', function (e) {
		if (e.which == 2) {
			e.preventDefault();
		}
	});
})(jQuery);