

$(document).ready(function() {

	if (window.matchMedia('(max-width:767px)').matches) {

		$(".project:first-child").css({
			'margin-top': '40vh'
		})

	}

	$('#main_wrapper').slick({
		infinite: true,
		vertical: true,
		adaptableHeight: true,
		centerMode: true,
		draggable: false,
		prevArrow: $("#arrow_top"),
		nextArrow: $("#arrow_bottom"),
		responsive: [{
			breakpoint: 767,
			settings: "unslick"
		}]
	})


	if ( !window.matchMedia('(max-width:767px)').matches) {
		$('.main-carousel').flickity({
		  cellAlign: 'left',
		  contain: true,
			wrapAround: true,
			pageDots: false,
			freeScroll: true,
			freeScrollFriction: 0.03
		});
	}


	if (window.matchMedia('(max-width:767px)').matches) {
		$(".project .project_thumbnail_mobile").on("click", function(e) {
			$(this).parents('.project').addClass('popup_active')
			e.stopPropagation();
			event.preventDefault();
		})

		$(".project .fechar_popup").on("click", function(e) {
			$(this).parents('.project').removeClass('popup_active');
			e.stopPropagation();
			event.preventDefault();
		})
	} else {
		$('.project_thumbnail_mobile, .fechar_popup').remove();
	}

});

function prevSlideHorizontal(event) {
	event.stopPropagation();
	$('#main_wrapper>.slick-list>.slick-track>.slick-current').flickity('previous');
	event.preventDefault();
}

function nextSlideHorizontal(event) {
	event.stopPropagation();
	$('#main_wrapper>.slick-list>.slick-track>.slick-current').flickity('next');
	event.preventDefault();
}
