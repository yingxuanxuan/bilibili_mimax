setInterval(function(){
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	console.log("Now：" + date.toLocaleString());

	if ( hour > 12 && hour < 24 && minute < 60 && minute > 49){
		chrome.tabs.query({url:"http://live.bilibili.com/1"}, function(tabs){
				if (tabs.length < 1)
				{
					console.log("return " + tabs.length)
					console.log("Open new.")
					chrome.tabs.create({url:"http://live.bilibili.com/1"});
				}else{
					console.log("Opened " + tabs.length)
					if (50 == minute)
					{
						console.log("Reload and set active the first one, close others.")
						for(var i = 1; i < tabs.length; i++)
						{
							chrome.tabs.remove(tabs[i].id);
						}
						chrome.tabs.reload(tabs[0].id);
						chrome.tabs.update(tabs[0].id, {active:true});
					}
				}
		});
	}
}, 60 * 1e3);