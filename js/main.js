jQuery.fn.center = function () {
	this.css("position","absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
							 $(window).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
							  $(window).scrollLeft()) + "px");
	console.log('hi');
	return this;
}
$('.logo').center();
$('.text').center().css('margin-top', '200px');
$(window).resize(function(e) {
	$('.logo').center();
	$('.text').center().css('margin-top', '200px');
});
