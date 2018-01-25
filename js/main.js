$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar-fixed-top").css("background-color", "#c43234").css("height", "50").css("padding-top", 0); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".navbar-fixed-top").css("background-color", "transparent").css("height", "auto").css("padding-top", 25); // if not, change it back to transparent
        }
    });
});
function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top - 85},'slow');
}
