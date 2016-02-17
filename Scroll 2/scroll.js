var scrollToTop = (function() {    
    function scrollTop() {
        var my;
        function scroll() {
            if(window.scrollY==0)
                clearInterval(my);
            else 
                window.scrollTo(window.scrollX,(window.scrollY-1));
        }
        my=setInterval(scroll,10);
    }

    return {
        init: function(id) {
            var element=document.getElementById(id);
            element.addEventListener('click',scrollTop);
        }
    };
})();

var scrollToBottom = (function() {
    function scrollBottom() {
        var clearInterv;
        function scroll() {
            if(window.scrollY==)
                clearInterval(clearInterv);
            else 
                window.scrollTo(window.scrollX,window.scrollY+10);
        }
        setInterval(scroll,10);
    }
        
    return {
        init:function(id) {
            var el=document.getElementById(id);
            el.addEventListener('click',scrollBottom);
            
        }
    }
})();