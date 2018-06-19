const baseApi = 'http://localhost:8765/';

const locationEndpoint = 'locate/';
const customerEndpoint = 'customer/';
const applicationEndpoint = 'apply/';
const confirmationEndpoint = 'confirm/';
const invoiceEndpoint = 'invoice/';

/**
 * Render a notification window to the UI
 * @param {string} title 
 * @param {string} message 
 * @return {void}
 */
function notify(title, message) {
    bootbox.alert({ 
        title: title,
        message: message
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

function loadPage(nextUrl) {
    if (nextUrl) {
        window.location.href = nextUrl;
    }
}

/**
 * Equate whether the given field is NULL or an empty string
 * @param {*} field 
 * @return {boolean}
 */
function isNotNullOrEmpty(field) {
    return (field !== null && field !== "");
}

/**
 * Fetch the specified parameter from the current URL
 * @param {string} key 
 * @return {*} value
 */
function getUrlParameter(key) {
    var url = new URL(window.location.href);
    return value = url.searchParams.get(key);
}

function identifyHyperlink(currentPage) {

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

