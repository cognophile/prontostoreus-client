// TODO: Pass invoice ID from metadata to the download button

$(document).ready(function () {
    applicationId = getUrlParameter('application');
    getApplicationCustomer(applicationId);
    getApplicationCompany(applicationId);
    getInvoiceData(applicationId);
    getInvoiceLines(applicationId);
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

function renderInvoiceData(data) {
    $('#invoice-ref').text(data.reference);
    $('#invoice-number').text(data.application.id);

    var createdDate = extractFormattedDate(data.application.created);
    $('#invoice-submission-date').text(createdDate);

    var issuedDate = extractFormattedDate(data.issued);
    $('#invoice-issued-date').text(issuedDate);

    var paymentDueDate = extractFormattedDate(data.due);
    $('#invoice-payment-due-date').text(paymentDueDate);

    var terms = (data.application.confirmations[0].accepted) ? 'Accepted' : 'Declined';
    $('#invoice-terms').text(terms);
}

function renderInvoiceLines(data) {
    for (let line = 0; line < data.application_lines.length; line++) {
        const element = data.application_lines[line];
        const row = line + 1;
        var lineCost = parseFloat(element.line_cost).toFixed(2);
        var itemCost = lineCost / parseInt(element.quantity);

        var lineHtml = "<tr>" + 
                        "<th scope=\"row\">" + row + "</th>" + 
                            "<td>" + element.furnishing.room.description + "</td>" + 
                            "<td>" + element.furnishing.description + "</td>" + 
                            "<td>" + itemCost.toFixed(2) + "</td>" + 
                            "<td>" + element.quantity + "</td>" +
                            "<td>" + element.line_cost + "</td>" +
                        "</tr>";

        $('#invoice-lines-table > tbody:last-child').append(lineHtml);
    }

    $('#invoice-total-cost').append(currencySymbol + data.total_cost);
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

function getInvoiceData(applicationId) {
    $.get(baseApi + invoiceEndpoint + 'applications/' + applicationId)
        .done(function(response) {
            return renderInvoiceData(response.data[0]);
        })
        .fail(function(error) {
            renderApiError(error);
            return false;
        });
}

function getInvoiceLines(applicationId) {
    $.get(baseApi + invoiceEndpoint + 'applications/' + applicationId + "/lines/")
        .done(function(response) {
            return renderInvoiceLines(response.data[0]);
        })
        .fail(function(error) {
            renderApiError(error);
            return false;
        });
}