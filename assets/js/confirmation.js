function acceptTerms() {
    //  var data = {
    //    'application_id': applicationId,
    //    'terms_and_conditions': true
    // };
    // postConfirmation(data);
    notify('Accepted', 'Mock: User accepted terms, conditions, and privacy policy');
}

function postConfirmation(data) {
    $.post(baseApi + confirmationEndpoint, data)
        .done(function(response) {
            loadPage('invoice.php?application=' + getUrlParameter('application'));
        })
        .fail(function(error) {
            var title = (!error.responseJSON.success) ? 'Oops!' : '';
            notify(title, error.responseJSON.message + ' ' + error.statusText + ': ' + getJsonString(error.responseJSON.error));  
    });
}