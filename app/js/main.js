/* Change Page */

jQuery('.flexslider').flexslider({
	animation: "fade",
	start: function(slider) {
		jQuery('a.next').click(function(event){
			event.preventDefault();
			slider.flexAnimate(slider.getTarget("next"));
		});
		jQuery('a.previous').click(function(event){
			event.preventDefault();
			slider.flexAnimate(slider.getTarget("previous"));
		});
	}
});

	$('.navigation li').click(function () {
		var navid = '#'+$(this).attr('id'),
				sectionid = navid.substr(0,navid.length-3);

		$('.flexslider').css('height', $(sectionid).outerHeight());

		$(navid).siblings().removeClass('flex-active');
		$(sectionid).siblings().removeClass('flex-active-slide');

		$(navid).addClass('flex-active');
		$(sectionid).addClass('flex-active-slide');
	});
