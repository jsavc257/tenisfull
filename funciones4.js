// JavaScript Document
$(document).on("pagecreate",function(event){
  $(window).on("orientationchange",function(event){
  //  alert("Orientation changed to: " + event.orientation);
     alert("Para un mejor uso de la aplicación cambie de vertical a horizontal su dispositivo");
  });                     
});

$(document).on("pagecreate",function(event){
  $(window).on("orientationchange",function(){
    if(window.orientation == 0)
    {

    $(document).on("pagecreate","#inicio",function(event){
		$("#indica3").text("TIENDA");	
    	$("#indica4").text("Mr. X ");
		 });
    }
    else
    {
    $(document).on("pagecreate","#inicio",function(event){
	$("#indica3").text("MR. X");	
    	$("#indica4").text("SU MEJOR OPCIÓN");
		 
});
    }
  });                   
});

