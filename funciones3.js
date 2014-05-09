//Funciones
$(document).on("pagecreate","#newprods",function(){
  $("#pren1").on("tap",function(){
   $("#espe1").text("$2500.00");
   });                       
});

$(document).on("pagecreate","#newprods",function(){
  $("#des1").on("taphold",function(){
   $("#espe2").text("50%");
  });                       
});




$(document).on("pagecreate","#newprods",function(){
  $("#pren2").on("tap",function(){
   $("#espe3").text("$3500.00");
   });                       
});

$(document).on("pagecreate","#newprods",function(){
  $("#des2").on("taphold",function(){
   $("#espe4").text("45%");
  });                       
});


$(document).on("pagecreate","#newprods",function(){
  $("#pren3").on("tap",function(){
   $("#espe5").text("$4500.00");
   });                       
});

$(document).on("pagecreate","#newprods",function(){
  $("#des3").on("taphold",function(){
   $("#espe6").text("35% si te llevas 2 pares 5% adicional");
  });                       
});



$(document).on("pagecreate","#newprods",function(){
  $("#indica").on("swipe",function(){
    $("#indica1").text("1.-Primer toque en el signo de $ muestra el precio");
	$("#indica2").text("2.-Si toca y sostiene durante un segundo, en la palabra DESC mostrara su descuento.");
  });                       
});


$(document).on("pagecreate","#inicio",function(){
  $("#doblemenu").on("swipeleft",function(){
     $.mobile.changePage("#ofertas");
  });
});

$(document).on("pagecreate","#inicio",function(){
  $("#doblemenu").on("swiperight",function(){
   $.mobile.changePage("#newprods");
  }); 
  
}); // JavaScript Document