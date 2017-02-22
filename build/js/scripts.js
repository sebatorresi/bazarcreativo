//we'll use a window.onload for simplicity, but typically it is best to use either jQuery's $(document).ready() or $(window).load() or cross-browser event listeners so that you're not limited to one.
$(function() {
    TweenMax.from("#bazarcreativo", 1, {opacity: 0, ease: Power2.easeIn}, 0.25);
    TweenMax.from("#lamp", 1, {scale:0, opacity: 0, ease: Elastic.easeOut, y: 200, rotationX:45, z:-300, delay:.85}, 0.25);
    TweenMax.from("nav", 1, {opacity: 0, delay:.9}, 0.25);
    TweenMax.from(".text-intro", 1, {opacity: 0, delay:1.3}, 0.25);
    TweenMax.from(".image-intro", 1.2, {opacity: 0, delay:1.5}, 0.25);
});

$("#logo").each(function(i, element) {
	var tl = new TimelineMax({paused:true});
	var tag = $(this).find("#lamp");

  tl.to(tag, 0.1, {rotation: 3, yoyo: true, repeat: 3, ease: Power2.easeIn}, "sameTime")
		.to(tag, 0.1, {rotation: -3, yoyo: true, repeat: 3, ease: Power1.easeOut}, "sameTime");

$(element).mouseenter(makeItWork)

function makeItWork() {
  if (!tl.isActive()) { tl.play(0); }
  $( "#data strong" ).html(i) ;
}
});


//Unslider
if (document.location.pathname == "/detalle-de-la-marca.html") {
  jQuery(document).ready(function($) {
    $('.product-slider').unslider({
      autoplay: true,
      infinite: true,
      arrows: false,
      delay: 5000
    });
  });
}

var controlit = $("#burger");
var menuToggle = new TimelineMax({paused:true, reversed:true});
menuToggle
  .set('#burger', {className:"-=closemenu"})
  .set('#burger', {className:"+=openmenu"})
  .to('#burger .top', .2, {y:'-9px', transformOrigin: '50% 50%'}, 'burg')
  .to('#burger .bot', .2, {y:'9px', transformOrigin: '50% 50%'}, 'burg')
  .to('#burger .mid', .2, {scale:0.1, transformOrigin: '50% 50%'}, 'burg')
  .add('rotate')
  .to('#burger .top', .2, {y:'5'}, 'rotate')
  .to('#burger .bot', .2, {y:'-5'}, 'rotate')
  .to('#burger .top', .2, {rotationZ:45, transformOrigin: '50% 50%'}, 'rotate')
  .to('#burger .bot', .2, {rotationZ:-45, transformOrigin: '50% 50%'}, 'rotate')
 // .set('#burger .mid', {opacity:0})//temp fix for stupid iOS rotate y bug

controlit.click(function () {
  menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
});


    

//Menu
// Toggle menu
$(document).ready(function(){
  $('.handle').on('click', function(){
    $('nav ul').toggleClass('toggle');
  });
});

$(document).ready(function(){
  $('.handle').click(function(){
    $(this).toggleClass('open');
  });
});
