

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
		draggable: true,
		prevArrow: $("#arrow_top"),
		nextArrow: $("#arrow_bottom"),
		accessibility: false,
		responsive: [{
			breakpoint: 767,
			settings: "unslick"
		}]
	})

	if ( !window.matchMedia('(max-width:767px)').matches) {
		$('.main-carousel').flickity({
			groupCells: '60%',
		  cellAlign: 'left',
		  contain: true,
			freeScroll: false,
			dragThreshold: 10,
			wrapAround: true,
			pageDots: false,
			percentPosition: true,
			accessibility: true
		});
		$('.main-carousel').on( 'change.flickity', function( event, index ) {
			var cs = $(this).attr('project_id');
			$('.project[project_id='+cs+']').not(this).flickity( 'select', index );
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
	$('.slick-current').flickity('previous', true);
	event.preventDefault();
}

function nextSlideHorizontal(event) {
	event.stopPropagation();
	$('.slick-current').flickity('next', true);
	event.preventDefault();
}
