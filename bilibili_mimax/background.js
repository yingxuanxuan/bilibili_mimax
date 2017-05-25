setInterval(function(){
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	console.log("Now：" + date.toLocaleString());

	if ( hour >= 11 && hour < 24 && minute < 60 && minute >= 49){
		chrome.tabs.query({url:"http://live.bilibili.com/545342"}, function(tabs){
				if (tabs.length < 1)
				{
					console.log("return " + tabs.length)
					console.log("Open new.")
					chrome.tabs.create({url:"http://live.bilibili.com/545342", active:true}, function(tab){
						chrome.windows.update(tab.windowId, {focused:true})
					});
				}else{
					console.log("Opened " + tabs.length)
					if (49 == minute){
						console.log("Reload and set active the first one, close others.")
						for(var i = 1; i < tabs.length; i++)
						{
							chrome.tabs.remove(tabs[i].id);
						}
						chrome.windows.update(tabs[0].windowId, {focused:true})
						chrome.tabs.reload(tabs[0].id);
						chrome.tabs.update(tabs[0].id, {active:true});
					}
				}
		});
	}
}, 30 * 1e3);