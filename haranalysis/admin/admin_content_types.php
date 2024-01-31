<?php

include 'connect.php';
//diaforetika content types
$sql_query = "select DISTINCT content_type as tipos from header_response";

$result = mysqli_query($con,$sql_query);

$option ="<select id = 'mycontent_type' name='mycontent_type[]' multiple>";
    if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		   
		   if($row['tipos']!="")
		   {
           $option .= '<option value = "'.$row['tipos'].'">'.$row['tipos'].'</option>';
		   }
    }
}

$option.="</select>";	
 

echo $option;





?>