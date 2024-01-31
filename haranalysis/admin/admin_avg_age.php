<?php

include 'connect.php';
//gia kathe diaforetiko content type vriskoume to meso oro hlikias tou

$sql = "SELECT AVG(age) as mesos,content_type FROM header_response GROUP BY content_type HAVING  mesos >0";


$result = $con->query($sql);


if ($result->num_rows > 0) {
	
  echo "<table border='2'>";

   echo "<tr>";
   
   echo "<th>";
   
   echo "Content Type";
   echo "</th>";
   
   echo "<th>";
   echo "Average Age";
   echo "</th>";

   echo "</tr>";   
  while($row = $result->fetch_assoc()) 
  {
    echo "<tr>";
	
	echo "<td>";
	echo $row['content_type'];
	echo "</td>";
	
	echo "<td>";
	echo $row['mesos'];
	echo "</td>";
	echo "</tr>";
  
  }
  
    echo "</table>";

  
} else {
  echo "0 results";
}


?>