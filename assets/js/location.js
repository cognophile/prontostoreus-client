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

    $.post("apiMock.php", { location: userPostcode })
        .done(function(response) {
            var item = JSON.parse(response);
            addListItem(item);
        })
        .fail(function(error) {
            alert("Unable to post to server: " + error);
            return false;
    });

    updateLocationPageStructure();
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

function addListItem(data) {
    $("#company-list").empty();

    data.forEach(function(data) {
            data.postcode = data.postcode.replace(/-/g, ' ').toUpperCase();

            var itemHtml = "<a class='list-group-item list-group-item-action flex-column align-items-start' onclick='makeActiveListItem(this)'>" 
                            + "<div class='d-flex w-100 justify-content-between'> <h5 id='company-name' class='mb-1'>" + data.name + "</h5>"
                            + "<small id='company-postcode'>" + data.postcode + "</small></div> <p id='company-desc' class='mb-1'>" + data.description + "</p>" 
                            + "<small id='company-short'>" + data.short + "</small> </a>";

            $("#company-list").append(itemHtml);
        }  
    );
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
    $('.active');
}