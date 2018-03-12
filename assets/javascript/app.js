//Makes landing page clickable
$(".landing-page").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
});