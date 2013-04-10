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
	var temFoto = document.getElementsByClassName('big-photo')[0];
	if (temFoto){
		console.log( '[Terra Big Photo] Achou Foto');
		return true;
	} else {
		console.log('[Terra Big Photo] Nao tem Foto : ' + tipoConteudo);
	}
	return false;
};

function getNewImageURL(){
	var URL = document.getElementsByClassName('big-photo')[0].childNodes[0].src;
	if (URL.match(/img/g)){
		return 'http://p2.trrsf.com.br/image/fget/cf/img' + document.getElementsByClassName('big-photo')[0].childNodes[0].src.split('/img')[1];
	} else {
		return 'http://p2.trrsf.com.br/image/fget/cf/images' + document.getElementsByClassName('big-photo')[0].childNodes[0].src.split('/images')[1];
	}
}

if (checkForValidUrl()) {
	chrome.extension.sendRequest({}, function(response) {});
}
