// Called when the url of a tab changes.
function getOGTypeValue() { 
	var metas = document.head.getElementsByTagName('meta'); 

	for (i=0; i<metas.length; i++) { 
		if (metas[i].getAttribute("property") == "og:type") { 
			return metas[i].getAttribute("content"); 
		} 
	} 

	return "";
} 


function checkForValidUrl() {
	// ... show the page action.
	//var tipoConteudo = getOGTypeValue();
	var temFoto = document.getElementsByClassName('big-photo')[0];
	//if (tipoConteudo == "article"){
	if (temFoto){
		console.log( '[Terra Big Photo] Achou Foto');
		//window.open('http://images' + $('.big-photo img').attr('src').split('/images')[1]);
		return true;
	} else {
		console.log('[Terra Big Photo] Nao tem Foto : ' + tipoConteudo);
	}
	return false;
};

if (checkForValidUrl()) {
	chrome.extension.sendRequest({}, function(response) {});
}
