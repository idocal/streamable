$("document").ready(() => {

    // Submit click send parameters to server
    $('#submit').on('click', () => {
        let address = $('#address').val();
        let port = $('#port').val();
        let username = $('#username').val();
        let password = $('#password').val();

        let tables = [];
        let tablesNum = $('input[type=checkbox]:checked').length;
        $('.checkbox-input:checked').each(function() {
            tables.push($(this).val());
        });

        let inputJSON = {
            address: address,
            port: port,
            username: username,
            password: password,
            tables: tables
        };

        console.log(inputJSON);

        $('.input').hide();
        $('#loader').show();

        // Returned response from server
        let xhr = $.post("/stream", inputJSON, () => {
            $('.loader-msg').text('Finished!');
            $('.DNA_cont').hide();
            $('#successAnimation').show();
            $('#check').show();
        });
    });

});