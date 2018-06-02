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

    isValid ? window.location.href = "application.php" : invalidFormNotification();
}

function doValidate(fields) {
    return fields.every(isNotNullOrEmpty);
}

function isNotNullOrEmpty(field) {
    return (field !== null && field !== "");
}

function invalidFormNotification() {
    notification("small", "You missed a bit!", "You need to fill out all fields before moving to the next stage.");
}