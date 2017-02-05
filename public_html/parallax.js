/* Author: Tommy */

$(document).ready(function () {
	(function ($) {
		$.fn.parallax = function (scrollSpeed = 0.5) {
			var element = $(this);
			return element.each(function () {
				$(window).bind('scroll', function () {
					var position = $(window).scrollTop() * scrollSpeed;
					element.css('background-position', 'center ' + position + 'px');
				});
			});
		};
	})(jQuery);

	if ($('.paralax').length) {
		$('.paralax').parallax();
	}
	if ($('.paralax-fast').length) {
		$('.paralax-fast').parallax(0.9);
	}
	if ($('.paralax-slow').length) {
		$('.paralax-slow').parallax(0.1);
	}
});
