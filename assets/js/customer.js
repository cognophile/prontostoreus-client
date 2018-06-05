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

    /*
            'lineOne': lineOne, 
        'lineTwo': lineTwo, 
        'town': town, 
        'county': county, 
        'postcode': postcode
    */

    var details = { 
        'title': title, 
        'dob': dob,
        'firstname': firstname, 
        'surname': surname, 
        'email': email, 
        'telephone': telephone, 
    };

    isValid ? postCustomer(details) : invalidFormNotification();
}

function doValidate(fields) {
    return fields.every(isNotNullOrEmpty);
}

function invalidFormNotification() {
    notify('You missed a bit!', 'You need to fill out all fields before moving to the next stage.');
}

function postCustomer(data) {
    // Post data
    $.post(baseApi + customerEndpoint, data)
        .done(function(response) {
            var title = (response.success) ? 'Got it!' : '';
            notifyAndLoadPage(title, response.message, 'application.php?customer=' + response.data, 'customer.php');
        })
        .fail(function(error) {
            var title = (!error.success) ? 'Oops!' : '';
            notify(error.success, error.error + error.message);
    });


    // Load application.php on success
    //window.location.href = 
}