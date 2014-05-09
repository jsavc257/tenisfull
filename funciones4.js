// JavaScript Document
$(document).on("pagecreate",function(event){
  $(window).on("orientationchange",function(event){
    alert("Orientation changed to: " + event.orientation);
  });                     
});

$(document).on("pagecreate",function(event){
  $(window).on("orientationchange",function(){
    if(window.orientation == 0)
    {

    $(document).on("pagecreate",function(event){
	$("#nametienda").color("blue")	
    alert("Para un mejor uso de la aplicación cambie la posición de su               dispositivo de vertical a horizontal!!!");
		 });
    }
    else
    {
    $(document).on("pagecreate",function(event){
	$("#nametienda").color("red")	
    alert("Para un mejor uso de la aplicación cambie la posición de su               dispositivo de vertical a horizontal!!!");
});
    }
  });                   
});

