function onRequest(request, sender, sendResponse) {
	chrome.pageAction.show(sender.tab.id);
	sendResponse({});
};

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);

chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null,  
		{ code: "window.open(getNewImageURL())" } );
});