(function($){
	$.fn.sticky = function(options) {
		var defaults = {
			topSpacing: 0
		};  
		var options = $.extend(defaults, options);
		return this.each(function() {
			var topPadding = options.topSpacing,
			stickyElement = $(this),
			stickyElementHeight = stickyElement.outerHeight(),
			stickyElementWidth = stickyElement.outerWidth(),
			elementPosition = stickyElement.offset().top - $(window).scrollTop(),
			regPosition = stickyElement.offset().top,
			stickyId = stickyElement.attr("id");
			stickyElement.wrapAll('<div id="' + stickyId + 'StickyWrapper"></div>');
			stickyElement.parent().css("height",stickyElementHeight).css("width",stickyElementWidth);
			$(window).scroll(function(){
				elementPosition = stickyElement.offset().top - $(window).scrollTop();
				if (elementPosition <= topPadding) {
					stickyElement.css("position","fixed").css("top",topPadding);
				}
				if ($(window).scrollTop() <= regPosition - topPadding) {
					stickyElement.css("position","static").css("top",$(window).scrollTop());
				}
			});
		});
	};
})(jQuery);
