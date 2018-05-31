<?php include '../assets/php/meta.php'; ?>

<!DOCTYPE html>
<html>
    <html lang="en">
        <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="../assets/css/styles.css"/>

            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

            <title> Prontostoreus - Welcome! </title>
	</head>
	<body>
        <nav id="navbar" class="navbar navbar-dark">
            <a id="navbar-title" class="navbar-brand" href="../index.php">
                <img id="navbar-logo-image" src="../resources/img/prontostoreus.png" width="50" height="50" class="d-inline-block align-top" alt="">
                <span id="navbar-title-text">Prontostoreus</span>
            </a>
        </nav>
        
        <br><br>
    
        <form action="generateVouchers.php" method="POST" enctype="multipart/form-data" id="uploadForm">
        <div id="dataEntry" class="container-fluid form-group">
            
            <div class="row">
                <div class="col">
                    <label id="form-programme-code-label" for="form-programme-code-input">Programme Code</label>
                    <input id="form-programme-code-input" class="form-control" name="programmeCode" type="text" placeholder="e.g. ABC" required="true">
                </div>
            <br>
    
                <div class="col">
                <label id="form-month-selector-label" for="form-month-selector-input">Report Month</label>
                <select id="form-month-selector-input" class="form-control" name="month" form="uploadForm" required="true">
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option> 
                </select>
    
                <br>
                </div>
            </div>
    
            <div class="row">
            <div class="col">
                <label id="form-authorised-by-label" for="form-authorised-by-input">Authorised By</label>
                <input id="form-authorised-by-input" class="form-control" type="text" name="authorisedBy" 
                        placeholder="e.g. Isaac Newton" required="true">
            </div>
    
            <div class="col">
                <label id="form-year-run-label" for="form-year-run-input">Year to Run</label>
                <input id="form-year-run-input" class="form-control" name="year" type="text" placeholder="e.g. 2018" required="true">
            </div>
            <br> 
            </div>
    
            <br>
            <div class="row">
            <div class="col">
                <label id="form-exchange-rate-label" for="form-exchange-rate-input">Exchange Rate</label>
                <input id="form-exchange-rate-input" class="form-control" name="exrate" type="text" 
                        onfocus="renderPopover(this.id, 'Information', 'This represents the GBP to USD value')" placeholder="e.g. 1.2345" required="true"> 
            </div>
            </div>
        </div>
            
    
            <br>
            <div class="container-fluid">
            <div class="row justify-content-center">
                <label id="form-browse-file-btn" class="browse btn btn-primary">Browse
                <input id="form-file-upload-control" class="form-control-file" name="<?= REPORT ?>" type="file" 
                        hidden accept=".xlsx" required="true">  
                </label>
            </div>
            </div>
    
            <div class="container-fluid">
            <div class="row justify-content-center">
                <div id="form-uploaded-filename"></div>
                </div>
            </div>
            </div>
        
        <div id="submissionButtonContainer" class="container-fluid">
            <div class="row justify-content-center">
                <span class="input-group-btn">
                    <button id="form-submission-btn" class="browse btn btn-primary" form="uploadForm" type="submit" required="true">Create Vouchers</button>
                </span>
            </div>
        </div>

        <section>
            <div class="row justify-content-center">
                <span class="input-group-btn">
                    <a id="next-page-btn" class="browse btn btn-primary" href="location.php">Back</a>
                </span>
            </div>
        </section>

        <section>
            <div class="row justify-content-center">
                <span class="input-group-btn">
                    <a id="next-page-btn" class="browse btn btn-primary" href="x.php">Next</a>
                </span>
            </div>
        </section>
    
        </form>    
        </body>
    
        <!--Copyright-->
        <footer id="main-footer" class="footer footer-bottom">
            <div id="main-footer-content" class="container">
                <p class="text-center">
                Version <?= getVersion(); ?> <br>
                © <?= getCopyright(); ?>
                </p>
            </div>
        </footer>
                
	</body>
</html>
