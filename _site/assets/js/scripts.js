

$(document).ready(function() {

	setTimeout(function () {

		if (window.matchMedia('(max-width:767px)').matches) {

			$(".project:first-child").css({
				'margin-top': '40vh'
			})

		}

		var scrollCount = null;
		var scroll= null;

		if (window.matchMedia('(min-width:768px)').matches) {
			$('.main-carousel .main-carousel_wrapper').flickity({
				groupCells: '60%',
				cellAlign: 'left',
				contain: true,
				freeScroll: false,
				dragThreshold: 10,
				wrapAround: true,
				pageDots: false,
				lazyLoad: 3,
				percentPosition: true,
				accessibility: false,
				prevNextButtons: false,
				on: {
			    change: function( index ) {
						var cs = $(this).attr('project_id');
						$('.project[project_id='+cs+']').not(this).flickity().flickity( 'select', index );
			    },
					ready: function() {
						setScrollPos(Math.round(clones[0].getBoundingClientRect().top + getScrollPos() - (context.offsetHeight - clones[0].offsetHeight) / 2));
						$("#preload").fadeOut(200);
			      init()
			    }
			  }
			});
		} else {
			$("#preload").fadeOut(200);
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


	}, 1000);

});


/*
	CLICK SLIDER TO ADVANCE / CUSTOM ARROWS FLICKITY
*/

function prevSlideHorizontal(event) {
	event.stopPropagation();
	var attribu = $('.current').attr('project_id');
	$('.project[project_id="' + attribu + '"] .main-carousel_wrapper').flickity('previous', true);
	event.preventDefault();
}
function nextSlideHorizontal(event) {
	event.stopPropagation();
	var attribu = $('.current').attr('project_id');
	$('.project[project_id="' + attribu + '"] .main-carousel_wrapper').flickity('next', true);
	event.preventDefault();
}

// function goUp(event) {
// 	event.stopPropagation();
// 	setScrollPos(getScrollPos() - (window.innerHeight*0.7));
// 	event.preventDefault()
// }
//
// function goDown(event) {
// 	event.stopPropagation();
// 	setScrollPos(getScrollPos() + (window.innerHeight*0.7));
// 	event.preventDefault()
// }


/*
	CHECK WHICH PROJECT IS CENTERED
*/

if (window.matchMedia('(min-width:768px)').matches) {
	function isScrolledIntoView(elem) {
	  var docViewTop = $(window).scrollTop();
	  var docViewBottom = docViewTop + $(window).height();

	  var elemTop = $(elem).offset().top;
	  var elemBottom = elemTop + $(elem).height();
	  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
}







/*
	INFINITE SCROLLING THINGY
*/

if (window.matchMedia('(min-width:768px)').matches) {
	var doc = window.document,
	  context = doc.querySelector('#main_wrapper'),
	  clones = context.querySelectorAll('.is-clone'),
	  disableScroll = true,
	  scrollHeight = 0,
	  scrollPos = 0,
	  clonesHeight = 0,
	  i = 0;

	function getScrollPos () {
	  return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0); }

	function setScrollPos (pos) {
	  context.scrollTop = pos; }

	function getClonesHeight () {
	  clonesHeight = 0;
	  for (i = 0; i < clones.length; i += 1) {
	    clonesHeight = clonesHeight + clones[i].offsetHeight;  }
	  return clonesHeight;
	}

	function reCalc () {
	  scrollPos = getScrollPos();
	  scrollHeight = context.scrollHeight;
	  clonesHeight = getClonesHeight();
	  if (scrollPos <= 0) {
	    setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
	  }
	}

	function scrollUpdate () {
	  if (!disableScroll) {
	    scrollPos = getScrollPos();

	    if (clonesHeight + scrollPos >= scrollHeight) { // Scroll to the top when you’ve reached the bottom
	      setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
	      disableScroll = true;
	    } else if (scrollPos <= 0) { // Scroll to the bottom when you reach the top
	      setScrollPos(scrollHeight - clonesHeight);
	      disableScroll = true;
	    }

			$(".project").each(function() {
		    if (isScrolledIntoView($(this))) {
		      $(this).addClass("current");
		    } else {
					$(this).removeClass("current");
		    }
		  });
	  }

	  if (disableScroll) {
	    // Disable scroll-jumping for a short time to avoid flickering
	    window.setTimeout(function () {
	      disableScroll = false;
	    }, 40);
	  }
	}


	function init () {

	  reCalc();

	  context.addEventListener('scroll', function () {
	    window.requestAnimationFrame(scrollUpdate);
	  }, false);

	  window.addEventListener('resize', function () {
	    window.requestAnimationFrame(reCalc);
	  }, false);
	}

	if (document.readyState !== 'loading') {
	  init()
	} else {
	  doc.addEventListener('DOMContentLoaded', init, false)
	}
}
