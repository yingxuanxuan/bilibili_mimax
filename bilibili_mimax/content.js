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
        send("我为小米Max2再续" + getRandomInt(1e3, 1e5) + "秒!");
	}, 30 * 1e3);
});