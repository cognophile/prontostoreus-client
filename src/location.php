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
            
            <!-- Include custom Prontostoreus JavaScript-->
            <script src="../config/bootstrap.js"></script>
            <script src="../assets/js/location.js"></script>

            <title> Prontostoreus - Location </title>
	</head>
	<body>
        <section>
            <nav id="navbar" class="navbar navbar-dark fixed-top">
                <a id="navbar-title" class="navbar-brand" href="../index.php">
                    <img id="navbar-logo-image" src="../resources/img/prontostoreus.png" width="50" height="50" class="d-inline-block align-top" alt="">
                    <span id="navbar-title-text">Prontostoreus: Locate a Company</span>
                </a>
            </nav>
        </section>
            
        <section>
            <div id="data-entry" class="container-fluid form-group">
                <div id="location-container" class="container-fluid">
                    <label class="field-label-large d-flex justify-content-center" for="input-location">Please enter your postcode</label>
                    <input id="input-location" class="field-input-center form-control" name="postcode" type="text" maxlength="8" placeholder="e.g. AB12 3DE">  
                </div> 
                <br><br>
                <div class="row justify-content-center">
                    <span class="input-group-btn">
                        <button id="location-submission-btn" class="browse btn btn-primary" onclick="validateLocation()">Search</button>
                    </span>
                </div>
            </div>
        </section>

        <br><br>

        <section>
            <div id="location-container" class="container-fluid">
                    <label id="company-list-label" class="field-label-large d-flex justify-content-center" for="company-list">Select a company</label>
            </div>
            <div id="company-list" class="list-group"></div>
        </section>

        <br><br>

        <section>
            <div id="bottom-btn-navbar" class="row">
                <div class="col-12 justify-content-end d-flex">
                    <span class="input-group-btn">
                        <a id="next-page-btn" class="browse btn btn-primary" onclick="getChosenCompany()">Continue</a>
                    </span>
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
	</body>
</html>
