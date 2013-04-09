function getOGTypeContent() { 
   var metas = document.getElementsByTagName('meta'); 

   for (i=0; i<metas.length; i++) { 
      if (metas[i].getAttribute("property") == "og:type") { 
         chrome.extension.sendRequest({}, function(response) {}); 
      } 
   } 

} 