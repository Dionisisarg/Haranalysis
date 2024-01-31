<html>

<head>
<link rel="stylesheet" href="mystyle.css">

</head>

<?php

session_start();

if($_SESSION["valid"]!=2)
	
	{
			header("Location: user_login.php");		
	}

header("Location: user_map.php");		


?>

</html>