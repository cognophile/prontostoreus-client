$(document).keypress(function(ev){
    if (ev.which == 13){
        $("#location-submission-btn").click();
    }
});

function postLocation() {
    var userPostcode = $('#input-location').val();
    var message = "We need a postcode to search by! Please enter this into the box provided.";

    if (!validateField(userPostcode, message)) {
        return false;
    }

    $.post("apiMock.php", { location: userPostcode })
        .done(function(response) {
            var item = JSON.parse(response);
            addListItem(item);
        })
        .fail(function(error) {
            alert("Unable to post to server: " + error)
    });

    unhideElement('#company-list-label');
    unhideElement('#next-page-btn');
}

function validateField(input, message) {
    if (input == null || input == "") {
        alert(message);
        return false;
    }
    
    return true;
}

function addListItem(data) {
    $("#company-list").empty();

    data.forEach(function(data) {
            var itemHtml = "<a class='list-group-item list-group-item-action flex-column align-items-start' onclick='makeActiveListItem(this)'>" 
                            + "<div class='d-flex w-100 justify-content-between'> <h5 id='company-name' class='mb-1'>" + data.name + "</h5>"
                            + "<small id='company-postcode'>" + data.postcode + "</small></div> <p id='company-desc' class='mb-1'>" + data.description + "</p>" 
                            + "<small id='company-short'>" + data.short + "</small> </a>";

            $("#company-list").append(itemHtml);
        }  
    );
}

function unhideElement(elementId) { 
    $(elementId).css('visibility', 'visible');
}

function makeActiveListItem(elementId) {
    $('.active').removeClass('active');
    $(elementId).addClass("active");
}

function getChosenItem() {
    $('.active');
}