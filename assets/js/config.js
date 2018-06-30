const baseApi = 'http://localhost:8765/';

const locationEndpoint = 'locations/';
const customerEndpoint = 'customers/';
const applicationEndpoint = 'applications/';
const confirmationEndpoint = 'confirmations/';
const invoiceEndpoint = 'invoices/';

// TODO: Fuller client function documentation and README config/run instructions

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
            // * Result:boolean - Ok (true), Cancel (false) 
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
 * Display an informational popover to the user to inform what 
 *  the value required by, or information in, this element represents
 */
function renderPopover(elementId, title, content) {
    $('#' + elementId)
        .popover({ 
            title: title, 
            content: content 
        })
        .blur(function () {
            $(this).popover('hide');
        });
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
 * Binding to check each element of the given array 
 *  against the isNotNullOrEmpty method
 * @param {*} fields 
 */
function doValidate(fields) {
    return fields.every(isNotNullOrEmpty);
}

/**
 * Render a notification to user that the present form is incomplete
 */
function invalidFormNotification() {
    notify('You missed a bit!', 'You need to fill out all fields before moving to the next stage.');
}

/**
 * Fetch the specified parameter from the current URL
 * @param {string} key 
 * @return {string} value
 */
function getUrlParameter(key) {
    var url = new URL(window.location.href);
    return value = url.searchParams.get(key);
}

/**
 * Format a given date to a custom supported format
 * @param {Object} date The date of which to format
 * @param {string} format The format for which the date will take
 * @return {string} dateFormatted The formatted date string
 */
function dateFormat(date, format) {
    if (format === 'Y-m-d h:i:s') {
        return date.getFullYear()  + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + 
            " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
    }
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

function apiPost(endpoint, data) {

}

