//Funcion para simulación acceso de usuario
$(document).ready(function() {

    $('#create_account').click(function(){

        var dataString = $('#form_account').serialize();

        alert('Bienvenido: '+dataString);

        $.ajax({
            type: "POST",
            url: "account.php",
            data: dataString,
            success: function(data) {

            }
        });
    });
});