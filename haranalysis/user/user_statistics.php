<?php

session_start();

include 'connect.php';


$username = $_SESSION["username"];
//enwsi pinaka entry kai header_response
//gia kathe diaforetiko latlng,krataw to plithos twn eggrafwn
$sql = "SELECT COUNT(*) as plithos, entry.server_latlng as slatlng FROM entry inner join header_response on entry.id = header_response.id_entry WHERE entry.server_latlng<>''AND entry.username='$username' and (header_response.content_type LIKE '%html%' or header_response.content_type LIKE '%php' or header_response.content_type LIKE '%jsp%' or header_response.content_type LIKE '%asp%')  GROUP BY entry.server_latlng";


$result = $con->query($sql);

$final_array = array();

if ($result->num_rows > 0) {


while($row = $result->fetch_assoc()) 
		{
          $temp_array = array();
		  //spaw to latlng se 2 kommatia
		  $my_array = explode(',', $row["slatlng"]);
           
		  //lat
		  array_push($temp_array,floatval($my_array[0]));
		  //lng
		  array_push($temp_array,floatval($my_array[1]));
          //plithos eggrafwn
          array_push($temp_array,intval($row["plithos"]));

          
		   array_push($final_array,$temp_array);


		}


}

echo json_encode($final_array);


?>