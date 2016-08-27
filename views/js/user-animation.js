$(function(){
	$(".user-view .user-info .user-text > h6").contents().each(function() {
    		if (this.nodeType == 3) {
    	    	$(this).replaceWith($(this).text().replace(/(\w)/g, "<span>$&</span>"));
    		}
		});

	setTimeout(function(){
		$("section").addClass("active");
		$(".user-text > h6 > span").each(function(num){
			delayDo($(this),100 * num);
		});
	},300);
	function delayDo(el,delay){
		setTimeout(function(){
			$(el).addClass("active");
		},delay);
	}
});