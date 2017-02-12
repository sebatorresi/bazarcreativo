//we'll use a window.onload for simplicity, but typically it is best to use either jQuery's $(document).ready() or $(window).load() or cross-browser event listeners so that you're not limited to one.
$(function() {
    TweenMax.from("#bazarcreativo", 1, {scale:0, opacity: 0, ease: Bounce.easeOut, x: 200}, 0.25);
    TweenMax.from("#lamp", 1, {scale:0, opacity: 0, ease: Elastic.easeOut, y: 200, rotationX:45, z:-300, delay:.85}, 0.25);
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
