<html>

<head>

<link rel="stylesheet" href="mystyle.css">


<link rel = "stylesheet" href = "http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css"/>
<script src = "http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
<script src="https://cdn.jsdelivr.net/npm/heatmapjs@2.0.2/heatmap.js"> </script>
<script src="leaflet-heatmap.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script src = "load_map.js"> </script>

</head>

<?php

session_start();

if($_SESSION["valid"]!=2)
	
	{
			header("Location: ../index.php");		
	}

include 'menu_user.php';

?>

 <div id = "map" style = "width: 100%; height: 75%"></div>


</html>