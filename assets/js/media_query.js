// Adding and removing class for window size change
(function($) {
	var $window = $(window);

	function resize() {
	if ($window.width() < 514) {
		media_min_width_320px_and_max_width_480px();
	}
	else{
		media_width_min_width_1025px_max_width_1280px();
	}
}
	
	$window
		.resize(resize)
		.trigger('resize');
})(jQuery);

/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/
function media_width_min_width_1281px() {

}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

function media_width_min_width_1025px_max_width_1280px() {
	$("#contact_icons_left").addClass("text-right");
	$("#contact_icons_right").addClass("text-left");
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

function media_width_min_width_768px_and_max_width_1024px() {

}


/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

function media_min_width_320px_and_max_width_480px() {
	$("#contact_icons_left").removeClass("text-right");
	$("#contact_icons_right").removeClass("text-left");
}