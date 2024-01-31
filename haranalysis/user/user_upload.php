<html>

<head>

<link rel="stylesheet" href="mystyle.css">


</head>
    <script src= 
"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> 
    </script> 

<?php

session_start();

if($_SESSION["valid"]!=2)
	
	{
			header("Location: ../index.php");		
	}


include 'menu_user.php';

?>



<br>

<br>

<input type="file" id="selectFiles" value="Import" /><br />
<button id="import">Filter Data</button>
<br>
<br>


<form id="write_to_file" method="post" action = "write_file.php">
<input type = "text" name ="filtered" id = "filtered" hidden>
<br>
<input type ="submit" value = "Write Filtered Data to File">
</form>

<br>
<br>


<form id = "upload_to_database" action ="upload_to_database.php" method = "post">

<input type = "text" name = "filtered" id = "filtered" hidden>

<input type = "text" name ="myip" id="myip" hidden>

<input type = "submit" value = "Upload Filtered Data to Database">
</form>


<script src = "filter.js"> </script>


<div id ="epiloges"> </div>
<br>
<br>


</html>