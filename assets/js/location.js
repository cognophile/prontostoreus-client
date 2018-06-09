/**
 * Add a keypress event listener to the 'Enter' key
 *  to fire the form validation method. 
 */
$(document).keypress(function(ev) {
    if (ev.which == 13) {
        $("#location-submission-btn").click();
    }
});

/**
 *  Perform validation of the customer form before calling to post 
 *  the form data to the API.
 */
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

/**
 * Validate a specific field is not null or an empty string
 * @param {*} inputField 
 * @return {boolean}
 */
function validateField(inputField) {
    if (inputField == null || inputField == "") {
        return false;
    }
    
    return true;
}

/**
 * Perform an AJAX GET to the API with the user postcode appended
 * @param {string} userPostcode
 * @return {void | boolean}
 */
function getLocations(userPostcode) {
    postcode = userPostcode.replace(/\s+/g, '-').toUpperCase();

    $.get(baseApi + locationEndpoint + postcode)
        .done(function(response) {
            addListItem(response);
        })
        .fail(function(error) {
            notify('Server error!', 'Unable to communicate with the server: ' + error);
            return false;
    });
}

/** 
 * Updates the visibility of the hidden page features for
 *  displaying the list of companies in the API response and 
 *  the forms navigational buttons
 * @return {void}
 */
function updateLocationPageStructure() {
    updateVisibility('#company-list-label', 'block', 'visible');
    updateVisibility('#next-page-btn', 'block', 'visible');
}

/**
 * Create and render the list containing all companies given
 *  in the API response. Notify if errors found in response
 * @param {object} response 
 * @return {void}
 */
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

/**
 * Update the visibility and display styling of a given element
 * @param {string} elementId 
 * @param {string} dispValue 
 * @param {string} visValue
 * @return {void} 
 */
function updateVisibility(elementId, dispValue, visValue) { 
    $(elementId).css('display', dispValue);
    $(elementId).css('visibility', visValue);
}

/**
 * Remove the active class if found on an element in the DOM before
 *  adding it to the given element, making it highlighted.
 * @param {*} elementId 
 * @return {void}
 */
function makeActiveListItem(elementId) {
    $('.active').removeClass('active');
    $(elementId).addClass("active");
}

/**
 * Fetch the identifying number from the user-selected company in the listing
 * @return {void}
 */
function getChosenCompany() {
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