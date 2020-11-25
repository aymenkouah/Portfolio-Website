
var y = document.getElementsByTagName("h4");

var yArr = Array.from(y);

yArr.forEach(function(x) {
    x.addEventListener('click', function(event) {
        var temp = x.getAttribute('subs');
        console.log(temp);
        if (document.querySelector(temp) !== null && document.querySelector(temp).firstElementChild !== null) {
            if (x.getAttribute("clicked") === 'true') {
                console.log(document.querySelector(temp).firstElementChild);
                x.setAttribute("clicked", 'false');
                document.querySelector(temp).setAttribute('style', 'height:0px;');
                document.querySelector(temp).firstElementChild.setAttribute('style', "opacity:0;transform: translateY(-1rem);transition: all 0.8s ease  ;")
                console.log('hide');
            } else if (x.getAttribute("clicked") === 'false' ){
                x.setAttribute("clicked", 'true');
                document.querySelector(temp).setAttribute('style', 'height:'+ document.querySelector(temp).firstElementChild.clientHeight+"px");
                document.querySelector(temp).firstElementChild.setAttribute('style', "opacity:1;transform: translateY(0); transition: all 0.8s ease ;")
                console.log(document.querySelector(temp).firstElementChild.clientHeight)
            }
        }

        
    })
}

)

