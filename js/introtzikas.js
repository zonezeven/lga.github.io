(function( $ ){
	$.fn.introtzikas = function(options) {
		
		  var defaults = {
			  line   : '#ff9a95',
			  speedwidth	 : 2000,
			  speedheight	 : 1000,
			  speedopacity : 800,
			  bg : '#000',
			  lineheight : 2
		  };
		  var options = $.extend(defaults, options);
	
			$('iframe').hide();
		  $('body').css('overflow-y','hidden');
		  $('<div class="introtzikas_bg" style="visibility:visible"><div id="intrologo">INLA CORPORATE INTERIORS</div><div class="introtzikas" style="visibility:visible"></div></div>').appendTo('body');
  
			$('.introtzikas_bg').css('background-color',options.bg);
			$('.introtzikas_bg').css('position','fixed');
			$('.introtzikas_bg').css('height','100%');
			$('.introtzikas_bg').css('width','100%');
			$('.introtzikas_bg').css('top','0');
			$('.introtzikas_bg').css('left','0');
			$('.introtzikas_bg').css('z-index','1');
			$('.introtzikas_bg').css('visibility','visible');
	
		  $('body').css('visibility','hidden');
		  $('.introtzikas').css('background-color',options.line);
		  $('.introtzikas').css('position','fixed');
		  $('.introtzikas').css('top','50%');
		  $('.introtzikas').css('height',options.lineheight+'px');
		  $('.introtzikas').css('width','0%');
		  $('.introtzikas').css('visibility','visible');
		  $('.introtzikas').animate({
			  width: '+=100%'
			}, options.speedwidth, function() {
				  $('.introtzikas').animate({
					  height: '+=100%',
					  top: '-=50%'
					}, options.speedheight, function() {
							$('body').attr('style','');
						  $('body').css('visibility','visible');
						  $('.introtzikas_bg').css('visibility','hidden');
						  $('.introtzikas').animate({
							  opacity: 0
							}, options.speedopacity, function(){
								$('.introtzikas_bg').remove();
								$('iframe').show();
								$('body').css('overflow-y','visible');
								
							});
							
					});
		  
			});
	};
  })( jQuery );
 