jQuery(document).ready(function () {
	if (/Android/i.test(navigator.userAgent)) {
    $('.twitter').attr('href', 'intent://twitter.com/TheGiftedGlobal#Intent;package=com.twitter.android;scheme=https;end');
		$('.fbpage').attr('href', 'intent://profile/492376137854324#Intent;package=com.facebook.katana;scheme=fb;S.browser_fallback_url=https://facebook.com/TheGiftedGlobal;end');
		$('.instagram').attr('href', 'intent://www.instagram.com/thegiftedglobal/#Intent;package=com.instagram.android;scheme=https;end');
	}

	if (/iPhone|iPad|iPod|^i/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
		var theme = $('#theme');
		var _overlay = $('#themeoverlay');

		_overlay.on('click', function (e) {
			theme.play();
			_overlay.remove();
		}, false);

		setTimeout(function () {
			_overlay.css('display', 'block')
		}, 1000);

		$(document).on('touchmove', function(e) {
			e.preventDefault();
		//  _overlay.style.display = 'block';
		}, false);
		
    $('.twitter').click(function (e) {
			e.stopPropagation();
			e.preventDefault();
			window.location = 'twitter://user?screen_name=TheGiftedGlobal';
			setTimeout(function () {
				window.location = 'https://twitter.com/TheGiftedGlobal'
			}, 250);
		});
    $('.fbpage').click(function (e) {
			e.stopPropagation();
			e.preventDefault();
			window.location = 'fb://page/?id=492376137854324';
			setTimeout(function () {
				window.location = 'https://facebook.com/TheGiftedGlobal/'
			}, 250);
		});		
		$('.instagram').click(function (e) {
			e.stopPropagation();
			e.preventDefault();
			window.location = 'instagram://user?username=thegiftedglobal';
			setTimeout(function () {
				window.location = 'https://www.instagram.com/thegiftedglobal/'
			}, 250);
		});
	}
});
