//Funcion para simulación de envio de datos
$(document).ready(function() {

    $('#simula_envio').click(function(){

        var dataString = $('#form_registro').serialize();

        alert('Datos que se enviaran: '+dataString);

        $.ajax({
            type: "POST",
            url: "account.php",
            data: dataString,
            success: function(data) {

            }
        });
    });
});