/* hoverでサブメニューを表示 */
var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);
if (!isMobile) {
    jQuery(document).ready(function(){
      $(".sub-menu").css("display", "none");
      jQuery(".menuitems").hover(
        function() {
          jQuery(this)
            .children(".sub-menu")
            .stop(true)
            .slideDown(300);
        },
        function() {
          jQuery(this)
            .children(".sub-menu")
            .slideUp(300);
        }
      );
    });
}

/* Works一覧ページ hoverで画像を表示 */
var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);
if (!isMobile) {
    jQuery(document).ready(function(){
        $(".thumbnail-img").css("display", "none");
        jQuery(".workitem").hover(function(){
            jQuery(this).find(".thumbnail-img").fadeIn("slow");
        },function(){
            jQuery(this).find(".thumbnail-img").fadeOut("fast");
        });
    });
}


/* Publication一覧ページ hoverで画像を表示 */
var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);
if (!isMobile) {
    jQuery(document).ready(function(){
        $(".thumbnail-img").css("display", "none");
        jQuery(".publicationitem").hover(function(){
            jQuery(this).find(".thumbnail-img").fadeIn("slow");
        },function(){
            jQuery(this).find(".thumbnail-img").fadeOut("fast");
        });
    });
}


/* ジャンルページ 画像を遅延表示 */
setTimeout(function(){
$('.works-catlist .workitem')
    .each(function(i){
        $(this).delay(500 * i).animate({opacity:1}, 500);
    })
;},3000
);


/* スムーススクロール */
jQuery(function(){
  jQuery('a[href^=#]').click(function(){
    var adjust = 0;
    var speed = 500; // ミリ秒
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


/* ページタイトルをページ上部でFix */
jQuery(function(){
	var $win = $(window),
	    $main = $('.page-content'),
	    $nav = $('.page-title'),
	    navHeight = $nav.outerHeight(),
	    navPos = $nav.offset().top,
	    fixedClass = 'is-titfixed';

	$win.on('load scroll', function() {
		var value = $(this).scrollTop();
		if ( value > navPos ) {
			$nav.addClass(fixedClass);
			$main.css('margin-top', navHeight);
		} else {
			$nav.removeClass(fixedClass);
			$main.css('margin-top', '50px');
		}
	});
});


/* モバイル用のナビ表示 */
var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);
if (isMobile) {
    window.onscroll = function () {
        var check = window.pageYOffset ;       //現在のスクロール地点 
        var docHeight = $(document).height();   //ドキュメントの高さ
        var dispHeight = $(window).height();    //表示領域の高さ

        if(check > docHeight-dispHeight-500){   //判別式　500はフッターからの距離です（ここはサイトのフッターに合わせて変更しましょう）
            $('#footer-sp').fadeIn(1000);  //1000 はフェードインの速度です。調整可
        }else{
            $('#footer-sp').fadeOut(1000); //1000 はフェードアウトの速度です。調整可
        }
    };
}


/* Footer のコピーライト表記 */
function year() {
	var data = new Date();  var now_year = data.getFullYear();
	document.write(now_year);
}
