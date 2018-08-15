function acceptTerms(selection) {
    var dateFormatted = dateFormat(new Date(), 'Y-m-d h:i:s');
    var applicationId = getUrlParameter('application');
    var data = {
       'application_id': applicationId,
       'accepted': + selection,
       'date_accepted':  dateFormatted
    };

    postConfirmation(data, applicationId);
}

function postConfirmation(data, applicationId) {
    $.post(baseApi + confirmationEndpoint + 'applications/' + applicationId + '/update/', data)
        .done(function(response) {
            loadPage('invoice.php?application=' + getUrlParameter('application'));
        })
        .fail(function(error) {
            renderApiError(error); 
            return false;
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