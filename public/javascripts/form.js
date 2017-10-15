$("document").ready(() => {

    // Submit click send parameters to server
    $('#submit').on('click', () => {
        let address = $('#address').val();
        let port = $('#port').val();
        let username = $('#username').val();
        let password = $('#password').val();

        let inputJSON = {
            address: address,
            port: port,
            username: username,
            password: password
        };

        $('.input').hide();
        $('#loader').show();

        let xhr = $.post("/stream", inputJSON, () => {
            $('.loader-msg').text('Finished!');
            $('.DNA_cont').hide();
            $('#successAnimation').show();
        });
    });

});