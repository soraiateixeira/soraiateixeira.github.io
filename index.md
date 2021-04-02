---
layout: default
title: home
---
<div id="main_slider_navigation">
	<div id="arrow_left" class="arrow" onclick="prevSlideHorizontal()">
		<img src="{{ "/assets/arrow_left.svg" | relative_url }}" alt="Arrow pointing to the left">
	</div>
	<div id="arrow_right" class="arrow" onclick="nextSlideHorizontal()">
		<img src="{{ "/assets/arrow_right.svg" | relative_url }}" alt="Arrow pointing to the right">
	</div>
	<div id="arrow_top" class="arrow">
		<img src="{{ "/assets/arrow_top.svg" | relative_url }}" alt="Arrow pointing to the top">
	</div>
	<div id="arrow_bottom" class="arrow">
		<img src="{{ "/assets/arrow_bottom.svg" | relative_url }}" alt="Arrow pointing to the bottom">
	</div>
</div>



<main id="main_wrapper">


	{% assign ordered_pages = site.works | sort:"ano" | reverse %}
	{% for work in ordered_pages %}
	<article class="project">

		<div class="project_thumbnail_mobile" style="background-image:url('https://images.weserv.nl?url=http://soraiagomesteixeira.pt{{ work.cover_image }}&h=900&q=85&output=jpg')">
			<h3 class="title">{{ work.title }}</h3>
			<h4 class="date">{{ work.ano }}</h4>

		</div>
		<div class="fechar_popup">X</div>

		<div class="project_info slide">
			<div class="wrapper">
				<h3 class="title">{{ work.title }}</h3>
				<h4 class="date">{{ work.ano }}</h4>
				<div class="description">
					{{ work.description }}
				</div>
			</div>
		</div>

		{% for image in work.images %}
		<div class="project_image slide">
			<img src="https://images.weserv.nl?url=http://soraiagomesteixeira.pt{{ image }}&h=900&q=85&output=jpg">
		</div>
		{% endfor %}

	</article>
	{% endfor %}


</main>


<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>