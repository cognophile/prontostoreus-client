$(document).ready(function () {
    $("#start-date-input").datepicker();
    $("#end-date-input").datepicker();

    addLine();
});

function showAddButton() {

}

function hideAddButton() {

}


function calculateLinePrice() {

}

function addLine() {
    var applicationLineHtml = "<br><div class=\"row\">" + 
        "<div class=\"col\">" +
            "<label id=\"room-selector-label\" class=\"field-label\" for=\"room-selector\">Room</label>" +
            "<select id=\"room-selector\" class=\"form-control\" name=\"room\" required=\"true\">" +
                "<option value=\"1\">Living room</option>" +
                "<option value=\"2\">Kitchen</option>" +
                "<option value=\"3\">Bedroom</option>" +
                "<option value=\"4\">Bathroom</option>" +
                "<option value=\"5\">Garage</option>" +
            "</select>" +
        "</div>" +
        "<div class=\"col\">" +
            "<label id=\"furnishing-selector-label\" class=\"field-label\" for=\"furnishing-selector\">Furnishing</label>" +
            "<select id=\"furnishing-selector\" class=\"form-control\" name=\"furnishing\" required=\"true\">" +
                "<option value=\"1\">TV</option>" +
                "<option value=\"2\">Stool</option>" +
                "<option value=\"3\">Bed</option>" +
                "<option value=\"4\">Sofa</option>" +
                "<option value=\"5\">Spade</option>" +
            "</select>" +
        "</div>" +

        "<div class=\"col\">" +
            "<label id=\"quantity-label\" class=\"field-label\" for=\"item-price-readonly\">Quantity</label>" +
            "<input id=\"quantity-input\" class=\"form-control\" type=\"text\" name=\"quantity\" required=\"true\">" +
        "</div>" +
        
        "<div class=\"col\">" +
            "<label id=\"size-readonly-label\" class=\"field-label\" for=\"size-readonly\">Size</label>" +
            "<p id=\"size-readonly\" class=\"form-control-static\" name=\"size\">25m2</p>" +
        "</div>" +
        
        "<div class=\"col\">" +
            "<label id=\"item-price-readonly-label\" class=\"field-label\" for=\"item-price-readonly\">Line Price</label>" +
            "<p id=\"item-price-readonly\" class=\"form-control-static\" name=\"price\">£13.50</p>" +
        "</div>" +

        "<div class=\"col\">" +
            "<br>" +
            "<span class=\"input-group-btn\">" +
                "<a id=\"add-app-line-btn\" class=\"browse btn btn-primary\" onclick=\"addLine()\">+</a>" +
            "</span>" +
        "</div>" +
    "</div>";

    $('#data-entry').append(applicationLineHtml);
}
