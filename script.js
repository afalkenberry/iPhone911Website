//auto scroll function automatically scrolling down to the top of the accordion
 $(document).ready(function(){
    var navbar = document.getElementById("navbar");
   //code executes if navbar element is present on page (fixes issue of getboundingclientrect error)
   if (navbar) {
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
  }
}); 

//back button for buy section
$(document).ready(function() {
  $("#back-button").on('click', function() {
    $("#iphonecollapse").collapse('hide');
    window.scrollTo(0, 0);
    });
  });

$(document).ready(function(){
  var navbar = document.getElementById("navbar2");
  //code executes if navbar element is present on page (fixes issue of getboundingclientrect error)
  if (navbar) {
    var navbarHeight = navbar.getBoundingClientRect().height;
    console.log(navbarHeight);
  //iphone device selection dropdown
  $("#iphonerepair img").click(function(){
    var selectDeviceHeight = $(".selectdevice").outerHeight();
    $('html, body').animate({
      scrollTop: $("#accordion").offset().top - navbarHeight + selectDeviceHeight}, 1000);
    $('#phoneimgcontainer').scrollIntoView({ behavior: "smooth" });
    });

  //ipad device selection dropdown
  $("#ipadrepair img").click(function(){
    var selectDeviceHeight = $(".selectdevice").outerHeight();
    $('html, body').animate({
      scrollTop: $("#accordion").offset().top - navbarHeight + selectDeviceHeight}, 1000);
    $('#ipadimgcontainer').scrollIntoView({ behavior: "smooth" });
    });
    //microsoldering repair dropdown
  $("#microsolderingrepair img").click(function(){
    var selectDeviceHeight = $(".selectdevice").outerHeight();
    $('html, body').animate({
      scrollTop: $("#accordion").offset().top - navbarHeight + selectDeviceHeight}, 1000);
    $('#microsolderingcard').scrollIntoView({ behavior: "smooth" });
  });

  $('#macrepair img').click(function(){
    var selectDeviceHeight = $(".selectdevice").outerHeight();
    $('html, body').animate({
      scrollTop: $('#accordion').offset().top - navbarHeight + selectDeviceHeight}, 1000);
      $('#maccard').scrollIntoView({ behavior: "smooth" });
    });

    //android repair dropdown scroll
    $('#androidrepair img').click(function(){
      var selectDeviceHeight = $(".selectdevice").outerHeight();
      $('html, body').animate({
        scrollTop: $('#accordion').offset().top - navbarHeight + selectDeviceHeight}, 1000);
      $('#samsungcard').scrollIntoView({ behavior: "smooth" });
      });
    
    //srs repair dropdown scroll
    $('#srsrepair img').click(function(){
      var selectDeviceHeight = $(".selectdevice").outerHeight();
      $('html, body').animate({
        scrollTop: $('#accordion').offset().top - navbarHeight + selectDeviceHeight}, 1000);
      $('#srscard').scrollIntoView({ behavior: "smooth" });
    });
  
    //sub-accordion dropdown scroll
    //**fixes the issue where the sub-accordion scroll position is affected by primary accordion scroll position
    
    //iphone sub-accordion section
     $('#iphonecard img').click(function() {
      var selectDeviceHeight = $(".selectdevice").outerHeight();
      $('html, body').animate({
      scrollTop: $('#accordion').offset().top - navbarHeight + selectDeviceHeight}, 0);
    $('#iphonesubcard1').scrollTop({ behavior: "smooth" });
    });

    //ipad sub-accordion section
    $('#ipadcard img').click(function() {
      var selectDeviceHeight = $(".selectdevice").outerHeight();
      $('html, body').animate({
      scrollTop: $('#accordion').offset().top - navbarHeight + selectDeviceHeight}, 0);
    $('#ipadsubcard1').scrollTop({ behavior: "smooth" });
    });
  };
});

//repair section back buttons
$(document).ready(function() {
  //both iphone repair back buttons 
  $('#iphonebutton2').on('click', function() {
    $('#iphonesubcard1').collapse('hide');
    $('#iphonecard').collapse('show');
    // scroll to the top of the page
   // window.scrollTo(0, 0);
  });
  $('#iphonebutton1').on('click', function() {
    $('#iphonecard').collapse('hide');
    // scroll to the top of the page
    window.scrollTo(0, 0);
  });
  //both ipad repair back buttons
  $('#ipadbutton2').on('click', function(){
    $('#ipadsubcard1').collapse('hide');
    $('#ipadcard').collapse('show');
  });
  $('#ipadbutton1').on('click', function(){
    $('#ipadcard').collapse('hide');
    //scroll to the top of the page
    window.scrollTo(0, 0);
  });
  //microsoldering repair back button
  $('#microsolderingbutton').on('click', function(){
    $('#microsolderingcard').collapse('hide');
    window.scrollTo(0, 0);
  });
  //android repair back button
  $('#androidbackbutton').on('click', function(){
    $('#samsungcard').collapse('hide');
    window.scrollTo(0, 0);
  });
  //mac repair back button
  $('#macbackbutton').on('click', function(){
    $('#maccard').collapse('hide');
    window.scrollTo(0, 0);
  });
  //srs repair back button
  $('#srsbutton').on('click', function(){
    $('#srscard').collapse('hide');
    window.scrollTo(0, 0);
  });
});

window.addEventListener('scroll', function() {
  console.log('scroll event detected');
  var nav = document.querySelector('nav');
  var scrollPosition = window.scrollY;
  if (scrollPosition > 250) {
    nav.classList.add('fixed-top');
  } else {
    nav.classList.remove('fixed-top');
  }
});

//makes page auto scroll to the top when refreshed
history.scrollRestoration = "manual";

//making the same accordion drop down for each instance of the primary accordion
//store each iphone img in an array
//jquery way of accomplishing storing <a id="iphone1-19" and assigning click event
//function loops through a elements on the phoneimgcontainer creating an array of 0-18 (19 elements)
var iphoneStorage = [];
$(document).ready(function(){
  $('#phoneimgcontainer a').each(function(i){
     iphoneStorage.push('#iphone' + (i + 1));
    //iphoneStorage.push(i++); 
    $(iphoneStorage[i]).on("click", function(){
      console.log('you clicked ' + iphoneStorage[i]);

      //getting price element from doc
      $.getJSON('priceData.json', function(data) {
         
        let index = i;
        let price2 = data.screen[index];
        let price3 = data.backglass[index];
        let price4 = data.battery[index];
        let price5 = data.chargingport[index];
        let model = data.model[index];

         $('#iprice2').html(price2);
         $('#iprice3').html(price3);
         $('#iprice4').html(price4);
         $('#iprice5').html(price5);
         $('#iphonemodel').html(model);
       });  
    });
  });
});

//function to get data from phonePriceData.json and insert into buy iphone section
//definitely not the most efficient way to do this but it works with the way I built the html page and json doc
$(document).ready(function(){
  $.getJSON('phonePriceData.json', function(data){
    //reading data and storing to a variable
    var buyprice1 = data.iPhone13ProMax[0]["128GB"];
    var buyprice2 = data.iPhone13ProMax[1]["256GB"];
    var buyprice3 = data.iPhone13Pro[0]["128GB"];
    var buyprice4 = data.iPhone13Pro[1]["256GB"];
    var buyprice5 = data.iPhone13[0]["128GB"];
    var buyprice6 = data.iPhone13[1]["256GB"];
    var buyprice7 = data.iPhone13Mini[0]["128GB"];
    var buyprice8 = data.iPhone13Mini[1]["256GB"];
    var buyprice9 = data.iPhone12ProMax[0]["128GB"];
    var buyprice10 = data.iPhone12ProMax[1]["256GB"];
    var buyprice11 = data.iPhone12Pro[0]["128GB"];
    var buyprice12 = data.iPhone12Pro[1]["256GB"];
    var buyprice13 = data.iPhone12[0]["64GB"];
    var buyprice14 = data.iPhone12[1]["128GB"];
    var buyprice15 = data.iPhone12[2]["256GB"];
    var buyprice16 = data.iPhone12Mini[0]["64GB"];
    var buyprice17 = data.iPhone12Mini[1]["128GB"];
    var buyprice18 = data.iPhone12Mini[2]["256GB"];
    var buyprice19 = data.iPhone11ProMax[0]["64GB"];
    var buyprice20 = data.iPhone11ProMax[1]["256GB"];
    var buyprice21 = data.iPhone11Pro[0]["64GB"];
    var buyprice22 = data.iPhone11Pro[1]["256GB"];
    var buyprice23 = data.iPhone11[0]["64GB"];
    var buyprice24 = data.iPhone11[1]["128GB"];
    var buyprice25 = data.iPhone11[2]["256GB"];
    var buyprice26 = data.iPhoneXSMax[0]["64GB"];
    var buyprice27 = data.iPhoneXSMax[1]["256GB"];
    var buyprice28 = data.iPhoneXS[0]["64GB"];
    var buyprice29 = data.iPhoneXS[1]["256GB"];
    var buyprice30 = data.iPhoneXR[0]["64GB"];
    var buyprice31 = data.iPhoneXR[1]["128GB"];
    var buyprice32 = data.iPhoneXR[2]["256GB"];
    var buyprice33 = data.iPhoneX[0]["64GB"];
    var buyprice34 = data.iPhoneX[1]["256GB"];
    var buyprice35 = data.iPhone8Plus[0]["64GB"];
    var buyprice36 = data.iPhone8Plus[1]["256GB"];
    var buyprice37 = data.iPhoneSE[0]["64GB"];
    var buyprice38 = data.iPhoneSE[1]["128GB"];
    var buyprice39 = data.iPhoneSE[2]["256GB"];
    var buyprice40 = data.iPhone8[0]["64GB"];
    var buyprice41 = data.iPhone8[1]["256GB"];
    var buyprice42 = data.iPhone7[0]["32GB"];
    var buyprice43 = data.iPhone7[1]["128GB"];
    
    //altering flexbox id's to put the price in the right spot
    $('#13pm-1').html(buyprice1);
    $('#13pm-2').html(buyprice2);
    $('#13p-1').html(buyprice3);
    $('#13p-2').html(buyprice4);
    $('#13-1').html(buyprice5);
    $('#13-2').html(buyprice6);
    $('#13m-1').html(buyprice7);
    $('#13m-2').html(buyprice8);
    $('#12pm-1').html(buyprice9);
    $('#12pm-2').html(buyprice10);
    $('#12p-1').html(buyprice11);
    $('#12p-2').html(buyprice12);
    $('#12-1').html(buyprice13);
    $('#12-2').html(buyprice14);
    $('#12-3').html(buyprice15);
    $('#12m-1').html(buyprice16);
    $('#12m-2').html(buyprice17);
    $('#12m-3').html(buyprice18);
    $('#11pm-1').html(buyprice19);
    $('#11pm-2').html(buyprice20);
    $('#11p-1').html(buyprice21);
    $('#11p-2').html(buyprice22);
    $('#11-1').html(buyprice23);
    $('#11-2').html(buyprice24);
    $('#11-3').html(buyprice25);
    $('#xsm-1').html(buyprice26);
    $('#xsm-2').html(buyprice27);
    $('#xs-1').html(buyprice28);
    $('#xs-2').html(buyprice29);
    $('#xr-1').html(buyprice30);
    $('#xr-2').html(buyprice31);
    $('#xr-3').html(buyprice32);
    $('#x-1').html(buyprice33);
    $('#x-2').html(buyprice34);
    $('#8p-1').html(buyprice35);
    $('#8p-2').html(buyprice36);
    $('#se-1').html(buyprice37);
    $('#se-2').html(buyprice38);
    $('#se-3').html(buyprice39);
    $('#8-1').html(buyprice40);
    $('#8-2').html(buyprice41);
    $('#7-1').html(buyprice42);
    $('#7-2').html(buyprice43);
  });
});

//function to get data from ipadPriceData and move corresponding prices to the appropriate ipad model
var ipadRepairData = [];
$(document).ready(function(){
  $('#ipadimgcontainer a').each(function(i){
     ipadRepairData.push('#ipad' + (i + 1));
    //ipadRepairData.push(i++); 
    $(ipadRepairData[i]).on("click", function(){
      console.log('you clicked ' + ipadRepairData[i]);

      //getting price element from doc
      $.getJSON('ipadPriceData.json', function(data) {
         
        let index = i;
        let price1 = data.screen[index];
        let price2 = data.battery[index];
        let price3 = data.chargingport[index];
        let model = data.model[index];

         $('#ipadprice2').html(price1);
         $('#ipadprice3').html(price2);
         $('#ipadprice4').html(price3);
         $('#ipadmodel2').html(model);
       });  
    });
  });
});

