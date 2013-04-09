function onRequest(request, sender, sendResponse) {
	// Show the page action for the tab that the sender (content script)
	// was on.
	chrome.pageAction.show(sender.tab.id);

	// Return nothing to let the connection be cleaned up.
	sendResponse({});
};

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);

chrome.pageAction.onClicked.addListener(function(tab) {
	// windowObjectReference = window.open("http://google.com/", "DescriptiveWindowName", "resizable=yes,scrollbars=yes,status=yes");  
	chrome.tabs.executeScript(null,  
		{ code: "window.open('http://p2.trrsf.com.br/image/fget/cf/images' + document.getElementsByClassName('big-photo')[0].childNodes[0].src.split('/images')[1])" } );
});