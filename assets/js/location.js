
$(document).keypress(function(ev){
    if (ev.which == 13){
        $("#location-submission-btn").click();
    }
});

function postLocation() {
    var userPostcode = $('#input-location').val();
    var message = "We need a postcode to search by! Please enter this into the box provided.";

    if (!validateField(userPostcode, message, '#postcode-alert', 'block', 'visible')) {
        return false;
    }

    userPostcode = userPostcode.replace(/\s+/g, '-').toUpperCase();

    console.log(baseApi + locationEndpoint + userPostcode);

    $.get(baseApi + locationEndpoint + userPostcode)
        .done(function(response) {
            addListItem(response);
        })
        .fail(function(error) {
            alert("Unable to query to server: " + error);
            return false;
    });
}

function updateLocationPageStructure() {
    updateVisibility('#postcode-alert', 'none', 'hidden'); 
    updateVisibility('#company-list-label', 'block', 'visible');
    updateVisibility('#next-page-btn', 'block', 'visible');
}

function validateField(input, message, alertId, dispValue, visValue) {
    if (input == null || input == "") {
        updateVisibility(alertId, dispValue, visValue);
        return false;
    }
    
    return true;
}

function addListItem(response) {
    $("#company-list").empty();

    if (!response.error) {
        updateLocationPageStructure();

        response.data.forEach(function(data) {
            data._matchingData.Addresses.postcode = data._matchingData.Addresses.postcode.replace(/-/g, ' ').toUpperCase();

            var itemHtml = "<a id='company-id-" + data.id + "' class='list-group-item list-group-item-action flex-column align-items-start' onclick='makeActiveListItem(this)'>" 
                            + "<div class='d-flex w-100 justify-content-between'> <h5 id='company-name' class='mb-1'>" + data.name + "</h5>"
                            + "<small id='company-postcode'>" + data._matchingData.Addresses.postcode + "</small></div> <p id='company-desc' class='mb-1'>" + data.description + "</p>" 
                            + "<small id='company-short'>" + data.telephone + "</small> </a>";

            $("#company-list").append(itemHtml);
        });
    }
    else {
        bootbox.alert({ 
            size: "small",
            title: "Oops!",
            message: response.error
          })
    }
    
}

function updateVisibility(elementId, dispValue, visValue) { 
    $(elementId).css('display', dispValue);
    $(elementId).css('visibility', visValue);
}

function makeActiveListItem(elementId) {
    $('.active').removeClass('active');
    $(elementId).addClass("active");
}

function getChosenItem() {
    var activeItem = $('.active');
    var companyId = activeItem.attr('id');
}