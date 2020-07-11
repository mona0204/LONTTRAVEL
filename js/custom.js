/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Home Slider
4. Init Menu
5. Init Search
6. Init CTA Slider
7. Init Testimonials Slider
8. Init Search Form


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var menu = $('.menu');
	var menuActive = false;
	var header = $('.header');
	var searchActive = false;

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initHomeSlider();
	initMenu();
	initSearch();
	initCtaSlider();
	initTestSlider();
	initSearchForm();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	/* 

	3. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');

			homeSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:false,
				smartSpeed:1200,
				dotsContainer:'main_slider_custom_dots'
			});

			/* Custom nav events */
			if($('.home_slider_prev').length)
			{
				var prev = $('.home_slider_prev');

				prev.on('click', function()
				{
					homeSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.home_slider_next').length)
			{
				var next = $('.home_slider_next');

				next.on('click', function()
				{
					homeSlider.trigger('next.owl.carousel');
				});
			}

			/* Custom dots events */
			if($('.home_slider_custom_dot').length)
			{
				$('.home_slider_custom_dot').on('click', function()
				{
					$('.home_slider_custom_dot').removeClass('active');
					$(this).addClass('active');
					homeSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
				});
			}

			/* Change active class for dots when slide changes by nav or touch */
			homeSlider.on('changed.owl.carousel', function(event)
			{
				$('.home_slider_custom_dot').removeClass('active');
				$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
			});	

			// add animate.css class(es) to the elements to be animated
			function setAnimation ( _elem, _InOut )
			{
				// Store all animationend event name in a string.
				// cf animate.css documentation
				var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

				_elem.each ( function ()
				{
					var $elem = $(this);
					var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

					$elem.addClass($animationType).one(animationEndEvent, function ()
					{
						$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
					});
				});
			}

			// Fired before current slide change
			homeSlider.on('change.owl.carousel', function(event)
			{
				var $currentItem = $('.home_slider_item', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-out]");
				setAnimation ($elemsToanim, 'out');
			});

			// Fired after current slide has been changed
			homeSlider.on('changed.owl.carousel', function(event)
			{
				var $currentItem = $('.home_slider_item', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-in]");
				setAnimation ($elemsToanim, 'in');
			})
		}
	}

	/* 

	4. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger').length && $('.menu').length)
		{
			var hamb = $('.hamburger');
			var close = $('.menu_close_container');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

			close.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

	
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	5. Init Search

	*/

	function initSearch()
	{
		if($('.search_tab').length)
		{
			$('.search_tab').on('click', function()
			{
				$('.search_tab').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.search_tab').index(this);

				var panels = $('.search_panel');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');
			});
		}
	}

	/* 

	6. Init CTA Slider

	*/

	function initCtaSlider()
	{
		if($('.cta_slider').length)
		{
			var ctaSlider = $('.cta_slider');

			ctaSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:false,
				nav:false,
				dots:false,
				smartSpeed:1200
			});

			/* Custom nav events */
			if($('.cta_slider_prev').length)
			{
				var prev = $('.cta_slider_prev');

				prev.on('click', function()
				{
					ctaSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.cta_slider_next').length)
			{
				var next = $('.cta_slider_next');

				next.on('click', function()
				{
					ctaSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	7. Init Testimonials Slider

	*/

	function initTestSlider()
	{
		if($('.test_slider').length)
		{
			var testSlider = $('.test_slider');

			testSlider.owlCarousel(
			{
				loop:true,
				nav:false,
				dots:false,
				smartSpeed:1200,
				margin:30,
				responsive:
				{
					0:{items:1},
					480:{items:1},
					768:{items:2},
					992:{items:3}
				}
			});

			/* Custom nav events */
			if($('.test_slider_prev').length)
			{
				var prev = $('.test_slider_prev');

				prev.on('click', function()
				{
					testSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.test_slider_next').length)
			{
				var next = $('.test_slider_next');

				next.on('click', function()
				{
					testSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	8. Init Search Form

	*/

	function initSearchForm()
	{
		if($('.search_form').length)
		{
			var searchForm = $('.search_form');
			var searchInput = $('.search_content_input');
			var searchButton = $('.content_search');

			searchButton.on('click', function(event)
			{
				event.stopPropagation();

				if(!searchActive)
				{
					searchForm.addClass('active');
					searchActive = true;

					$(document).one('click', function closeForm(e)
					{
						if($(e.target).hasClass('search_content_input'))
						{
							$(document).one('click', closeForm);
						}
						else
						{
							searchForm.removeClass('active');
							searchActive = false;
						}
					});
				}
				else
				{
					searchForm.removeClass('active');
					searchActive = false;
				}
			});	
		}
	}
});


//pyramid
var svg = document.querySelector("#svg");
var bg = document.querySelector("#background");
var sun = document.querySelector("#sun");
var filter = document.querySelector("#filter");

// Sky
var sky = document.querySelector("#sky");
var clouds = document.querySelectorAll(".cloud");
var planeGroup = document.querySelector("#planegroup");
var planetrail = document.querySelectorAll("#trail line");

// Land
var bgMountain = document.querySelector("#mountain_far");
var landC = document.querySelector("#landcontainer");
var land = document.querySelector("#land");

// Mountains
var mountains = document.querySelector("#mountains");
var mountainS = document.querySelector("#mountain_small");
var mountainL = document.querySelector("#mountain_big");

// Ground
var road = document.querySelector("#road");
var roadLine = document.querySelectorAll("#road line");
var grass = document.querySelector("#grass");
var soil = document.querySelector("#soil");
var grassSoil = document.querySelectorAll("#grass, #soil");

// Trees
var trees = document.querySelectorAll(".tree");
var leaves = document.querySelectorAll(".tree ellipse, .tree ellipse + path, .tree polygon");

// Buildings
var buildings = document.querySelectorAll("#buildings > g");
var church = document.querySelector("#church");
var hospital = document.querySelector("#hospital");
    var cross = document.querySelector("#cross");
var store = document.querySelector("#store");
var houseS = document.querySelector("#house_small");
    var windoorL = document.querySelector("#window_top_3 > rect:nth-child(3)");
    var windoorR = document.querySelector("#window_top_3 > rect:nth-child(2)");
var houseB = document.querySelector("#house_large");
    var chimney = document.querySelector("#chimney_3");

/* Superhero */

var sprMan = document.querySelector("#superman");

// Bird logo
var bird = document.querySelector("#bird_1");
var birdbody = document.querySelector("#body_2");
var wingL = document.querySelector("#wing_left_1");
var wingR = document.querySelector("#wing_right_1");

// Face
var eyeL = document.querySelectorAll("#eye_left_1 circle");
var eyeR = document.querySelectorAll("#eye_right_1 circle");

// Clothes
var cape = document.querySelectorAll("#cape_1");
var mask = document.querySelector("#mask_1");
var maskBlink = document.querySelectorAll("#maskLight path, #maskLight polygon");

/* Timelines + Animations */

/* Sky Animations */

// Clouds
var tlClouds = new TimelineMax({
    repeat: -1
});

tlClouds.from(clouds, 45, {x: 850, opacity: 0.2, ease: Power0.easeNone})
.to(clouds, 45, {x: -850, ease: Power0.easeNone});

var tlClouds2 = new TimelineMax({
    repeat: -1
});

tlClouds2.to(clouds, 3, {opacity: 0.5, y: 5})
.to(clouds, 3, {opacity: 0.2, y: 0});

// Plane
var tlPlane = new TimelineMax({
    repeat: -1,
    delay: 6 + Math.random() * 3,
    repeatDelay: 5 + Math.random() * 30
});

tlPlane.from(planeGroup, 5, {x: -800, ease: Power0.easeNone})
.to(planeGroup, 5, {x: 800, ease: Power0.easeNone});

// Land
var tlLand = new TimelineMax({
    repeat: -1
});

tlLand.to(landC, 2, {y: 5, ease: Power1.easeInOut})
.to(landC, 2, {y: 0, ease: Power1.easeInOut});

var tlCreateLand = new TimelineMax({
    delay: 2
});

tlCreateLand.from(road, 2, {x: -820, ease: Elastic.easeOut.config(1, 0.3)})
.from(grassSoil, 0.5, {y:200, ease: Bounce.easeOut}, "-=0.5");

// Mountains
var tlMountainFall = new TimelineMax({
    delay: 3.8
});

tlMountainFall.from(mountains, 1, {y: -800, ease: Power3.easeIn})
.from(mountainS, 2, {scale: 0.8, transformOrigin: "50% 100%", ease: Elastic.easeOut.config(1, 0.2)})
.from(mountainL, 2, {scale: 0.8, transformOrigin: "50% 100%", ease: Elastic.easeOut.config(1, 0.3)}, "-=2")
.to(land, 2, {y: 5, ease: Elastic.easeOut.config(2.5, 0.1)}, "-=2")
.to(land, 1, {y: 0});

// Buildings
var tlBuildings = new TimelineMax({
    delay: 7
});

tlBuildings.staggerFrom(buildings, 2, {y: -500, delay:0.5, transformOrigin: "50% 50%", ease:Bounce.easeOut, force3D:true}, -0.2);

// Hospital
var tlHospitalCross = new TimelineMax({
    delay: 14 + Math.random()*4,
    repeat: -1,
    repeatDelay: 5 + Math.random()*7
});

tlHospitalCross.to(cross, 3, {rotation: (Math.floor(Math.random() * (12 - 2 + 1)) + 2)*360, transformOrigin: "50% 50%", ease: Power2.easeInOut});

// Small house
var tlSmHWindow = new TimelineMax({
    repeat: -1
});

tlSmHWindow.to(windoorL, 2, {transform: "rotateY(160deg)", transformOrigin: "100% 50%", delay: 10})
.to(windoorR, 2, {transform: "rotateY(-160deg)", transformOrigin: "0% 50%"}, "-=2")
.to(windoorL, 2, {transform: "rotateY(0deg)", transformOrigin: "100% 50%", delay: 10})
.to(windoorR, 2, {transform: "rotateY(0deg)", transformOrigin: "0% 50%"}, "-=2");

// Trees
var tlTrees = new TimelineMax({
    delay: 4.5
});

tlTrees.from(trees, 2, {scale: 0, transformOrigin: "50% 100%"})
.from(leaves, 2, {scale: 0.2, transformOrigin: "50% 100%"}, "-=1");

/* Superhero! */

// Bird logo
var tlBird = new TimelineMax({
    repeat: -1,
    yoyo: true
});

tlBird.to(wingL, 2, {rotation:10, transformOrigin: "80% 65%", ease: Elastic.easeInOut.config(1, 0.75)})
.to(bird, 2, {y:3, scale: 0.8, transformOrigin: "50% 50%"}, "-=2")
.to(wingR, 2, {rotation: -10, transformOrigin: "20% 60%", ease: Elastic.easeInOut.config(1, 0.75)}, "-=2")
.to(wingL, 2, {rotation:-10, transformOrigin: "80% 65%", ease: Elastic.easeInOut.config(1, 0.75)})
.to(wingR, 2, {rotation: 10, transformOrigin: "20% 60%", ease: Elastic.easeInOut.config(1, 0.75)}, "-=2")
.to(bird, 2, {y:0, scale: 1, transformOrigin: "50% 50%"}, "-=2");

// Eyes
var tlEye = new TimelineMax({
    repeat: -1,
    repeatDelay: 4 + Math.random()*2
});

tlEye.from(eyeL, 0.1, {attr: {r:0}})
.from(eyeR, 0.1, {attr: {r:0}}, "-=.1");

// Mask
var tlMaskBlink = new TimelineMax({
    repeat: -1,
    repeatDelay: 6 + Math.random()*3
});

tlMaskBlink.to(maskBlink, 0.5, {attr:{opacity: 0.8}, ease: Power4.easeIn})
.to(maskBlink, 0.5, {attr:{opacity: 0.5}, ease: Power3.easeOut});

// Cape
var tlCape = new TimelineMax({
    repeat: -1
});

tlCape.set(cape, {y:4});

tlCape.from(cape, 2, {rotation: -10, transformOrigin: "70% 20%", ease: Power2.easeIn})
.to(cape, 4, {rotation: 15, transformOrigin: "70% 20%", ease: Elastic.easeOut})
.to(leaves, 1, {rotation: "-5", transformOrigin: "50% 100%", ease: Elastic.easeInOut.config(2, 0.25)}, "-=4.5")
.to(cape, 2, {rotation: -10, transformOrigin: "70% 20%", ease: Power3.easeInout})
.to(leaves, 0.8, {rotation: 0, transformOrigin: "50% 100%", ease: Elastic.easeOut.config(0.5, 0.25)}, "-=2");

// Superman Movement
var tlSuperman = new TimelineMax({
    delay: 5 + Math.random()*5
});

tlSuperman.set(sprMan, {rotation: 90, transformOrigin: "50% 50%", scale: 0.1, x: -150});
tlSuperman.to(sprMan, 0.5, {x: 1250, scale: 0.25, ease: Power0.easeNone})
.to(sprMan, 0.1, {rotation: -90, y:150})
.to(sprMan, 1.5, {delay: 1.5, x:-350, scale: 0.4, ease: Power0.easeNone})
.to(sprMan, 0.1, {rotation: 90, x: -150})
.to(sprMan, 3, {delay: 1, x: 350, scale: 0.6, rotation: 0, ease: Elastic.easeOut.config(1, 0.75)})
.to(sprMan, 5, {y: 321, ease: Power4.easeInOut}, "-=2.5");

// Day & Night cycle
var currentdate = new Date();
var theHour = currentdate.getHours();
var day = false;
var sunUp = 8;
var sunDown = 18;
var sunTime = 0;

if (theHour >= sunUp && theHour <= sunDown) {
    TweenMax.to(bg, 2, {fill : "#FAAF41"});
    TweenMax.to(sun, 4, {fill : "#F7CF52"});
    TweenMax.to(filter, 0.1, {x:1000}); // Move the filter so onClicks can be used by day
    day = true;
} else {
    TweenMax.to(bg, 2.5, {fill : "#2C3E50"});
    TweenMax.to(sun, 2.5, {fill : "#ECF0F1"});
    TweenMax.to(filter, 2.5, {opacity : 0.2});
}

var sunAndMoon = new TimelineMax({
    
});

sunAndMoon.to(sun, 5, {bezier:[{cx: 100, cy: 250}, {cx: 400, cy: 50} ,{cx: 700, cy: 210}], ease:Power1.easeInOut});
if (day) {
    sunTime = ((theHour - sunUp) / (sunDown - sunUp));
} else {
    if (theHour > sunDown) {
        sunTime = (theHour - sunDown) / ((24 - sunDown) + sunUp);
    } else {
        sunTime = (theHour + (sunUp-2)) / ((24 - sunDown) + sunUp);
    }
}
sunAndMoon.progress(sunTime);
sunAndMoon.pause();

// Chimney Smoke (Thnx Ju5tu5!)
for (var i = 0; i < 500; i++) {
  var drop = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  drop.setAttributeNS(null, "class", "smoke");
  drop.setAttributeNS(null, "r", 2 + Math.random() * 3);
  drop.setAttributeNS(null, "fill", "rgba(127, 140, 141," + (Math.random() - 0.5) + ")");
    houseB.insertBefore(drop, houseB.childNodes[0]);
}

var smoke = document.querySelectorAll('.smoke');
TweenMax.set(smoke, {
  x: 697,
  y: 350
});

var tlSmoke = new TimelineMax({
    
});

for (var i = 0; i < smoke.length; i++) {
  tlSmoke.to(smoke[i], 4.5, {
    repeat: -1, physics2D: {velocity: 75 + Math.random() * 50, angle: -83, acceleration: 50, accelerationAngle: 180}, opacity: 0}, i*0.1);
}
tlSmoke.pause();

chimney.addEventListener("click", function(){
    if (tlSmoke.paused()) {
        tlSmoke.play();
    } else {
        TweenMax.to(smoke, 2, {opacity: 0});
        setTimeout(function(){
            tlSmoke.progress(0);
            tlSmoke.pause();
            TweenMax.to(smoke, 0.1, {opacity: 1});
        }, 2000);
    }
});
    
 
 //weather             
$(".changewindy").click(function() {
 $(".block").addClass("windy").removeClass("rainy");
});

$(".changerainy").click(function() {
 $(".block").addClass("rainy").removeClass("windy");
});

$(".changesunny").click(function() {
 $(".block").removeClass("rainy").removeClass("windy");
});
              

//  /*jshint -W066 */
(function(){
  'use strict';
  
  
  var svg = function(el){
    return document.getElementById(el);
  };
  
  function init(){
    var all = document.querySelectorAll('svg path');
    for (var i = 1; i < all.length+1; i++) {
      getwebkitaniimation(svg('img_'+i),i);
    }
  }
  
  // Support css3
  function getsupportedprop(proparray){
    var root=document.documentElement;
    for (var i=0; i<proparray.length; i++){
      if (proparray[i] in root.style){
        return proparray[i];
      }
    }
  }
  
  // get-webkit-aniimation(class,time)
  function getwebkitaniimation(el,time){
    
    var transition = getsupportedprop([
      'WebkitTransition', 'MozTransition',
      'msTransition','OTransition','transition'
    ]);
    
    var length = el.getTotalLength();
    
    el.style[transition] = 
      el.style[transition] = 'none';
    
    el.style.strokeDasharray = length + ' ' + length;
    el.style.strokeDashoffset = length;
    
    el.getBoundingClientRect();
    el.style[transition] = 
      el.style[transition] ='stroke-dashoffset '+
      time+
      's ease-in-out';
    el.style.strokeDashoffset = '0';
    return el;
  }
  window.onload = init();
}).call(this);
// hover
  $("figure").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
//BUS
$(document).ready(function() {
  $('#bus').click(function(){
   $('.PAG') .toggleClass('pause');
   $('#front-wheel') .toggleClass('pause');
   $('#back-wheel') .toggleClass('pause');
  });
});