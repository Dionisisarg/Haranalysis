<?php

$filtered = $_POST["filtered"];

$myfile = fopen("filtered_data.har", "w");

fwrite($myfile, $filtered);


fclose($myfile);












?>