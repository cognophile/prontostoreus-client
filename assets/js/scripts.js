function addListItem() {
    var companyName = "Company Name";
    var companyPostcode = "AB12 CDE";
    var companyDescription = "Description about the company.";
    var companySecondaryDescription = "Notice: Full";

    var item = "<a class='list-group-item list-group-item-action flex-column align-items-start' onclick='makeActiveListItem(this)'>" 
                + "<div class='d-flex w-100 justify-content-between'> <h5 class='mb-1'>" + companyName + "</h5>"
                + "<small>" + companyPostcode + "</small></div> <p class='mb-1'>" + companyDescription + "</p>" 
                + "<small>" + companySecondaryDescription + "</small> </a>";
    
    $("#company-list").append(item);
}

function makeActiveListItem(elementId) {
    $('.active').removeClass('active');
    $(elementId).addClass("active");
}

function getChosenItem() {
    return $('.active');
}