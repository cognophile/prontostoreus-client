$(document).ready(function () {
    $("#start-date-input").datepicker();
    $("#end-date-input").datepicker();

    addLine();
});

function mockComplete() {
    loadPage('confirmation.php?application=' + 2);
}

function showAddButton() {

}

function hideAddButton() {

}

function getFurnishingSize()
{
    var size = "25", majorUnit = "m", minorUnit = "2";
    return size + majorUnit + minorUnit.sup(); 
}

function calculateLinePrice() {
    var currency = "£", price = "13.50";
    return currency + price; 
}

function addLine() {
    var lineCounter = globalCounter;
    var applicationLineHtml = "<br><div class=\"row\">" + 
        "<div class=\"col\">" +
            "<label id=\"room-selector-label\" class=\"field-label\" for=\"room-selector\">Room</label>" +
            "<select id=\"room-selector-" + lineCounter + "\" class=\"form-control\" name=\"room\" required=\"true\">" +
                "<option value=\"1\">Living room</option>" +
                "<option value=\"2\">Kitchen</option>" +
                "<option value=\"3\">Bedroom</option>" +
                "<option value=\"4\">Bathroom</option>" +
                "<option value=\"5\">Garage</option>" +
            "</select>" +
        "</div>" +
        "<div class=\"col\">" +
            "<label id=\"furnishing-selector-label\" class=\"field-label\" for=\"furnishing-selector\">Furnishing</label>" +
            "<select id=\"furnishing-selector-$" + lineCounter + "\" class=\"form-control\" name=\"furnishing\" required=\"true\">" +
                "<option value=\"1\">TV</option>" +
                "<option value=\"2\">Stool</option>" +
                "<option value=\"3\">Bed</option>" +
                "<option value=\"4\">Sofa</option>" +
                "<option value=\"5\">Spade</option>" +
            "</select>" +
        "</div>" +

        "<div class=\"col\">" +
            "<label id=\"quantity-label\" class=\"field-label\" for=\"item-price-readonly\">Quantity</label>" +
            "<input id=\"quantity-input-" + lineCounter + "\" class=\"form-control\" type=\"text\" name=\"quantity\" required=\"true\">" +
        "</div>" +
        
        "<div class=\"col\">" +
            "<label id=\"size-readonly-label\" class=\"field-label\" for=\"size-readonly\">Size</label>" +
            "<p id=\"size-readonly-" + lineCounter + "\" class=\"form-control-static\" name=\"size\">" + getFurnishingSize() + "</p>" +
        "</div>" +
        
        "<div class=\"col\">" +
            "<label id=\"item-price-readonly-label\" class=\"field-label\" for=\"item-price-readonly\">Line Price</label>" +
            "<p id=\"item-price-readonly-" + lineCounter + "\" class=\"form-control-static\" name=\"price\">" + calculateLinePrice() + "</p>" +
        "</div>" +

        "<div class=\"col\">" +
            "<br>" +
            "<span class=\"input-group-btn\">" +
                "<a id=\"add-app-line-btn\" class=\"browse btn btn-primary\" onclick=\"addLine()\">+</a>" +
            "</span>" +
        "</div>" +
    "</div>";

    $('#data-entry').append(applicationLineHtml);
    lineCounter++;
}
