function acceptTerms(selection) {
    // var data = {
    //    'application_id': getUrlParameter('application'),
    //    'accepted': selection,
    //    'date_accepted':  dateFormat(new Date(), 'Y-m-d')
    // };

    // postConfirmation(data);
    notify('Mock Alert', 'Mock: User clicked: ' + selection);
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

/**
 * Render a notification to the user and subsequently navigate to
 *  another page.
 * @param {string} title 
 * @param {string} message 
 * @param {string} nextUrl 
 * @param {string} fallbackUrl 
 * @return {void}
 */
function requireConfirmation(title, message) {
    bootbox.confirm({ 
        title: title,
        message: message,
        buttons: {
            confirm: {
                label: 'Accept <i class="fa fa-times"></i>',
            },
            cancel: {
                label: 'Decline <i class="fa fa-times"></i>',
            }
        },
        callback: function (selection) { 
            (selection) ? acceptTerms(true) : acceptTerms(false);
        }
    });
}