var latitude=51.508742;
var longitude=-0.120850;
var z=12;
function initialize() { 
  var mapProp = {
    center:new google.maps.LatLng(latitude,longitude),
    zoom:z,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
if(annyang) {
	var commands= {
    	'zoom in': zoomMore,
    	'zoom out': zoomLess,
    	'locate *term': locate
    	
  	};
  	
  	function zoomMore() {
  		console.log("works");
  		var mapProp = {
  			center:new google.maps.LatLng(latitude,longitude),
  			zoom: z+1,
  			mapTypeId:google.maps.MapTypeId.ROADMAP
  		};
  		z++;
  		map=new google.maps.Map(document.getElementById("map"),mapProp);
  	}
  	function zoomLess() {
  		console.log("works");
  		var mapProp = {
  			center:new google.maps.LatLng(latitude,longitude),
  			zoom: z-1,
  			mapTypeId:google.maps.MapTypeId.ROADMAP
  		};
  		z--;
  		map=new google.maps.Map(document.getElementById("map"),mapProp);
  	}
	function locate(term) {
		var url='http://maps.google.com/maps/api/geocode/json?address='+term+'&sensor=false';
		var obj=new XMLHttpRequest();
		obj.responseType='json';
		obj.onreadystatechange=function() {
			console.log("works");
			if(obj.readyState===4) {
				var list=obj.response;
				latitude=list.results[0].geometry.location.lat;
				longitude=list.results[0].geometry.location.lng;
				var mapProp = {
  					center:new google.maps.LatLng(latitude,longitude),
  					zoom: z,
  					mapTypeId:google.maps.MapTypeId.ROADMAP
  				};
  				map=new google.maps.Map(document.getElementById("map"),mapProp);
			}
		};
		obj.open('GET',url,true);
		obj.send(null);
	
	}
	annyang.addCommands(commands);
	annyang.start();
}
