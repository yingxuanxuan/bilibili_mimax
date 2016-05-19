setInterval(function(){
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	console.log("Now：" + date.toLocaleString());
	if ( hour > 12 && hour < 24 && minute < 60 && minute > 49){
		chrome.tabs.query(
			{url:"http://live.bilibili.com/1"}, 
			function(tabs){
				if (tabs.length < 1)
				{
					console.log("return " + tabs.length)
					console.log("Open.")
					chrome.tabs.create({url:"http://live.bilibili.com/1"});
				}else{
					console.log("Opened " + tabs.length)
				}
		});
	}
}, 30 * 1e3);