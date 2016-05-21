$(function () {
	function send(msg){
		if (msg != '') {
			msg = $.trim(msg);
			$("#player_object")[0].sendMsg(msg, '0xffffff');
			console.log("发送消息: " + msg);
		} else {
			console.log("不能发送空消息.");
		}
	};

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	setInterval(function(){
		var date = new Date();
		var hour = date.getHours();
		var minute = date.getMinutes();
		console.log("现在时间：" + date.toLocaleString());
		if ( hour >= 11 && hour < 24 && minute < 60 && minute >= 49){
			send("Are you ok, 小米Max? 我觉得还能坚持" + getRandomInt(1e3, 1e6) + "秒!");
		}
	}, 30 * 1e3);
});