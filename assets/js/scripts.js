

$(document).ready(function() {

	if (window.matchMedia('(max-width:767px)').matches) {

		$(".project:first-child").css({
			'margin-top': '40vh'
		})

		var open = 0;
		$("#about a").click(function() {
			$("#content").stop().slideToggle(100);
			$("header h1").toggle();
			open = open ? 0 : 1;
		});

		$("main").not("#about *").on('click', function() {
			if (open == 1) {
				$("#content").stop().slideToggle(100, function() {
					open = open ? 0 : 1;
				});
				$("header h1").toggle();
			}
		});

	} else {
		var open = 0;
		$("#about a").click(function() {
			$("#content").stop().slideToggle(100);
			open = open ? 0 : 1;
		});

		$("main").not("#about *").on('click', function() {
			if (open == 1) {
				$("#content").stop().slideToggle(100, function() {
					open = open ? 0 : 1;
				});
			}
		});
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
	});

	$('.project').slick({
		infinite: true,
		vertical: false,
		variableWidth: true,
		draggable: true,
		responsive: [{
			breakpoint: 767,
			settings: "unslick"
		}]
	});


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

function prevSlideHorizontal() {
	$('#main_wrapper>.slick-list>.slick-track>.slick-current').slick('slickPrev');
}

function nextSlideHorizontal() {
	$('#main_wrapper>.slick-list>.slick-track>.slick-current').slick('slickNext');
}
