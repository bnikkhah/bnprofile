$(document).ready(function(){
    $(document).on('click', 'a[href^="#"]', function (event) {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 600);
	});

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
	
	$('.carousel').slick({
		autoplay: true,
		draggable: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		autoplaySpeed: 4000,
        slideToShow: 1,
		arrows: false,
		fade: true
	})
})