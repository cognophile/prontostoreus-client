$(document).ready(function () {
    applicationId = getUrlParameter('application');
    getApplicationCustomer(applicationId);
    getApplicationCompany(applicationId);
    getApplicationMetadata(applicationId);
    getApplicationLines(applicationId);
});

function renderApplicationCustomer(data) {
    var fullname = data.customer.title + " " + data.customer.firstname + " " + data.customer.surname;
    $('#customer-name').text(fullname);
    
    var address = data.customer.addresses[0];
    $('#customer-address-line-one').text(address.line_one);
    $('#customer-address-line-two').text(address.line_two);
    $('#customer-address-town').text(address.town);
    $('#customer-address-county').text(address.county);

    var postcode = address.postcode.split(' ').join('-');
    $('#customer-address-postcode').text(postcode);
}

function renderApplicationCompany(data) {
    $('#company-name').text(data.company.name);

    var address = data.company.addresses[0];
    $('#company-address-line-one').text(address.line_one);
    $('#company-address-line-two').text(address.line_two);
    $('#company-address-town').text(address.town);
    $('#company-address-county').text(address.county);

    var postcode = address.postcode.split(' ').join('-');
    $('#company-address-postcode').text(postcode);
}

function getApplicationCustomer(applicationId) {
    $.get(baseApi + invoiceEndpoint + 'applications/' + applicationId + '/customer/')
        .done(function(response) {
            return renderApplicationCustomer(response.data[0]);
        })
        .fail(function(error) {
            renderApiError(error);
            return false;
        });
}

function getApplicationCompany(applicationId) {
    $.get(baseApi + invoiceEndpoint + 'applications/' + applicationId + '/company/')
        .done(function(response) {
            return renderApplicationCompany(response.data[0]);
        })
        .fail(function(error) {
            renderApiError(error);
            return false;
        });
}