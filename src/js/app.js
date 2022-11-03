$(document).ready(function() {
	$('#pagepiling').pagepiling({
        navigation: false,
	});
});

$('.section_up').on('click', function() {
	$.fn.pagepiling.moveSectionUp();
})

$('.section_down').on('click', function() {
	$.fn.pagepiling.moveSectionDown();
})

$(window).keyup(function(e){
	var target = $('.checkbox-ios input:focus');
	if (e.keyCode == 9 && $(target).length){
		$(target).parent().addClass('focused');
	}
});
 
$('.checkbox-ios input').focusout(function(){
	$(this).parent().removeClass('focused');
});

$('.checkbox-ios input').on('click', function() {
	$('body').toggleClass('white_theme')
})

$('.nav__item').on('click', function() {
	$('.nav__item').removeClass('nav__item__active')
	$(this).addClass('nav__item__active')
})

$('.checkbox').on('change', function() {
	$('header').toggleClass('header_active')
})

const scene1 = $('.parallax').get(0)
const parallaxInstance1 = new Parallax(scene1);
const scene2 = $('.parallax').get(1)
const parallaxInstance2 = new Parallax(scene2);
const scene3 = $('.parallax').get(2)
const parallaxInstance3 = new Parallax(scene3);
const scene4 = $('.parallax').get(3)
const parallaxInstance4 = new Parallax(scene4);
const scene5 = $('.parallax').get(4)
const parallaxInstance5 = new Parallax(scene5);
const scene6 = $('.parallax').get(5)
const parallaxInstance6 = new Parallax(scene6);