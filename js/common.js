$('.menu-btn').on('click', function(e){
	e.preventDefault();
	$(this).toggleClass('menu-btn_active');
});

$('.menu-btn').on('click', function(e){
	e.preventDefault();
	$('.nav').toggleClass('nav_active');

});

var top_show = 300;
var delay = 300;
$(document).ready(function(){
 $(window).scroll(function() {
   if($(this).scrollTop() > top_show) $('#top').fadeIn();
   else $('#top').fadeOut();
 });
$('#top').click(function () {
  $('body, html').animate({
    scrollTop: 0
  }, delay );
  });
});


$(document).ready(function(){
$('.slider').slick();

});

jQuery(document).ready(function ($) {
$('.nav a[href^="#"], .intro a[href^="#"] ').click( function(e){
  e.preventDefault();
var id  = $(this).attr('href');
var heightpage = $(window).height();
var topel = $(id).offset().top;
var heightorder = $(id).height();
var positionscroll = topel - heightpage/2 + heightorder/2;
$('body,html').animate({scrollTop: positionscroll}, 500);
});
});






