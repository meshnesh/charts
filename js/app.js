// // ********************************************************
// // NAV BAR
// // 
// $(function(){
//     // Returns width of browser viewport
//     var browser = $(window).width();
//     // Returns width of HTML document
//     var document = $(document).width();
//     $('.nav .toggle-nav').click(function(e){
//         $('.nav .nav-mobile').addClass('style-mobile').slideToggle('slow');
//         e.preventDefault();
//     });
// });
// // ------------------------------
// // SMOOTH SCROLL
// // ------------------------------
// function scrollNav() {
//     $('.nav a').click(function () {
//         //Toggle Class
//         $(".active").removeClass("active");
//         $(this).closest('li').addClass("active");
//         var theClass = $(this).attr("class");
//         $('.' + theClass).parent('li').addClass('active');
//         //Animate
//         $('html, body').stop().animate({
//             scrollTop: $($(this).attr('href')).offset().top - 160
//         }, 400);
//         return false;
//     });
//     $('.scrollTop a').scrollTop();
// }
// scrollNav();
// // ------------------------------
// // SMOOTH SCROLL END
// // ------------------------------
// 1000 = 1 second
function toggleDiv() {
	// ----------------------------------------------------------------- FIRST DIV--------------------------------------
	//	----------------- name ----------
	setTimeout(function () {
		$("#first_a").show(); //when the div will show
		setTimeout(function () {
			$("#first_a").hide(); //when the div will hide
			toggleDiv();
		}, 31000); //how long its visible in terms of seconds
	}, 6000); //how long its not visible in terms of seconds
	//	----------------- icon ----------
	setTimeout(function () {
		$("#first").show(); //when the div will show
		setTimeout(function () {
			$("#first").hide(); //when the div will hide
			toggleDiv();
		}, 30000); //how long its visible in terms of seconds
	}, 7000); //how long its not visible in terms of seconds
	// ----------------------------------------------------------------- SECOND DIV--------------------------------------
	//	----------------- name ----------
	setTimeout(function () {
		$("#second_a").show(); //when the div will show
		setTimeout(function () {
			$("#second_a").hide(); //when the div will hide
			toggleDiv();
		}, 28000); //how long its visible in terms of seconds
	}, 9000); //how long its not visible in terms of seconds
	//	----------------- icon ----------
	setTimeout(function () {
		$("#second").show(); //when the div will show
		setTimeout(function () {
			$("#second").hide(); //when the div will hide
			toggleDiv();
		}, 25000); //how long its visible in terms of seconds
	}, 10000); //how long its not visible in terms of seconds
	// ------------------------------------------------------------------- THIRD DIV --------------------------------------------
	//	----------------- name ----------
	setTimeout(function () {
		$("#third_a").show(); //when the div will show
		setTimeout(function () {
			$("#third_a").hide(); //when the div will hide
			toggleDiv();
		}, 21000); //how long its visible in terms of seconds
	}, 14000); //how long its not visible in terms of seconds
	//	----------------- icon ----------
	setTimeout(function () {
		$("#third").show(); //when the div will show
		setTimeout(function () {
			$("#third").hide(); //when the div will hide
			toggleDiv();
		}, 20000); //how long its visible in terms of seconds
	}, 15000); //how long its not visible in terms of seconds
	// -------------------------------------------------------------------- FOURTH DIV ----------------------------------------------
	//	----------------- bar graph ----------
	setTimeout(function () {
		$("#fourth").show(); //when the div will show
		setTimeout(function () {
			$("#fourth").hide(); //when the div will hide
			toggleDiv();
		}, 15000); //how long its visible in terms of seconds
	}, 20000); //how long its not visible in terms of seconds
	// ----------------------------------------- THIRD DIV --------------------------------
	//	----------------- DATA name ----------
	setTimeout(function () {
		$("#fifth").show(); //when the div will show
		setTimeout(function () {
			$("#fifth").hide(); //when the div will hide
			toggleDiv();
		}, 10000); //how long its visible in terms of seconds
	}, 25000); //how long its not visible in terms of seconds
}
toggleDiv();