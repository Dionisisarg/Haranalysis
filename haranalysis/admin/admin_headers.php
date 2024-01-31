<html>

<?php

session_start();


if($_SESSION["valid"]!=1)
	
	{
	
		header("Location: admin_login.php");	

		
	}	
		


?>
<head>
<link rel="stylesheet" href="mystyle.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script src = "headers.js"> </script>

</head>


<?php include 'menu_admin.php'; ?>

<table>

<tr>
<td>
<div id="result"> </div>

</td>
<td>

<div id="stale_fresh"> </div>

<br>

<div id="cacheability"> </div>


<br>
<br>
<br>
<br>
Select Content Type:
<div id ="content_type"> </div>
<br>
<br>
Select ISP:
<div id ="isp"> </div>
<br>
<br>
<input type = "submit" name = "filter_button" id = "filter_button"  value = "Filter">

<br>
<br>


<br>
<br>

<div id="filtered_result"> </div>

<br>
<div id="cache_filtered"> </div>
<br>

<div id="stale_fresh_filtered"> </div>

<br>



</td>
</tr>
</table>

</html>