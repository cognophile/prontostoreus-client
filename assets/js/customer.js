$(document).keypress(function(ev) {
    if (ev.which === 13) {
        validateCustomerForm();
    }
});

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

    var fields = [dob, firstname, surname, email, telephone, lineOne, lineTwo, town, county, postcode]; 
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

function doValidate(fields) {
    return fields.every(isNotNullOrEmpty);
}

function invalidFormNotification() {
    notify('You missed a bit!', 'You need to fill out all fields before moving to the next stage.');
}

function getErrorString(error) {
    return JSON.stringify(error);
}

function postCustomer(data) {
    $.post(baseApi + customerEndpoint, data)
        .done(function(response) {
            var title = (response.success) ? 'Got it!' : '';
            notifyAndLoadPage(title, response.message, 
                'application.php?company=' + getUrlParameter('company') + '&customer=' + response.data);
        })
        .fail(function(error) {
            var title = (!error.responseJSON.success) ? 'Oops!' : '';
            notify(title, error.responseJSON.message + ' ' + error.statusText + ': ' + getErrorString(error.responseJSON.error));  
    });
}