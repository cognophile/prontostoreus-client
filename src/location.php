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
        <section>
            <nav id="navbar" class="navbar navbar-dark">
                <a id="navbar-title" class="navbar-brand" href="../index.php">
                    <img id="navbar-logo-image" src="../resources/img/prontostoreus.png" width="50" height="50" class="d-inline-block align-top" alt="">
                    <span id="navbar-title-text">Prontostoreus</span>
                </a>
            </nav>
        </section>
        
        <br><br>
    
        <section>
            <div id="data-entry" class="container-fluid form-group">
                <div id="location-container" class="container-fluid">
                    <label class="field-label-large d-flex justify-content-center" for="input-location">Please enter your postcode</label>
                    <input id="input-location" class="field-input-center form-control" name="postcode" type="text" placeholder="e.g. AB12 CDE">  
                    <br><br>
                </div> 
                <div class="row justify-content-center">
                    <span class="input-group-btn">
                        <button id="location-submission-btn" class="browse btn btn-primary">Find companies</button>
                    </span>
                </div>
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
