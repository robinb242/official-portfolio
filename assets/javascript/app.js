//Makes landing page clickable
$(".landing-page").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
});
//stickyfill
var stickyElements = document.getElementsByClassName('sticky');

for (var i = stickyElements.length - 1; i >= 0; i--) {
    Stickyfill.add(stickyElements[i]);
}
