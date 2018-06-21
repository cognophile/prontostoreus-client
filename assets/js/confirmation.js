function acceptTerms(selection) {
    var dateFormatted = dateFormat(new Date(), 'Y-m-d h:i:s');
    var data = {
       'application_id': getUrlParameter('application'),
       'accepted': + selection,
       'date_accepted':  dateFormatted
    };

    postConfirmation(data);
}

function postConfirmation(data) {
    $.post(baseApi + confirmationEndpoint, data)
        .done(function(response) {
            loadPage('invoice.php?application=' + getUrlParameter('application'));
        })
        .fail(function(error) {
            notify('Oops!', 'We couldn\'t communicate with the server to complete your request!');
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