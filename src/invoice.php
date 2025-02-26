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
            <script src="../assets/js/invoice.js"></script>

            <title> Prontostoreus - Invoice </title>
	</head>

	<body>
        <section>
            <nav id="navbar" class="navbar navbar-dark fixed-top">
                <a id="navbar-title" class="navbar-brand" href="../index.php">
                    <img id="navbar-logo-image" src="../resources/img/prontostoreus.png" width="50" height="50" class="d-inline-block align-top" alt="">
                    <span id="navbar-title-text">Prontostoreus: Invoice</span>
                </a>
            </nav>
        </section>

        <section>
            <div id="data-entry" class="container-fluid form-group">
                <div class="justify-content-center">
                    <div>
                        <label class="field-label-large-center">Thank you for your application!</label>
                    </div>
                    <div>
                        <label class="field-label-center">We'll submit this to your chosen company and pass on your contact details. Below, you'll find a summary of your application. A PDF copy is available via the 'Download' button.
                        We'll update you on progress via email from here on. If you need to contact the company, you can find their details below. Please note your selected company will contact you within 3 days of this 
                        invoices date of issue to arrange the collection or delivery of your belongings to their facility, and to take payment.</p>
                    </div>
                </div>
                <br>
                <div id="invoice-data" class="row justify-content-center">
                    <div id="inline-sections" class="row">
                        <div class="col-md-6">
                            <div class="col-md-12 justify-content-center d-flex">
                                <div id="customer-details">
                                    <p id="customer-name"></p>
                                    <p id="customer-address-line-one"></p>
                                    <p id="customer-address-line-two"></p>
                                    <p id="customer-address-town"></p>
                                    <p id="customer-address-county"></p>
                                    <p id="customer-address-postcode"></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="col-md-12 justify-content-center d-flex">
                                <div id="company-details">
                                    <p id="company-name"></p>
                                    <p id="company-address-line-one"></p>
                                    <p id="company-address-line-two"></p>
                                    <p id="company-address-town"></p>
                                    <p id="company-address-county"></p>
                                    <p id="company-address-postcode"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Ref</th>
                            <th scope="col">Submission Date</th>
                            <th scope="col">Invoice Issued</th>
                            <th scope="col">Payment Due</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Method</th>
                            <th scope="col">Terms and Conditions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row" id="invoice-ref"></th>
                            <td id="invoice-submission-date"></td>
                            <td id="invoice-issued-date"></td>
                            <td id="invoice-payment-due-date"></td>
                            <td id="invoice-start-date"></td>
                            <td id="invoice-end-date"></td>
                            <td id="invoice-method"></td>
                            <td id="invoice-terms"></td>
                        </tr>
                    </tbody>
                </table>

                <br><br>
                
                <table id="invoice-lines-table" class="table">
                    <thead class="thead-light">
                        <tr>
                        <th scope="col">Line</th>
                            <th>Room</th>
                            <th>Furnishing</th>
                            <th>Item Cost</th>
                            <th>Quantity</th>
                            <th>Line Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <div class="col-md-12">
                    <div class="col-md-12 justify-content-end d-flex">
                        <div id="application-details">
                            <label id="invoice-total-cost" class="field-label-large">Total: </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br><br>
        <section>
            <div id="meta-bottom-navbar" class="row justify-content-center">
                <div id="bottom-btn-navbar" class="row">
                    <div class="col-md-6">
                        <div class="col-md-12 justify-content-center d-flex">
                            <span class="input-group-btn">
                                <a id="next-page-btn-visible-wide" class="browse btn btn-primary" onclick="javascript:window.print()">Print</a>
                            </span>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="col-md-12 justify-content-center d-flex">
                            <span class="input-group-btn">
                                <a id="next-page-btn-visible-wide" class="browse btn btn-primary" onclick="getInvoicePdf()">Download</a>
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
