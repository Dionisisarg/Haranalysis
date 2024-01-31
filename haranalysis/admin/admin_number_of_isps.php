<?php

include 'connect.php';

//plithos twn monadikwn isps

$sql = "SELECT COUNT(DISTINCT isp) as plithos FROM entry";

$result = $con->query($sql);

$row = $result->fetch_assoc();

$plithos = $row['plithos'];


echo "<table border='2'>";

echo "<tr>";

echo "<th>";

echo "Count of Unique ISPs";
echo "</th>";
echo "</tr>";

echo "<tr>";

echo "<td>";
echo $plithos;
echo "</td>";
echo "</tr>";
echo "</table>";

?>