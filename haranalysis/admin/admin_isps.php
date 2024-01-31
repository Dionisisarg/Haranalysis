<?php

include 'connect.php';
//diaforetika isps
$sql_query = "select DISTINCT isp as paroxos from entry";

$result = mysqli_query($con,$sql_query);

$option ="<select id = 'myisp' name='myisp[]' multiple>";
    if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		   
		   if($row['paroxos']!="")
		   {
           $option .= '<option value = "'.$row['paroxos'].'">'.$row['paroxos'].'</option>';
		   }
    }
}

$option.="</select>";	
 

echo $option;





?>