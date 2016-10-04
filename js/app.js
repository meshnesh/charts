// ------------------------------
// SMOOTH SCROLL
// ------------------------------
function scrollNav() {
	$('.nav a').click(function () {
		//Toggle Class
		$(".active").removeClass("active");
		$(this).closest('li').addClass("active");
		var theClass = $(this).attr("class");
		$('.' + theClass).parent('li').addClass('active');
		//Animate
		$('html, body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 160
		}, 400);
		return false;
	});
	$('.scrollTop a').scrollTop();
}
scrollNav();
// ------------------------------
// SMOOTH SCROLL END
// ------------------------------
// ********************************************************
jQuery(document).ready(function ($) {
	// browser window scroll (in pixels) after which the "menu" link is shown
	var offset = 300;
	var navigationContainer = $('#cd-nav')
		, mainNavigation = navigationContainer.find('#cd-main-nav ul');
	//hide or show the "menu" link
	checkMenu();
	$(window).scroll(function () {
		checkMenu();
	});
	//open or close the menu clicking on the bottom "menu" link
	$('.cd-nav-trigger').on('click', function () {
		$(this).toggleClass('menu-is-open');
		//we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
		mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');
	});

	function checkMenu() {
		if ($(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
			navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
				mainNavigation.addClass('has-transitions');
			});
		}
		else if ($(window).scrollTop() <= offset) {
			//check if the menu is open when scrolling up
			if (mainNavigation.hasClass('is-visible') && !$('html').hasClass('no-csstransitions')) {
				//close the menu with animation
				mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
					//wait for the menu to be closed and do the rest
					mainNavigation.removeClass('is-visible is-hidden has-transitions');
					navigationContainer.removeClass('is-fixed');
					$('.cd-nav-trigger').removeClass('menu-is-open');
				});
				//check if the menu is open when scrolling up - fallback if transitions are not supported
			}
			else if (mainNavigation.hasClass('is-visible') && $('html').hasClass('no-csstransitions')) {
				mainNavigation.removeClass('is-visible has-transitions');
				navigationContainer.removeClass('is-fixed');
				$('.cd-nav-trigger').removeClass('menu-is-open');
				//scrolling up with menu closed
			}
			else {
				navigationContainer.removeClass('is-fixed');
				mainNavigation.removeClass('has-transitions');
			}
		}
	}
});
//SLIDER
config = {
	timeout: 4000
	, speed: 190
	, spread: 20
}
var currentSlide = 0
	, nextSlide = 0
	, output = ''
	, characters = []
	, maxChars, slides, slidesTexts;
callback = function ()  {
	if (currentSlide++ >= slides.length - 1) currentSlide = 0;
	setTimeout(formatText, config.timeout);
}
formatText = function () {
	// calculate the next slide index
	nextSlide = (currentSlide + 1 >= slides.length) ? 0 : currentSlide + 1;
	// Fill the characters array if not already defined
	if (characters[currentSlide] == undefined) characters[currentSlide] = slides[currentSlide].innerHTML.split('');
	if (characters[nextSlide] == undefined) characters[nextSlide] = slides[nextSlide].innerHTML.split('');
	maxChars = Math.max(characters[currentSlide].length, characters[nextSlide].length);
	var fragment = document.createDocumentFragment();
	for (var i = 0; i < maxChars; ++i) {
		// create all elements
		var duration = config.speed / 1000;
		var delay = i * (config.speed / 1000 / config.spread);
		var front = document.createElement("span");
		front.className = "front";
		var styleFront = '-webkit-animation-delay: ' + delay + 's, ' + (delay + duration) + 's; -webkit-animation-duration: ' + duration + 's, 0.01s;' + '-moz-animation-delay: ' + delay + 's, ' + (delay + duration) + 's; -moz-animation-duration: ' + duration + 's, 0.01s;';
		front.setAttribute('style', styleFront);
		front.innerHTML = characters[currentSlide][i] || ' ';
		var back = document.createElement("span");
		back.className = "back";
		var styleBack = '-webkit-animation-delay: ' + (delay + duration) + 's, ' + (delay + duration) + 's; -webkit-animation-duration: ' + duration + 's, 0.01s;' + '-moz-animation-delay: ' + (delay + duration) + 's, ' + (delay + duration) + 's; -moz-animation-duration: ' + duration + 's, 0.01s';
		back.setAttribute('style', styleBack);
		back.innerHTML = characters[nextSlide][i] || ' ';
		var char = document.createElement("span");
		char.className = "char";
		char.appendChild(front)
		char.appendChild(back);
		fragment.appendChild(char);
	}
	setTimeout(function () {
		callback();
	}, maxChars * (config.speed / config.spread) + config.speed);
	slides[0].innerHTML = "";
	slides[0].appendChild(fragment);
};
slides = document.getElementsByClassName('slide');
currentSlide = 0;
nextSlide = 1;
formatText();