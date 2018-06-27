var globalLineCounter = 1;

$(document).ready(function () {
    $("#start-date-input").datepicker();
    $("#end-date-input").datepicker();

    // ! post to create empty application, then get the ID back to fulfil it with put
    // ! pass this to addLineToApplicationData()
    addInitialLine(globalLineCounter);
});

// Parent Application Functions
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

    for (var i = 0; i < globalLineCounter; i++) {
        var furnishingId = $('#furnishing-selector-' + i).val();
        var quantity = $('#quantity-input-' + i).text();
        var linePrice = $('#line-cost-readonly-' + i).text();
     
        var lineData = [furnishingId, quantity, linePrice];
        var isValid = doValidate(lineData);

        // ! Get application Id - Create then update app details, and post lines seperately? 
        (isValid) ? addLineToApplicationData(applicationId, lineData) : invalidFormNotification();
    } 

    applicationData = calculateTotal(applicationData);
    postApplication(applicationData);
}

// Application Lines Functions
function setApplicationTotal(lineNumber) {
    var totalCost = 0.00;

    for (var i = 1; i <= lineNumber; i++) {
        var currentLineCost = $('#line-cost-readonly-' + i).html().substring(1);
        totalCost += parseFloat(currentLineCost);
    }

    $('#total-cost-readonly').html('£' + parseFloat(totalCost).toFixed(2));
}

function renderRoomsDropdown(data) {
    data.forEach(function(index) {
        $('#room-selector-' + globalLineCounter).append('<option value=\'' + index.id + '\'>' + index.description + '</option>');
    });
}

function renderFurnishingsDropdown(data) {
    $('#furnishing-selector-' + globalLineCounter).find('option').not(':first').remove();

    data.forEach(function(index, object) {
        $('#furnishing-selector-' + globalLineCounter).append('<option value=\'' + index.id + '\'>' + index.description + '</option>');
    });
}

function getRooms() {
    $.get(baseApi + applicationEndpoint + "room/")
        .done(function(response) {
            return renderRoomsDropdown(response.data);
        })
        .fail(function(error) {
            notify('Server error!', 'Unable to communicate with the server: ' + error.message);
            return false;
        });
}

function getFurnishings(roomId) {
    $.get(baseApi + applicationEndpoint + "room/" + roomId + "/furnishing/")
        .done(function(response) {
            return renderFurnishingsDropdown(response.data);
        })
        .fail(function(error) {
            notify('Server error!', 'Unable to communicate with the server: ' + error.message);
            return false;
        });
}

function setFurnishingList(lineNumber) {
    var roomId = $('#room-selector-' + lineNumber).val();
    getFurnishings(roomId);
}

function getFurnishing() {
    var roomId = $('#room-selector-' + globalLineCounter).val();
    var furnishingId = $('#furnishing-selector-' + globalLineCounter).val();

    $.get(baseApi + applicationEndpoint + "room/" + roomId + "/furnishing/" + furnishingId)
        .done(function(response) {
            return setFurnishingSize(response.data);
        })
        .fail(function(error) {
            notify('Server error!', 'Unable to communicate with the server: ' + error.message);
            return false;
        });

    getItemPrice();
}

function setFurnishingSize(data) {
    var majorUnit = "m", minorUnit = "2";
    $('#size-readonly-' + globalLineCounter).html(data.size + majorUnit + minorUnit.sup() + "/" + data.weight + "kg");
}

function getItemPrice() {
    var companyId = getUrlParameter('company');
    var furnishingId = $('#furnishing-selector-' + globalLineCounter).val();
    
    $.get(baseApi + applicationEndpoint + "company/" + companyId + "/furnishing/" + furnishingId)
    .done(function(response) {
        return setFurnishingPrice(response.data);
    })
    .fail(function(error) {
        notify('Server error!', 'Unable to communicate with the server: ' + error.message);
        return false;
    });
}

function setFurnishingPrice(data) {
    $('#item-price-readonly-' + globalLineCounter).html("£" + data.cost);
    setLinePrice('#item-price-readonly-' + globalLineCounter);
}

function setLinePrice(elementId) {    
    var lastDelimiter = elementId.lastIndexOf('-');
    var lineNumber = elementId.substring(lastDelimiter + 1); 
    
    var quantity = $('#quantity-input-' + lineNumber).val(); 
    var itemPrice = $('#item-price-readonly-' + lineNumber).html().substring(1);
    var lineCost = quantity * itemPrice;

    $('#line-cost-readonly-' + lineNumber).html('£' + lineCost.toFixed(2));
    setApplicationTotal(globalLineCounter);
}

function populateFields(lineNumber) {
    getRooms();
    setFurnishingList(lineNumber);
}

// Application Line Creation
function addInitialLine(lineNumber) {
    doAddLine(lineNumber);
}

function addNewLine() {
    globalLineCounter++;
    doAddLine(globalLineCounter);
}

function doAddLine(lineNumber) {
    var lineHtml = "<br><div class=\"row\">" + 
        "<div class=\"col\">" +
            "<label id=\"room-selector-label\" class=\"field-label\">Room</label>" +
            "<select id=\"room-selector-" + lineNumber + "\" class=\"form-control\" name=\"room\" onchange=\"setFurnishingList(" + lineNumber + ")\" required=\"true\">" + 
                "<option value=0> -- Select a room -- </option>" +
            "</select>" +
        "</div>" +
        "<div class=\"col\">" +
            "<label id=\"furnishing-selector-label\" class=\"field-label\">Furnishing</label>" +
            "<select id=\"furnishing-selector-" + lineNumber + "\" class=\"form-control\" name=\"furnishing\" onchange=\"getFurnishing()\" required=\"true\">" +
                "<option value=0> -- Select a furnishing -- </option>" +
            "</select>" +
        "</div>" +

        "<div class=\"col\">" +
            "<label id=\"quantity-label\" class=\"field-label\">Quantity</label>" +
            "<input id=\"quantity-input-" + lineNumber + "\" class=\"form-control\" type=\"text\" name=\"quantity\" value=\"1\" onchange=\"setLinePrice(this.id)\" required=\"true\">" +
        "</div>" +
        
        "<div class=\"col\">" +
            "<label id=\"size-readonly-label\" class=\"field-label\" >Required Size/Weight</label>" +
            "<p id=\"size-readonly-" + lineNumber + "\" class=\"form-control-static\" name=\"size\">0m<sup>2</sup>/0kg</p>" +
        "</div>" +

        "<div class=\"col\">" +
            "<label id=\"item-price-readonly-label\" class=\"field-label\">Item Price</label>" +
            "<p id=\"item-price-readonly-" + lineNumber + "\" class=\"form-control-static\" name=\"itemPrice\">£0.00</p>" +
        "</div>" +
        
        "<div class=\"col\">" +
            "<label id=\"line-cost-readonly-label\" class=\"field-label\">Line Cost</label>" +
            "<p id=\"line-cost-readonly-" + lineNumber + "\" class=\"form-control-static\" name=\"lineCost\">£0.00</p>" +
        "</div>" +

        "<div class=\"col\">" +
            "<br>" +
            "<span class=\"input-group-btn\">" +
                "<a id=\"add-app-line-btn\" class=\"browse btn btn-primary\" onclick=\"addNewLine()\">+</a>" +
            "</span>" +
        "</div>" +
    "</div>";

    $('#data-entry').append(lineHtml);
    populateFields(lineNumber);
}
