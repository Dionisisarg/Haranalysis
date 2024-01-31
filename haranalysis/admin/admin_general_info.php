<html>

<head>
<link rel="stylesheet" href="mystyle.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script src = "general_info.js"> </script>

</head>

<?php

session_start();


if($_SESSION["valid"]!=1)
	
	{
	
		header("Location: admin_login.php");	

		
	}	
		

include 'menu_admin.php';
?>


<br>


<h3>Number of Users:</h3>
<br>
<div id="div1">   </div>
<br>
<br>

<h3>Method Type Statistics:</h3>
<br>
<div id="div2">   </div>
<br>
<br>

<h3>Status Response Statistics:</h3>
<br>
<div id="div3">   </div>
<br>
<br>
<h3>Domains:</h3>
<br>
<div id="div4">   </div>
<br>
<br>
<h3>ISPs:</h3>
<br>
<div id="div5">   </div>
<br>
<br>
<h3>Avg Age For Every Content type:</h3>

<div id="div6">   </div>






</html>