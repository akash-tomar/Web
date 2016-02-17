//(funciton() {
    
    function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("container"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);


var el=document.getElementById('button');
el.onclick=function() {
    var lat=document.getElementById('lat').innerHTML;
    var long=document.getElementById('long').innerHTML;
    mapProp = {
    center:new google.maps.LatLng(lat,long),
    zoom:7,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
    map=new google.maps.Map(document.getElementById("container"),mapProp);
}


 
 //})();