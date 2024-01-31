<html>

<head>
<link rel="stylesheet" href="mystyle.css">


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js'></script>


<script src = "timings.js"> </script>


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
<br>

<table>

<tr>
<td>
Select Content Type: 
<br>
<div id = "content_type"> </div>

<br>
<br>

Select Day:
<br>

<select  id="day" multiple>
  <option value="Monday">Monday</option>
  <option value="Tuesday">Tuesday</option>
  <option value="Wednesday">Wednesday</option>
  <option value="Thursday">Thursday</option>
  <option value="Friday">Friday</option>
  <option value="Saturday">Saturday</option>
  <option value="Sunday">Sunday</option>


  
</select>

<br>

<br>

Select Method Type:
<br>
<div id = "method_type"> </div>

<br>
<br>


Select ISP:
<br>

<div id = "isp"> </div>

<br>
<br>

<input type = "submit" name = "filter_button" id = "filter_button"  value = "Filter">

<br>
<br>

<div id = "filtered_result"> </div>

<div id = "result"> </div>

</td>

<td>

<canvas id="histogram" width="50" height="20"></canvas>

</td>

</tr>

</table>

</html>