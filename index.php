<?php
?>
<!doctype html>
<html class="no-js" lang="sl" ng-app="typingTutor">
<!-- https://github.com/h5bp/html5-boilerplate/blob/5.2.0/dist/doc/html.md -->
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>Typing Tutor</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="apple-touch-icon" href="apple-touch-icon.png">
	<link type="image/png" rel="icon" href="favikona_typingTutor.png" />
	<!-- Place favicon.ico in the root directory -->

	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/dodatno.css">
	<!--<link rel="stylesheet" href="css/vendor/bootstrap-slider.min.css">-->
	<link href="css/simple-sidebar.css" rel="stylesheet">

	<script src="js/vendor/modernizr-2.8.3.min.js"></script>
	<link href="css/vendor/animate.css" rel="stylesheet">
	<!-- BOOTSTRAP iz http://getbootstrap.com/2.3.2/ downloadan na disk, nove verzije krneki (zato zakomentirane) -->
	<link href="css/vendor/bootstrap.min.css" rel="stylesheet">
	<!-- <link href="css/vendor/najnovejsi/bootstrap-theme.min.css" rel="stylesheet"> -->
	<!-- <link href="css/vendor/bootstrap-responsive.min.css" rel="stylesheet"> -->
</head>
<!-- nad povrsino aplikacije v FF in Chrome:
- grabanje teksta ni mogoce
- cursor je povsod DEFAULT, razen nad linki pointer
- desni klik onemogocen -->
<body style="cursor: default;" class="neDaSeIzbratiTeksta" oncontextmenu="return false;">
	<!--[if lt IE 8]>
	<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->

	<!-- Add your site or application content here -->
	<div id="vsebina" zaznaj-resize ui-view></div>

	<!-- jquery mora biti loadan pred angularjem, da delujejo keypress eventi -->
	<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>
    <script src="js/vendor/smoothie.js"></script>
    <script src="js/vendor/x2js.min.js"></script>


	<!-- za webcam -->
    <script src="js/vendor/adapter.js"></script>


	<!-- angularjs najnovejsa stable na voljo 1.5 -->
	<script src="js/vendor/angular.min.js"></script>


	<!-- navaden router -->
	<!-- <script src="js/vendor/angular-route.min.js"></script> -->


	<!-- stateful router iz http://angular-ui.github.io/ui-router/release/angular-ui-router.min.js -->
	<script src="js/vendor/angular-ui-router.min.js"></script>

	<!-- animate.css ga rabi za ene Out animacije - dont know why -->
	<script src="js/vendor/angular-animate.min.js"></script>

	<script src="js/vendor/angular-cookies.min.js"></script>
	<script src="js/vendor/angular-translate.min.js"></script>
	<!-- iz https://angular-ui.github.io/bootstrap/ -->
	<script src="js/vendor/ui-bootstrap-tpls-1.1.2.min.js"></script>

	<!-- skripte za porihtan zvok https://github.com/goldfire/howler.js -->
	<script src="js/vendor/howler.min.js"></script>

	<script src="js/app.js"></script>
	<script src="js/services/asynchronousCalls.service.js"></script>
	<script src="js/services/audio.service.js"></script>

	<script src="js/services/parsing.service.js"></script>

	<script src="js/controllers/menu.controller.js"></script>

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
        /*(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='https://www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('create','UA-XXXXX-X','auto');ga('send','pageview');*/
    </script>

</body>
</html>
