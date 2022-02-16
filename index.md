---
layout: default
title: home
sobre: Soraia Gomes Teixeira, vive e trabalha no Porto. Estudou Design Industrial
  no Instituto Politécnico do Porto e o mestrado em Design de Produto na Escola Superior
  de Artes e Design das Caldas da Rainha. <br>Frequentou o programa doutoral em Design
  na Universidade de Aveiro iniciando uma investigação sobre a presença das mulheres
  no Design Industrial em Portugal.<br>É professora assistente convidada na Escola
  Superior de Media Artes e Design do Politécnico do Porto e frequenta o doutoramento
  de Investigación en Arte y Diseño de EINA - Universitat Autònoma de Barcelona.<br>
email: soraiamgfteixeira@gmail.com
outros_contactos: <a href="https://www.instagram.com/soraiagomesteixeira" title="https://www.instagram.com/soraiagomesteixeira">www.instagram.com/soraiagomesteixeira</a>

---
<div id="preload">
 <h1>—SORAIA<br>GOMES<br>TEIXEIRA</h1>
</div>

<header id="header">
	<h1>—SORAIA<br>GOMES<br>TEIXEIRA</h1>

	<nav role="navigation">
		<div id="menuToggle">
			<input type="checkbox" id="open" />
			<label id="about_label" for="open">
				<span class="open">SOBRE</span>
				<span class="close">FECHAR</span>
			</label>
			<div id="menu">
				<div class="description">
					{{ page.sobre }}
				</div>
				<div class="contactos">
					<a href="mailto:{{ page.email }}" target="_blank">{{ page.email }}</a><br><br>
					{{ page.outros_contactos }}
				</div>
				<div class="footer">
					<h6>@ 2021</h6>
					<h6>website by <a href="https://bru-no.com" target="_blank">bru-no</a> and <a href="https://cosmvs.com" target="_blank">cosmvs</a></h6>
				</div>
			</div>
		</div>
	</nav>

</header>



<div class="main_slider_navigation lateral">
	<div id="arrow_left" class="arrow" onclick="prevSlideHorizontal(event)">
		<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
		<line x1="41.465" y1="21.8244" x2="1.90633" y2="21.8244" stroke="black" stroke-width="2"/>
		<line x1="1.49394" y1="22.4938" x2="22.3143" y2="1.67348" stroke="black" stroke-width="2"/>
		<line x1="1.88673" y1="21.4725" x2="22.7071" y2="42.2928" stroke="black" stroke-width="2"/>
		</svg>
	</div>
	<div id="arrow_right" class="arrow" onclick="nextSlideHorizontal(event)">
		<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
		<line x1="1.53485" y1="21.1755" x2="41.0935" y2="21.1755" stroke="black" stroke-width="2"/>
		<line x1="41.5059" y1="20.5061" x2="20.6856" y2="41.3265" stroke="black" stroke-width="2"/>
		<line x1="41.1131" y1="21.5275" x2="20.2928" y2="0.707109" stroke="black" stroke-width="2"/>
		</svg>
	</div>
</div>
<div class="main_slider_navigation vertical">
	<div id="arrow_top" class="arrow">
	<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
	<line x1="21.1755" y1="41.5996" x2="21.1755" y2="2.04092" stroke="black" stroke-width="2"/>
	<line x1="20.5061" y1="1.62853" x2="41.3265" y2="22.4489" stroke="black" stroke-width="2"/>
	<line x1="21.5275" y1="2.02132" x2="0.707107" y2="22.8417" stroke="black" stroke-width="2"/>
	</svg>
	</div>
	<div id="arrow_bottom" class="arrow">
	<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
	<line x1="21.8245" y1="1.48993" x2="21.8245" y2="41.0486" stroke="black" stroke-width="2"/>
	<line x1="22.4939" y1="41.461" x2="1.67355" y2="20.6407" stroke="black" stroke-width="2"/>
	<line x1="21.4725" y1="41.0682" x2="42.2929" y2="20.2479" stroke="black" stroke-width="2"/>
	</svg>
	</div>
</div>



<main id="main_wrapper">


	{% assign ordered_pages = site.works %}
	{% for work in ordered_pages %}
	<article project_id="{{forloop.index}}" class="project main-carousel">

		<div class="project_thumbnail_mobile" style="background-image:url('https://images.weserv.nl?url=http://soraiagomesteixeira.pt{{ work.cover_image }}&h=900&q=85&output=jpg')">
			<h3 class="title" style="color:{{ work.color }}">{{ work.title }}</h3>
			<h4 class="date" style="color:{{ work.color }}">{{ work.ano }}</h4>

		</div>
		<div class="fechar_popup">
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 100 100.8">
			<polygon stroke="#000000" fill="#000000" points="100,9.1 90.9,0 50,40.9 9.1,0 0,9.1 40.9,50 0,90.9 9.1,100 50,59.1 90.9,100 100,90.9 59.1,50 "/>
			</svg>
		</div>

		<div class="project_info slide carousel-cell">
			<div class="wrapper">
				<h3 class="title">{{ work.title }}</h3>
				<h4 class="date">{{ work.ano }}</h4>
				<div class="description">
					<p>{{ work.description }}</p>
				</div>
			</div>
		</div>

		{% for image in work.images %}
		<div class="project_image slide carousel-cell">
			<img class="desktop_break" loading="lazy" data-flickity-lazyload="https://images.weserv.nl?url=http://soraiagomesteixeira.pt{{ image }}&h=900&q=85&output=jpg" src="https://images.weserv.nl?url=http://soraiagomesteixeira.pt{{ image }}&h=900&q=1&output=jpg">
			<picture class="mobile_break">
			  <source media="(min-width:768px)" srcset="https://images.weserv.nl?url=http://soraiagomesteixeira.pt{{ image }}&h=900&q=85&output=jpg">
			  <source media="(min-width:450px)" srcset="https://images.weserv.nl?url=http://soraiagomesteixeira.pt{{ image }}&h=600&q=85&output=jpg">
			  <img loading="lazy" src="https://images.weserv.nl?url=http://soraiagomesteixeira.pt{{ image }}&h=400&q=85&output=jpg">
			</picture>
		</div>
		{% endfor %}

	</article>
	{% endfor %}


</main>


<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/flickity@2.2.2/dist/flickity.pkgd.min.js"></script>