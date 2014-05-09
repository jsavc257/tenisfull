// JavaScript Document
$(document).on("pagecreate",function(event){
  $(window).on("orientationchange",function(event){
  //  alert("Orientation changed to: " + event.orientation);
    alert("Cambie la posición de vertical a horizontal de su dispositivo para mejor uso");
  });                     
});

$(document).on("pagecreate",function(event){
  $(window).on("orientationchange",function(){
    if(window.orientation == 0)
    {
      $("#indica3").text("LOS MEJORES PRECIOS").css({"background-color":"yellow","font-size":"250%"});
    }
    else
    {
      $("#indica4").text("GRACIAS POR TU VISITA").css({"background-color":"pink","font-size":"200%"});
    }
  });                   
});