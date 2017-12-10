var JQueryElement = document.createElement('script');
JQueryElement.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(JQueryElement);
setTimeout(function() {
    $("span:contains('Like')").each(function() {
             $(this).click();
    });
}, 2000);
