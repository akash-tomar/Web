(function() {
    
    var url="https://graph.facebook.com/v2.3/me/photos/uploaded/?access_token=CAACEdEose0cBAJXZAEFPipgVSZBztbZBn7L9IZCbAiYeD8UtuFrzglCZBVRNSZCk4yHk0W88CFvC6DktN985782hcYKbcLA9OOCJ8WHVqowz6YjK5bDbvkS4xgM3C8DGZB11cRuz9JodZCJPpHLqe6ZBZCk0vZAG0tHVAQ4pOj7MO1u5ku0KAkKWH5SnodTn3XhNYxEScYdYq3iQX3BexsNgHic";
    
    
    window.onload=function() {
        var xmlobj = new XMLHttpRequest();
        xmlobj.responseType = 'json';

        xmlobj.onreadystatechange=function() {
           // console.log("blah!");
            if(xmlobj.readyState===4) {
                while(url!==null) {
                    var list=xmlobj.response;
                    for(var i=0;i<list.data.length;i++) {
                        var srcURL=list.data[i].images[0].source;
                        var img=document.createElement('img');
                        img.setAttribute('src',srcURL); document.getElementById("grid").appendChild(img);
                    }
                    url=list.paging.next;
                }
            }
        }
        console.log("here");
        xmlobj.open('GET',url,true);
        xmlobj.send(null);
    }
})();