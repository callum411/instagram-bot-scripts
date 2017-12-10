var JQueryElement = document.createElement('script');
JQueryElement.src = "http://code.jquery.com/jquery-latest.min.js";
document.getElementsByTagName('head')[0].appendChild(JQueryElement);
setTimeout(function() {
    $("span:contains('Like')").each(function() {
             $(this).click();
    });
}, 2000);
