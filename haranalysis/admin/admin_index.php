<html>

<head>

<link rel="stylesheet" href="mystyle.css">

</head>

<?php

session_start();


if($_SESSION["valid"]!=1)
	
	{
	
		header("Location: admin_login.php");	

		
	}

header("Location: admin_general_info.php");	
	
?>



</html>