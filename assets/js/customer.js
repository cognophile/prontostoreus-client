/**
 * Add a keypress event listener to the 'Enter' key
 *  to fire the form validation method. 
 */
$(document).keypress(function(ev) {
    if (ev.which === 13) {
        validateCustomerForm();
    }
});

/**
 * Perform validation of the customer form before calling to post 
 *  the form data to the API.
 * @return {void}
 */
function validateCustomerForm() {
    var title = $('#title-selector').val();
    var dob = $('#dob-input').val();
    var firstname = $('#firstname-input').val();
    var surname = $('#surname-input').val();
    var email = $('#email-input').val();
    var telephone = $('#telephone-input').val();

    var lineOne = $('#address-line-one-input').val();
    var lineTwo = $('#address-line-two-input').val();
    var town = $('#town-input').val();
    var county = $('#county-input').val();
    var postcode = $('#postcode-input').val();

    var fields = [dob, firstname, surname, email, telephone, lineOne, town, county, postcode]; 
    var isValid = doValidate(fields); 

    postcode = postcode.replace(/\s+/g, '-').toUpperCase();
    var details = { 
        'title': title, 
        'dob': dob,
        'firstname': firstname, 
        'surname': surname, 
        'email': email, 
        'telephone': telephone, 
        addresses: {
            'line_one': lineOne, 
            'line_two': lineTwo, 
            'town': town, 
            'county': county, 
            'postcode': postcode
        }
    };

    isValid ? postCustomer(details) : invalidFormNotification();
}

/**
 * Perform an AJAX post of the given data to the Customer
 *  API endpoint. On success, will load the next page and 
 *  notifies of errors on failure.
 * @param {array} data 
 */
function postCustomer(data) {
    $.post(baseApi + customerEndpoint + 'add/', data)
        .done(function(response) {
            var title = (response.success) ? 'Got it!' : '';
            notifyAndLoadPage(title, response.message, 
                'application.php?company=' + getUrlParameter('company') + '&customer=' + response.data.id);
        })
        .fail(function(error) {
            renderApiError(error);
            return false;
    });
}