
document.onkeypress=function(e) {
    var elem=document.getElementById("button");
    if(String.fromCharCode(e.keyCode)=='a') {
        button.style.left=(button.offsetLeft-(10))+'px';
    } else if(String.fromCharCode(e.keyCode)=='s') {
        button.style.top=(button.offsetTop+(10))+'px';
    } else if(String.fromCharCode(e.keyCode)=='d') {
        button.style.left=(button.offsetLeft+(10))+'px';
    } else if(String.fromCharCode(e.keyCode)=='w') {
        button.style.top=(button.offsetTop-(10))+'px';
    }
}

