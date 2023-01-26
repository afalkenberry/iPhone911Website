$(document).ready(function(){
    var navbar = document.getElementById("navbar");
var navbarHeight = navbar.getBoundingClientRect().height;
  //iphone dropdown in buy section
    $("#iphonedropdown img").click(function(){
        $('html, body').animate({
            scrollTop: $("#accordion").offset().top - navbarHeight
        }, 1000);
        $("#iphonecollapse").slideToggle();
    });
  //samsung dropdown in buy section
   $("#samsungdropdown img").click(function(){
        $('html, body').animate({
            scrollTop: $("#accordion").offset().top - navbarHeight
        }, 1000);
        $("#samsungcollapse").slideToggle();
    });
   
  //repair iphone
  $("#repairiphone img").click(function(){
        $('html, body').animate({
            scrollTop: $("#accordion").offset().top - navbarHeight
        }, 1000);
        $("#iphonecard").slideToggle();
    });
  //repair ipad
  $("#repairipad img").click(function(){
        $('html, body').animate({
            scrollTop: $("#accordion").offset().top - navbarHeight
        }, 1000);
        $("#ipadcard").slideToggle();
    });
  //repair android
  $("#repairandroid img").click(function(){
        $('html, body').animate({
            scrollTop: $("#accordion").offset().top - navbarHeight
        }, 1000);
        $("#samsungcard").slideToggle();
    });
  //repair mac
  $("#repairmac img").click(function(){
        $('html, body').animate({
            scrollTop: $("#accordion").offset().top - navbarHeight
        }, 1000);
        $("#maccard").slideToggle();
    });
  //repair microsoldering
  $("#repairmicrosoldering img").click(function(){
        $('html, body').animate({
            scrollTop: $("#accordion").offset().top - navbarHeight
        }, 1000);
        $("#microsolderingcard").slideToggle();
    });
  //repair srs
  $("#repairsrs img").click(function(){
        $('html, body').animate({
            scrollTop: $("#accordion").offset().top - navbarHeight
        }, 1000);
        $("#srscard").slideToggle();
    });
}); 

/*back button and automatically collapse accordion and scroll to top of the page*/

document.getElementById("back-button").addEventListener("click", function(){
    var accordion = document.getElementById("iphonecollapse");
    var collapse = accordion.getElementsByClassName("collapse");
    collapse[0].classList.remove("show");
});
