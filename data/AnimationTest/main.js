$(function(){
	t7s_animation("h1");

	function t7s_animation(el){
		targetParent = $(el);
		$(targetParent).contents().each(function() {
    		if (this.nodeType == 3) {
    	    	$(this).replaceWith($(this).text().replace(/(\w)/g, "<span>$&</span>"));
    		}
		});

		originalText = Array();
		$(el).children("span").each(function(){
			originalText.push($(this).text());
			$(this).text("");
		});
	
		$(el).children("span").each(function(num){
			delayDo_eachEl($(this),num,150 * num);
		});
	
		function delayDo_eachEl(el,num,delay){
			setTimeout(function(){
				for (var i = 0; i <= 10 ; i++) {
					if(i != 10)
						delayDo_textChange($(el),50 * i, randChar());
					else
						delayDo_textChange($(el),50 * i, originalText[num]);
				}
			},delay);
		}
	
		function delayDo_textChange(el,delay,re){
			setTimeout(function(){
				$(el).text(re);
			},delay);
		}

		function randChar(){
			str = Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
			return str[Math.floor( Math.random() * str.length )];
		}
	}
});