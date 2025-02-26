<?php include 'assets/php/meta.php'; ?>

<!DOCTYPE html>
<html>
    <html lang="en">
        <head>
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
            <script src="../assets/js/home.js"></script>

            <title> Prontostoreus - Welcome! </title>
	</head>
	<body>
        <nav id="navbar" class="navbar navbar-dark fixed-top">
            <a id="nav-title" class="navbar-brand" href="index.php">
                <img id="navbar-logo-image" src="resources/img/prontostoreus.png" width="50" height="50" class="d-inline-block align-top" alt="Hi!">
                <span id="navbar-title-text">Prontostoreus</span>
            </a>
        </nav>
        <br><br>
        <h1 id="home-title">Prontostoreus</h1>
        <h2 id="home-tagline">The self-service self-storage booking system</h2>

        <div id="logo-container" class="container-fluid">
            <div class="row justify-content-center">
                <img id="main-navbar-logo-image" src="resources/img/prontostoreus.png" width="500" height="500" class="d-inline-block align-center" alt="">
            </div>
        </div>
        <br><br><br>
        <div id="start-app-container" class="container-fluid">
            <div class="row justify-content-center">
                <span class="start-app-btn">
                    <a id="start-app-btn" class="browse btn btn-primary" onclick="launch()">Start Application</a>
                </span>
            </div>
        </div>
    </body>
        
    <!--Copyright-->
    <nav id="main-footer" class="navbar fixed-bottom navbar-light bg-light">
        <div id="main-footer-content" class="navbar-brand container">
            <p id="main-footer-content">Version <?= getVersion(); ?> <br>© <?= getCopyright(); ?></p>
        </div>
    </nav>
</html>
