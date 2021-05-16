

$(document).ready(function() {

	setTimeout(function () {

		if (window.matchMedia('(max-width:767px)').matches) {

			$(".project:first-child").css({
				'margin-top': '40vh'
			})

		} else {
			$("#main_wrapper").on("wheel mousewheel DOMMouseScroll", slickVerticalWheel)

			$("#main_wrapper .project .slide.project_info .wrapper").on("wheel mousewheel DOMMouseScroll", function(event) {
				event.stopPropagation();
			})

			function slickVerticalWheel(event) {
					event.preventDefault();
					event.stopPropagation();

					var scrollRate = 1;
					var $t = $(this);
					var dy = event.originalEvent.deltaY * scrollRate;
					$t.scrollTop($t.scrollTop() + dy);

					if (dy > 0) {
							$('#main_wrapper').slick('slickNext');
							$("#main_wrapper").off('wheel mousewheel DOMMouseScroll');
							$("#main_wrapper").css('overflow', 'hidden');
							setTimeout(function () {
								$("#main_wrapper").on("wheel mousewheel DOMMouseScroll", slickVerticalWheel)
							}, 300);
							return false;
					} else {
							$('#main_wrapper').slick('slickPrev');
							$("#main_wrapper").off('wheel mousewheel DOMMouseScroll');
							$("#main_wrapper").css('overflow', 'hidden');
							setTimeout(function () {
								$("#main_wrapper").on("wheel mousewheel DOMMouseScroll", slickVerticalWheel)
							}, 300);
							return false;
					}
			};

		}

		var scrollCount = null;
		var scroll= null;

		$('#main_wrapper').slick({
			infinite: true,
			vertical: true,
			adaptableHeight: true,
			centerMode: true,
			prevArrow: $("#arrow_top"),
			nextArrow: $("#arrow_bottom"),
			swipe: true,
			swipeToSlide: true,
			touchMove:true,
			verticalSwiping:true,
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
					lazyLoad: 3,
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


		$("#preload").fadeOut(200);


	}, 1000);

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
