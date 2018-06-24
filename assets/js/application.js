var globalLineCounter = 1;

$(document).ready(function () {
    $("#start-date-input").datepicker();
    $("#end-date-input").datepicker();

    // ! post to create empty application, then get the ID back to fulfil it with put
    // ! pass this to addLineToApplicationData()
    addLine();
});

function postApplication(data) {
    $.post(baseApi + applicationEndpoint, data)
    .done(function(response) {
        var title = (response.success) ? 'Got it!' : '';
        notifyAndLoadPage(title, response.message, 
            'confirmation.php?application=' + response.data.application_id);
    })
    .fail(function(error) {
        var title = (!error.responseJSON.success) ? 'Oops!' : '';
        notify(title, error.responseJSON.message + ' ' + error.statusText + ': ' + getJsonString(error.responseJSON.error));  
    });
}

function bindApplicationData(metaData) {
    var postApplication = {
        'customer_id': getUrlParameter('customer'),
        'company_id': getUrlParameter('company'),
        'delivery': metaData[0],
        'start_date': metaData[1],
        'end_date': metaData[2],
        'total_cost': metaData[3],
        'application_lines': []
    };

    return postApplication;
}

function calculateTotal(applicationData) {
    applicationData.application_lines.forEach(function(element) {
        applicationData.total_cost += element.line_cost;
    });

    return applicationData;
}

function addLineToApplicationData(applicationId, lineData) {
    var line = {
        'application_id': applicationId,
        'furnishing_id': lineData[0],
        'quantity': lineData[1],
        'line_cost': lineData[2]
    }
    
    postApplication.application_lines += line;
}

function validateApplicationForm() {
    var collection = $('#collection-checkbox').val();
    var startDate = $('#start-date-input').val();
    var endDate = $('#end-date-input').val();
    var metaData = [collection, startDate, endDate];
    var applicationData = bindApplicationData(metaData);

    for (i = 0; i < globalLineCounter; i++) {
        var furnishingId = $('#furnishing-selector-' + i).val();
        var quantity = $('#quantity-input-' + i).text();
        var linePrice = $('#line-price-readonly-' + i).text();
     
        var lineData = [furnishingId, quantity, linePrice];
        var isValid = doValidate(lineData);

        (isValid) ? addLineToApplicationData(lineData) : invalidFormNotification();
    } 

    applicationData = calculateTotal(applicationData);
    postApplication(applicationData);
}

function getFurnishingSize() {
    var size = "25", majorUnit = "m", minorUnit = "2";
    return size + majorUnit + minorUnit.sup(); 
}

function getItemPrice() {
    return 15.99;
}

function calculateLinePrice(elementId) {
    var lastDelimiter = elementId.lastIndexOf('-');
    var lineNumber = elementId.substring(lastDelimiter + 1); 
    var quantity = $("#quantity-input-" + lineNumber).val(); 
    var lineCost = quantity * getItemPrice();
    $('#line-price-readonly-' + lineNumber).html('£' + lineCost);
}

function addLine() {
    var applicationLineHtml = "<br><div class=\"row\">" + 
        "<div class=\"col\">" +
            "<label id=\"room-selector-label\" class=\"field-label\">Room</label>" +
            "<select id=\"room-selector-" + globalLineCounter + "\" class=\"form-control\" name=\"room\" required=\"true\">" +
                "<option value=\"1\">Living room</option>" +
                "<option value=\"2\">Kitchen</option>" +
                "<option value=\"3\">Bedroom</option>" +
                "<option value=\"4\">Bathroom</option>" +
                "<option value=\"5\">Garage</option>" +
            "</select>" +
        "</div>" +
        "<div class=\"col\">" +
            "<label id=\"furnishing-selector-label\" class=\"field-label\">Furnishing</label>" +
            "<select id=\"furnishing-selector-" + globalLineCounter + "\" class=\"form-control\" name=\"furnishing\" required=\"true\">" +
                "<option value=\"1\">TV</option>" +
                "<option value=\"2\">Stool</option>" +
                "<option value=\"3\">Bed</option>" +
                "<option value=\"4\">Sofa</option>" +
                "<option value=\"5\">Spade</option>" +
            "</select>" +
        "</div>" +

        "<div class=\"col\">" +
            "<label id=\"quantity-label\" class=\"field-label\">Quantity</label>" +
            "<input id=\"quantity-input-" + globalLineCounter + "\" class=\"form-control\" type=\"text\" name=\"quantity\" value=\"1\" onchange=\"calculateLinePrice(this.id)\" required=\"true\">" +
        "</div>" +
        
        "<div class=\"col\">" +
            "<label id=\"size-readonly-label\" class=\"field-label\" >Size</label>" +
            "<p id=\"size-readonly-" + globalLineCounter + "\" class=\"form-control-static\" name=\"size\">" + getFurnishingSize() + "</p>" +
        "</div>" +

        "<div class=\"col\">" +
            "<label id=\"item-price-readonly-label\" class=\"field-label\">Item Price</label>" +
            "<p id=\"item-price-readonly-" + globalLineCounter + "\" class=\"form-control-static\" name=\"itemPrice\">£" + getItemPrice() + "</p>" +
        "</div>" +
        
        "<div class=\"col\">" +
            "<label id=\"lineprice-readonly-label\" class=\"field-label\">Line Price</label>" +
            "<p id=\"line-cost-readonly-" + globalLineCounter + "\" class=\"form-control-static\" name=\"lineCost\">" + "</p>" +
        "</div>" +

        "<div class=\"col\">" +
            "<br>" +
            "<span class=\"input-group-btn\">" +
                "<a id=\"add-app-line-btn\" class=\"browse btn btn-primary\" onclick=\"addLine()\">+</a>" +
            "</span>" +
        "</div>" +
    "</div>";

    $('#data-entry').append(applicationLineHtml);
    calculateLinePrice($('#quantity-input-' + globalLineCounter).attr('id'));
    globalLineCounter++;
}
