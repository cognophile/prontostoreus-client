
$(document).keypress(function(ev) {
    if (ev.which == 13) {
        $("#location-submission-btn").click();
    }
});

function validateLocation() {
    var userPostcode = $('#input-location').val();

    if (!validateField(userPostcode)) {
        notify('You missed a bit!', 'We need a postcode to search by. Please enter this into the box.');
        return false;
    }
    else {
        getLocations(userPostcode);
    }
}

function validateField(inputField) {
    if (inputField == null || inputField == "") {
        return false;
    }
    
    return true;
}

function getLocations(userPostcode) {
    
    userPostcode = userPostcode.replace(/\s+/g, '-').toUpperCase();

    $.get(baseApi + locationEndpoint + userPostcode)
        .done(function(response) {
            addListItem(response);
        })
        .fail(function(error) {
            notify('Server error!', 'Unable to communicate with the server: ' + error);
            return false;
    });
}

function updateLocationPageStructure() {
    updateVisibility('#company-list-label', 'block', 'visible');
    updateVisibility('#next-page-btn', 'block', 'visible');
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
        notify('Oops!', response.error);
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
    var elementId = activeItem.attr('id');

    if (activeItem.length > 0) {
        var companyId = elementId.split('-').slice(2).join('-');
        window.location.href = 'customer.php?company=' + companyId;
    } 
    else {
        notify('Oops!', 'It appears you might not have selected a company - please click one, then click \'next\' again.');
    }
}