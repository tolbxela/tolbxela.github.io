/*
*	jQuery Pinit for Pinterest
*	Author: Kevin Liew
*	Website: http://www.queness.com/
*	License: http://redactorjs.com/license/	
*	Usage: $('img').pinit();
*/

(function($){
	
    //Attach this new method to jQuery
    $.fn.extend({ 
         
        pinit: function(options) {
 
			var defaults = {
				wrap: '<span class="pinit"/>',
				pageURL: document.URL
			} 		
 			
 			var options = $.extend(defaults, options);
			var o = options; 
			
            //Iterate over the current set of matched elements
            return this.each(function() {
				
             	var e = $(this),
             		pi_media = e.data('media') ? e.data('media') : e[0].src,
             		pi_url = o.pageURL,
             		pi_desc = e.attr('title') ? e.attr('title') : e.attr('alt'),
             		pi_isvideo = 'false';
             		bookmark = 'http://pinterest.com/pin/create/bookmarklet/?media=' + encodeURI(pi_media) + '&url=' + encodeURI(pi_url) + '&is_video=' + encodeURI(pi_isvideo) + '&description=' + encodeURI(pi_desc);
					
				var eHeight = e.outerHeight();				
             		e.wrap(o.wrap);
             		e.after('<span class="pinit-overlay" style="height: ' + eHeight + 'px"><a href="' + bookmark + '" class="pinit-button">Pin It</a></span>');
				
				$('.pinit .pinit-button').on('click', function () {				
					window.open($(this).attr('href'), 'Pinterest', 'width=632,height=253,status=0,toolbar=0,menubar=0,location=1,scrollbars=1');				
					return false;
				});     
				
				$('.pinit').mouseenter(function () {
					$(this).children('.pinit-overlay').fadeIn(200);
				}).mouseleave(function () {
					$(this).children('.pinit-overlay').fadeOut(200);
				});

				
            });
      
        }
        
    });

})(jQuery);
