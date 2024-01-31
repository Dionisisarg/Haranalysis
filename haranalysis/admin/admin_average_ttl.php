<?php

include 'connect.php';

$distinct_con_types = array();

//athroisma ttls
$athroisma = array();

//plithos ttls
$plithos = array();

$ttls_from_database = array();

$content_types_from_db = array();

//pairnoume ta diaforetika content types pou den einai kena
$sql_cache_distinct = "SELECT DISTINCT content_type as mytype FROM header_response WHERE content_type<>''";

$result2 = $con->query($sql_cache_distinct);

while($row2 = $result2->fetch_assoc()) {
	
	array_push($distinct_con_types,$row2['mytype']);
	
}

for($i=0;$i<count($distinct_con_types);$i++)
	
	{
		array_push($athroisma,0);
		array_push($plithos,0);
		
	}
//pairnoume to max age apo to header_response
$sql_cache = "SELECT cache_control, content_type from header_response where cache_control like '%max-age%'";

$result = $con->query($sql_cache);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $cache_control = $row['cache_control'];
	
	$token = strtok($cache_control, ",");

	while ($token !== false)
		{
		
		if (strpos($token, 'max-age') !== false) { 
			
			$token_age = strtok($token,"=");
			
			$token_age = strtok("=");	
			
			array_push($ttls_from_database,intval($token_age));
						
			array_push($content_types_from_db,$row['content_type']);
			
					}
		
				
		$token = strtok(",");
	
	    }
} 

}

else {
  echo "No results found";
}

for($i=0;$i<count($distinct_con_types);$i++)

{   //gia kathe content type pou exei ttl
	for($j=0;$j<count($content_types_from_db);$j++)
		
		{
			if($distinct_con_types[$i] == $content_types_from_db[$j])
				
				{
					$athroisma[$i] = $athroisma[$i] + $ttls_from_database[$j];
					
					$plithos[$i]++;
					
				}
						
		}
	
}

$average_ttls = array();


for($i=0;$i<count($distinct_con_types);$i++)
	
	{
		
		if($plithos[$i]!=0)
		
		{
		
		array_push($average_ttls, $athroisma[$i] / $plithos[$i]);
		
		}
		
		else
		{
			
			array_push($average_ttls,0);
		}
		
	}

echo "<table border='2'>";

echo "<tr>";

echo "<th>";
echo "Content Type";
echo "</th>";

echo "<th>";
echo "Average TTL";
echo "</th>";
echo "</tr>";

 
for($i=0;$i<count($average_ttls);$i++)
	
	{
		if($average_ttls[$i]!=0)
		{
		echo "<tr>";
		
		echo "<td>";
		echo $distinct_con_types[$i];
		echo "</td>";
		
		echo "<td>";
		echo $average_ttls[$i];
		echo "</td>";
		echo "</tr>";
		}
	}
echo "</table>";
?>