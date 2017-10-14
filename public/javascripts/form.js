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


        let xhr = $.post("/stream", inputJSON, () => {
           alert('SUCCESS!');
        });
    });

});