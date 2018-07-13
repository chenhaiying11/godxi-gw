var mute = 1;
var voiceImg = document.querySelector(".mute-icon img");
var video = document.querySelector("video");
voiceImg.onclick = function(){
	if (mute == 0) {
		voiceImg.src = "OperaGod/image/home/mute.png";
		video.muted=true;
		mute= 1;
	}else{
		voiceImg.src= "OperaGod/image/home/voice.png";
		video.muted=false;
		mute = 0;
	}
}
video.onclick = function(){
	video.play();
}

