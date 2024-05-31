// JavaScript Document
$(document).ready(function(){

	// var sub_1 = $(".sub_1");
	// sub_1.find(".navSub").css({width:sub_1.find("li").length*sub_1.find("li").outerWidth(true)+1});
	// var myScroll = new IScroll('#myscroll', {
	// 	scrollX: true,
	// 	scrollY: false,
	// 	bounce:false,
	// 	snap:"li",
	// 	click:true
	// });

	// sub_1.find(".next").click(function(){
	// 	myScroll.next();
	// });
	// sub_1.find(".next").mouseover(function(){
	// 	TweenMax.to($(this),0.3,{ backgroundColor:"#0075c6" })
	// });
	// sub_1.find(".next").mouseleave(function(){
	// 	TweenMax.to($(this),0.3,{ backgroundColor:"#003e72" })
	// });
	// sub_1.find(".prev").click(function(){
	// 	myScroll.prev();
	// });
	// sub_1.find(".prev").mouseover(function(){
	// 	TweenMax.to($(this),0.3,{ backgroundColor:"#0075c6" })
	// });
	// sub_1.find(".prev").mouseleave(function(){
	// 	TweenMax.to($(this),0.3,{ backgroundColor:"#003e72" })
	// });

	// var sub_5 = $(".sub_5");
	// sub_5.find(".navSub").css({width:sub_5.find("li").length*sub_5.find("li").outerWidth(true)+1});
	// var myScroll_2 = new IScroll('#myscroll_2', {
	// 	scrollX: true,
	// 	scrollY: false,
	// 	bounce:false,
	// 	snap:"li",
	// 	click:true
	// });

	// sub_5.find(".next").click(function(){
	// 	myScroll_2.next();
	// });
	// sub_5.find(".next").mouseover(function(){
	// 	TweenMax.to($(this),0.3,{ backgroundColor:"#0075c6" })
	// });
	// sub_5.find(".next").mouseleave(function(){
	// 	TweenMax.to($(this),0.3,{ backgroundColor:"#003e72" })
	// });
	// sub_5.find(".prev").click(function(){
	// 	myScroll_2.prev();
	// });
	// sub_5.find(".prev").mouseover(function(){
	// 	TweenMax.to($(this),0.3,{ backgroundColor:"#0075c6" })
	// });
	// sub_5.find(".prev").mouseleave(function(){
	// 	TweenMax.to($(this),0.3,{ backgroundColor:"#003e72" })
	// });


	var nowNum = -1;
	var nowSubNum = -1;
	var navSubBox = $(".navSubBox");
	navSubBox.hide();
	navSubBox.eq(0).show();

	$(".navMain").find("li").mouseover(function(){
		if( nowNum != $(this).index() ){
			nowNum = $(this).index();
			TweenMax.to($(".subScroll"),0.3,{ height: 159 });
			TweenMax.set(navSubBox.find("li"),{ x:10,opacity:0 });
			navSubBox.eq(nowNum).find("li").each(function(){
				TweenMax.to($(this),0.3,{ delay:$(this).index()*0.1,x:0,opacity:1 });
			});
			TweenMax.to(navSubBox,0.3,{ opacity: 1 });
			TweenMax.to($(".navMainArrow"),0.3,{ height: 10,opacity: 1 });
			TweenMax.to($(".navMain").find("li"),0.3,{ backgroundColor:"#0075c6" });
			TweenMax.to($(".navMain").find("li").eq(nowNum),0.3,{ backgroundColor:"#003e72" });
			navSubBox.hide();
			navSubBox.eq(nowNum).show();
			TweenMax.to($(".navMainArrow"),0.4,{ left:70+nowNum*160 });
			TweenMax.set($(this).find(".navIcon"),{y:0});
			TweenMax.to($(this).find(".navIcon"),0.3,{ y:-3,yoyo:true,repeat:1 });
		}
	});

	navSubBox.find("li").mouseover(function(){
		if( nowSubNum != $(this).index() ){
			nowSubNum = $(this).index();
			TweenMax.set($(this).find(".navIcon"),{y:0});
			TweenMax.to($(this).find(".navIcon"),0.3,{ y:-3,yoyo:true,repeat:1 });
		}
	});
	navSubBox.find("li").mouseleave(function(){
		nowSubNum = -1;
	});

	$(".navBox").mouseleave(function(){
		if( nowNum != -1 ){
			nowNum = -1;
			TweenMax.to($(".subScroll"),0.3,{ height: 10 });
			TweenMax.to(navSubBox,0.3,{ opacity: 0 });
			TweenMax.to($(".navMainArrow"),0.3,{ height: 0,opacity: 0 });
			TweenMax.to($(".navMain").find("li"),0.3,{ backgroundColor:"#0075c6" });
		}
	});

});

