function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', init);

function init() {
    var elements = document.getElementsByClassName('progress-level');
    for (var i=0; i<elements.length; i++) {
        if (isInViewport(elements[i])) {
            elements[i].setAttribute("style","width:"+elements[i].getAttribute("value"));
        }
    }

  }