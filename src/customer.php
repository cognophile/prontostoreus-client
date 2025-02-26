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
            <script src="../config/bootstrap.js"></script>
            <script src="../assets/js/customer.js"></script>

            <title> Prontostoreus - Customer </title>
	</head>

	<body>
        <section>
            <nav id="navbar" class="navbar navbar-dark fixed-top">
                <a id="navbar-title" class="navbar-brand" href="../index.php">
                    <img id="navbar-logo-image" src="../resources/img/prontostoreus.png" width="50" height="50" class="d-inline-block align-top" alt="">
                    <span id="navbar-title-text">Prontostoreus: Customer Details</span>
                </a>
            </nav>
        </section>

        <section>
            <div id="data-entry" class="container-fluid form-group">
                <label class="field-label-large-nopad d-flex justify-content-center" for="input-location">Who are you?</label>

                <div class="row">
                    <div class="col">
                        <label id="title-label" class="field-label-large" for="title-selector">Title</label>
                        <select id="title-selector" class="form-control" required="true">
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Mx">Mx</option>
                            <option value="Dr">Dr</option>
                            <option value="Prof">Prof</option>
                        </select>
                    </div>
                    
                    <br>
        
                    <div class="col">
                        <label id="dob-label" class="field-label-large" for="dob-input">Date of birth</label>
                        <input id="dob-input" class="form-control" type="text" name="dob" required="true">
                    </div>
                </div>
        
                <div class="row">
                    <div class="col">
                        <label id="firstname-label" class="field-label-large" for="firstname-input">Firstname</label>
                        <input id="firstname-input" class="form-control" type="text" name="firstname" maxlength="128" placeholder="e.g. Isaac" required="true">
                    </div>
        
                    <div class="col">
                        <label id="surname-label" class="field-label-large" for="surname-input">Surname</label>
                        <input id="surname-input" class="form-control" type="text" name="surname" maxlength="128" placeholder="e.g. Newton" required="true">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label id="email-label" class="field-label-large" for="email-input">Email</label>
                        <input id="email-input" class="form-control" type="text" name="email" maxlength="128" placeholder="e.g. isaac-newton@cambridge.co.uk" required="true">
                    </div>
        
                    <div class="col">
                        <label id="telephone-label" class="field-label-large" for="telephone-input">Telephone</label>
                        <input id="telephone-input" class="form-control" type="text" name="telephone" maxlength="11" placeholder="e.g. 01234 567891" required="true">
                    </div>
                </div>

                <br><br><br>

                <label class="field-label-large-nopad d-flex justify-content-center" for="input-location">What's your address?</label>
                <div class="row">
                    <div class="col">
                        <label id="address-line-one-label" class="field-label-large" for="address-line-one-input">First line</label>
                        <input id="address-line-one-input" class="form-control" name="line-one" type="text" maxlength="128" placeholder="e.g. Woolsthorpe Manor House" required="true">
                    </div>
        
                    <div class="col">
                        <label id="address-line-two-label" class="field-label-large" for="address-line-two-input">Second line</label>
                        <input id="address-line-two-input" class="form-control" name="line-two" type="text" maxlength="128" placeholder="e.g. Water lane">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label id="town-label" class="field-label-large" for="town-input">Town/City</label>
                        <input id="town-input" class="form-control" type="text" name="town" maxlength="128" placeholder="e.g. Grantham" required="true">
                    </div>
        
                    <div class="col">
                        <label id="county-label" class="field-label-large" for="county-input">County</label>
                        <input id="county-input" class="form-control" type="text" name="county" maxlength="128" placeholder="e.g. Lincolnshire" required="true">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label id="postcode-label" class="field-label-large" or="postcode-input">Postcode</label>
                        <input id="postcode-input" class="form-control" name="postcode" type="text" maxlength="8" placeholder="e.g. NG33 5NR" required="true"> 
                    </div>
                </div>
            </div>
        </section>
        
        <br>

        <section>
            <div id="meta-bottom-navbar" class="row justify-content-center">
                <div id="bottom-btn-navbar" class="row">
                    <div class="col-md-6">
                        <div class="col-md-12 justify-content-center d-flex">
                            <span class="input-group-btn">
                                <a id="next-page-btn-visible-wide" class="browse btn btn-primary" href="javascript:history.back()">Previous</a>
                            </span>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="col-md-12 justify-content-center d-flex">
                            <span class="input-group-btn">
                                <a id="next-page-btn-visible-wide" class="browse btn btn-primary" onclick="validateCustomerForm()">Continue</a>
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
