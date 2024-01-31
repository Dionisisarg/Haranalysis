<?php

include 'connect.php';

$username = $_POST["username"];

$sql = "SELECT last_upload from user WHERE username = '$username'";

$result = $con->query($sql);

$row = $result->fetch_assoc();

echo "<table border = '2'>";

echo "<tr>";

echo "<th>";
echo "Last Upload Date Time";
echo "</th>";

echo "</tr>";

echo "<tr>";

echo "<td>";
echo $row['last_upload'];

echo "</td>";
echo "</tr>";
echo "</table>";




?>