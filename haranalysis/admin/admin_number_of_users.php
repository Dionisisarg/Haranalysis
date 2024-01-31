<?php
include 'connect.php';

$sql = "SELECT COUNT(*) as plithos FROM user";

$result = $con->query($sql);

$row = $result->fetch_assoc();

$plithos = $row['plithos'];


echo "<table border = '2'>";

echo "<tr>";

echo "<th>";
echo "Total Count Of Users";
echo "</th>";
echo "</tr>";

echo "<tr>";

echo "<td>";
echo $plithos;
echo "</td>";
echo "</tr>";
echo "</table>";
?>