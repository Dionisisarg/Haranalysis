<?php

include 'connect.php';
//diafoterika method types
$sql_query = "select DISTINCT method as methodos from request";
 
$result = mysqli_query($con,$sql_query);

$option ="<select id = 'mymethod_type' name = 'mymethod_type[]' multiple>";
    if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		   
		   if($row['methodos']!="")
		   {
           $option .= '<option value = "'.$row['methodos'].'">'.$row['methodos'].'</option>';
		   }
    }
}

$option.="</select>";	
 

echo $option;





?>