//auto scroll function automatically scrolls down to the top of the accordion
 $(document).ready(function(){
    var navbar = document.getElementById("navbar");
var navbarHeight = navbar.getBoundingClientRect().height;
  //iphone dropdown in buy section
    $("#iphonedropdown img").click(function(){
        $('html, body').animate({
            scrollTop: $("#accordion").offset().top - navbarHeight
        }, 1000);
        var iphoneCollapse = document.getElementById('iphonecollapse');
        iphoneCollapse.scrollIntoView({ behavior: "smooth" });
    });
   
  //samsung dropdown in buy section
   $("#samsungdropdown img").click(function(){
        $('html, body').animate({
            scrollTop: $("#accordion").offset().top - navbarHeight
        }, 1000);
        var samsungCollapse = document.getElementById('samsungcollapse');
        samsungCollapse.scrollIntoView({ behavior: "smooth" });
    });
}); 

//back button for buy section
$(document).ready(function() {
  $("#back-button").click(function(event) {
    event.preventDefault();
    $("#iphonecollapse").collapse("hide", function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  });
});

//separate auto scroll function for repair section
$(document).ready(function(){
  var navbar = document.getElementById("navbar2");
  var navbarHeight = navbar.getBoundingClientRect().height;

  //iphone device selection dropdown
  $("#iphonerepair img").click(function(){
    var selectDeviceHeight = $(".selectdevice").outerHeight();
    $('html, body').animate({
      scrollTop: $("#accordion").offset().top - navbarHeight + selectDeviceHeight}, 1000);
    var phoneImgContainer = document.getElementById('phoneimgcontainer');
    phoneImgContainer.scrollIntoView({ behavior: "smooth" });
    });

  //ipad device selection dropdown
  $("#ipadrepair img").click(function(){
    var selectDeviceHeight = $(".selectdevice").outerHeight();
    $('html, body').animate({
      scrollTop: $("#accordion").offset().top - navbarHeight + selectDeviceHeight}, 1000);
    var ipadimgcontainer = document.getElementById('ipadimgcontainer');
    ipadimgcontainer.scrollIntoView({ behavior: "smooth" });
    });
    
    //microsoldering repair dropdown
  $("#microsolderingrepair img").click(function(){
    var selectDeviceHeight = $(".selectdevice").outerHeight();
    $('html, body').animate({
      scrollTop: $("#accordion").offset().top - navbarHeight + selectDeviceHeight}, 1000);
    var microsolderingContainer = document.getElementById('microsolderingcontainer');
    microsolderingContainer.scrollIntoView({ behavior: "smooth" });
    });

});


//back button on repair section collapsing sub-accordion & showing primary accordion
$(document).ready(function(){
  $('#backbutton2').on("click", function(){
    $('#iphonesubcard1').collapse("hide");
    $('#iphonecard').collapse("show");
  });
  $('#backbutton3').on("click", function(){
    $('#iphonecard').collapse("hide");
  });
});

