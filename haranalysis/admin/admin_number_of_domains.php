<?php

include 'connect.php';

//plithos twn monadikwn domains
$sql = "SELECT COUNT(DISTINCT url) as plithos FROM request";

$result = $con->query($sql);

$row = $result->fetch_assoc();

$plithos = $row['plithos'];


echo "<table border='2'>";

echo "<tr>";

echo "<th>";

echo "Count of Unique Domains";
echo "</th>";
echo "</tr>";

echo "<tr>";

echo "<td>";
echo $plithos;
echo "</td>";
echo "</tr>";
echo "</table>";

?>