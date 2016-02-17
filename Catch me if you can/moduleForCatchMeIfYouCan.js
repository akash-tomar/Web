var catchMeIfYouCan = (
    function() {
        function movediv() {
            var left= Math.floor(1000*Math.random());
            var top= Math.floor(500*Math.random());
            //console.log(left+" "+top);
            this.style.left=left+'px';
            this.style.top=top+'px';
        }
        

        return  {
            init: function(id) {
                var el = document.getElementById(id);
                var child = document.createElement('div');
                var par = el.parentNode;
                par.appendChild(child);
                child.appendChild(el);
                var height = el.offsetHeight;
                var width = el.offsetWidth;
                child.style.height = 2*height+'px';
                child.style.width = 2*width+'px';
                child.style.position='absolute';
                child.style.left=700+'px';
                child.style.top=200+'px';
                child.style.display='flex';
                child.style.justifyContent = "center";
                child.style.alignItems='center';
                child.addEventListener("mouseenter",movediv);
                
            }
            
        };
    }
)();