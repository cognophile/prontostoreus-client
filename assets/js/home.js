function launch() {
    $.get(baseApi)
        .done(function (response) {
            if (response.success) {
                window.location.href = "src/location.php";
            }
            else {
                notify('Oops!', 'The server is available but has indicated an error.' );
            }
        })
        .fail(function (error) {
            notify('Oops!', 'Server unavailable!');
        });
}