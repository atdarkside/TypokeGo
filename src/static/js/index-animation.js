$(function(){


 	$(".input-wra input")
 		.keyup(function(e) {
 			$(".candidate").show();
 			setTimeout(function(el){
 				$(".input-wra").addClass('focus-input-wra');
 			},10);
    });

  setTimeout(function(){
 		$("section").addClass("active");
 	},300);
});

/*
 show()とaddClassを同時にやるとcssアニメーションが動作しない感じでしたのでゴリ押ししてます。
 大変申し訳ないです。
*/
