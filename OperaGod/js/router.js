var url = "http://192.168.18.151/xigod";

$(".title li:first-of-type").click(function(){
	window.location.href=url+"/index.html";
})
$(".title li:nth-child(2)").click(function(){
	window.location.href=url+"/business.html";
})
$(".title li:nth-child(3)").click(function(){
	window.location.href=url+"/about.html";
})
$(".about li:first-of-type").click(function(){
	window.location.href=url+"/about.html";
})
$(".about li:nth-of-type(3)").click(function(){
	window.location.href=url+"/business.html";
})
$(".add li:first-of-type").click(function(){
	window.location.href=url+"/about.html";
})

$(".add li:last-of-type").click(function(){
	window.location.href=url+"/privacy.html";
})

$(".service li:first-of-type").click(function(){
	window.location.href=url+"/service.html";
})
$(".img-responsive").click(function(){
	window.location.href=url+"/index.html";
})
$(".weixin").mouseover(function(){
	$(".videogodImg").css("display","block");
});
$(".weixin").mouseout(function(){
	$(".videogodImg").css("display","none");
})
$(".weibo").click(function(){
	window.location.href="https://www.weibo.com/p/1006066567121153/home?from=page_100606&mod=TAB&is_all=1#place";
})
document.querySelector(".business-content .business-introduce:first-of-type a").href = url+"/戏精加盟说明书_0615.pdf";





