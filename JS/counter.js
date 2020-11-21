function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function count(element) {
    const updateCount = () =>   {
        const value = +element.getAttribute('value');
        const count = +element.innerText;

        const inc = 1;

        if (count < value) {
            element.innerText = count + inc;
            setTimeout(updateCount, 40);
        }
        else {
            count.innerText = value;
        }
        
    }
    updateCount();
}



document.addEventListener('scroll', init);



function init() {
    var elements = document.getElementsByClassName("count-me");
    for (var i=0; i<elements.length; i++) {
        if (isInViewport(elements[i])) {
            var k = elements[i];
            elements[i].removeAttribute('class');
            k.setAttribute('class', 'counting');
            count(k)

        }
    }


    

}