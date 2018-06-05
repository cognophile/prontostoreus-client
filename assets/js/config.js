const baseApi = 'http://localhost:8765/';

const locationEndpoint = 'locate/';
const customerEndpoint = 'details/';
const applicationEndpoint = 'apply/';
// const submissionEndpoint = 'submit/';
const confirmationEndpoint = 'confirm/';
const invoiceEndpoint = 'invoice/';

function notify(title, message) {
    bootbox.alert({ 
        title: title,
        message: message
    });
}

function notifyAndLoadPage(title, message, nextUrl, fallbackUrl) {
    bootbox.confirm({ 
        title: title,
        message: message,
        buttons: {
            confirm: {
                label: 'Continue! <i class="fa fa-times"></i>',
            },
            cancel: {
                label: 'Wait! <i class="fa fa-times"></i>',
            }
        },
        callback: function (result) { 
            // ! Result:boolean - Ok (true), Cancel (false) 
            (result) ? window.location.href = nextUrl : fallbackUrl;
        }
    });
}

function isNotNullOrEmpty(field) {
    return (field !== null && field !== "");
}

function apiGet(endpoint, data = "") {
    // $.get(baseApi + endpoint + data)
    //     .done(function(response) {
    //         return {
    //             resultResponse = response
    //         };
    //     })
    //     .fail(function(error) {
    //         return {
    //             resultError = error
    //         };
    // });
}

function apiPost(data) {

}

