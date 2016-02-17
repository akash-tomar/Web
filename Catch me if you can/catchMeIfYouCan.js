var catchMeIfYouCan=(
    function() {
        
        
        return {
            init:function(id) {
                var el=document.getElementById(id);
                var parent=el.parentNode;
                var newNode=document.createElement('div');
                parent.appendChild(newNode);
                newNode.appendChild(el);
                var height=el.style.height;
                var width=el.style.width;
                newNode.height=height+10+'px';
                newNode.width=width+10+'px';
                
            }
        };
        
        
    }
)();