<?php include '../assets/php/meta.php'; ?>

<!DOCTYPE html>
<html>
    <html lang="en">
        <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            
            <!-- Include Boostrap 4 CSS -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <!-- Include custom Prontostoreus CSS -->
            <link rel="stylesheet" type="text/css" href="../assets/css/styles.css"/>

            <!-- Include jQuery JS library -->
            <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
            <!-- Include Bootstrap 4 JS library -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <!-- Include Bootbox.js library  -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js"></script>

            <!-- Include jQuery UI widgets -->
            <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
            <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
            <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
            
            <!-- Include custom Prontostoreus JavaScript-->
            <script src="../assets/js/config.js"></script>
            <script src="../assets/js/application.js"></script>

            <title> Prontostoreus - Application </title>
	</head>

	<body>
        <section>
            <nav id="navbar" class="navbar navbar-dark fixed-top">
                <a id="navbar-title" class="navbar-brand" href="../index.php">
                    <img id="navbar-logo-image" src="../resources/img/prontostoreus.png" width="50" height="50" class="d-inline-block align-top" alt="">
                    <span id="navbar-title-text">Prontostoreus: Application</span>
                </a>
            </nav>
        </section>

        <section>
            <div id="data-entry" class="container-fluid form-group">
                <div class="row">
                    <div class="col">
                        <label id="start-date-label" class="field-label" for="start-date-input">Start Date</label>
                        <input id="start-date-input" class="form-control" type="text" name="startDate" required="true">
                    </div>

                    <div class="col">
                        <label id="end-date-label" class="field-label" for="end-date-input">End Date</label>
                        <input id="end-date-input" class="form-control" type="text" name="endDate" required="true">
                    </div>
        
                    <div class="col">
                        <label id="collection-label" class="field-label" for="collection-checkbox">Collection</label>                        
                        <input id="collection-checkbox" type="checkbox" name="collection" required="true">
                    </div>
                </div>

                <br><br><br>
                <div class="row">
                    <div class="col">
                        <label id="room-selector-label" class="field-label" for="room-selector">Room</label>
                        <select id="room-selector" class="form-control" name="room" required="true">
                            <option value="1">Living room</option>
                            <option value="2">Kitchen</option>
                            <option value="3">Bedroom</option>
                            <option value="4">Bathroom</option>
                            <option value="5">Garage</option>
                        </select>
                    </div>
                    <div class="col">
                        <label id="furnishing-selector-label" class="field-label" for="furnishing-selector">Furnishing</label>
                        <select id="furnishing-selector" class="form-control" name="furnishing" required="true">
                            <option value="1">TV</option>
                            <option value="2">Stool</option>
                            <option value="3">Bed</option>
                            <option value="4">Sofa</option>
                            <option value="5">Spade</option>
                        </select>
                    </div>

                    <div class="col">
                        <label id="quantity-label" class="field-label" for="item-price-readonly">Quantity</label>
                        <input id="quantity-input" class="form-control" type="text" name="quantity" required="true">
                    </div>
                    
                    <div class="col">
                        <label id="size-readonly-label" class="field-label" for="size-readonly">Size</label>
                        <p id="size-readonly" class="form-control-static" name="size">25m2</p>
                    </div>
                    
                    <div class="col">
                        <label id="item-price-readonly-label" class="field-label" for="item-price-readonly">Line Price</label>
                        <p id="item-price-readonly" class="form-control-static" name="price">£13.50</p>
                    </div>

                    <div class="col">
                        <span class="input-group-btn">
                            <a id="next-page-btn-visible-wide" class="browse btn btn-primary" onclick="addLine()">+</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
        
        <br><br><br>
        <section>
            <div id="meta-bottom-navbar" class="row justify-content-center">
                <div id="bottom-btn-navbar" class="row">
                    <div class="col-md-6">
                        <div class="col-md-12 justify-content-center d-flex">
                            <span class="input-group-btn">
                                <a id="next-page-btn-visible-wide" class="browse btn btn-primary" href="javascript:history.back()">Back</a>
                            </span>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="col-md-12 justify-content-center d-flex">
                            <span class="input-group-btn">
                                <a id="next-page-btn-visible-wide" class="browse btn btn-primary" onclick="">Next</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
    
    <!--Copyright-->
    <nav id="main-footer" class="navbar fixed-bottom navbar-light bg-light">
        <div id="main-footer-content" class="navbar-brand container">
            <p id="main-footer-content">Version <?= getVersion(); ?> <br>© <?= getCopyright(); ?></p>
        </div>
    </nav>
</html>
