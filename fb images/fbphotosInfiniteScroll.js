var fbphotosInfScroll=(function() {
    var url="https:/graph.afcebook.com/v2.3/me/photos/uploaded/?access_token=";
    var accessToken,imgWidth,containerEl;
    var inProcess=false;
    function render(response) {
        var list=response.data;
        for(var i=0;i<list.length;i++) {
            var img_el=document.createElement('img');
            img_el.setAttribute('src',lis[i].source);
            containerEl.appendChild(img_el);
            
        }
        url=response.paging.next;
        inProcess=false;
    }
    
    function sendRequest() {
        if(url===null) {
            var el=document.createElement('div');
            div.innerHTML='You have seen all your photos';
            containerEl.appendChild(el);
            return;
        }
        var xmlobj=new XMLHttpRequest();
        xmlobj.open('GET',url,true);
        xmlobj.responseType='json';
        inProcess=true;
        xmlobj.onreadystatechange=function() {
            if(this.readyState===4) {
                render(this.response);
            }
            xmlobj.send();
        }
    }
    function onScroll() {
        //on some condition
        if(window.scrollY+window.innerHeight>=document.documentElement.offsetHeight && inProcess===false) {
               
        }
        sendRequest();
    }
    
    return {
        init: function(config) {
            if(config.access_token====undefined || config.id===undefined) {
                console.log('Please provide access token and ID of the container'); 
                return;
            }
            containerEl=document.getElementById(config.id);
            if(!containerEl) {
                console.log('Container element is not present');
                return;
            }
            accessToken=config.access_token;
            imgWidth=config.image_width || 200;
            url=url+accessToken;
            sendRequest();
            window.addEventListener('scroll',onScroll);
        }
    };
})();