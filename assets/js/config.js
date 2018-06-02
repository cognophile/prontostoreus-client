const baseApi = 'http://localhost:8765/';

const locationEndpoint = 'locate/';
const customerEndpoint = 'customer/';
const applicationEndpoint = 'apply/';
const submissionEndpoint = 'submit/';
const confirmationEndpoint = 'confirm/';
const invoiceEndpoint = 'invoice/';

function notification(size, title, message) {
    bootbox.alert({ 
        size: size,
        title: title,
        message: message
      });
}

function isNotNullOrEmpty(field) {
    return (field !== null && field !== "");
}