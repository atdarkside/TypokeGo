$(function(){

	$(".input-wra input")
		.focusin(function(e) {
      		$(this).parent(".input-wra").addClass('focus-input-wra');
    	})
    	.focusout(function(e) {
      		$(this).parent(".input-wra").removeClass("focus-input-wra");
    	});
});