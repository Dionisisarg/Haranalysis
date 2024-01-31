<?php

include 'connect.php';

if(isset($_POST['content_type']))
	
	{
$cont_type = $_POST['content_type'];
	}


if(isset($_POST['isp']))
{
$isp =  $_POST['isp'];
}

if(isset($cont_type))
{
$condition_con_type = "header_response.content_type in  (";

$flag_conditions=0;

       foreach($cont_type as $x)
	   
	   {
		   if($flag_conditions==0)
		   {   
		   $condition_con_type = $condition_con_type. "'".$x."'";
		   $flag_conditions=1;
		   
		   }
		   
		   else
			   
			   {
				
				$condition_con_type = $condition_con_type. ",'".$x."'";

				   
			   }
		   
	   }
	$condition_con_type = $condition_con_type. ")";			
	
}


if(isset($isp))
{
$condition_isp_type = "entry.isp in  (";

$flag_isps=0;

       foreach($isp as $x)
	   
	   {
		   if($flag_isps==0)
		   {   
		   $condition_isp_type = $condition_isp_type. "'".$x."'";
		   $flag_isps=1;
		   
		   }
		   
		   else
			   
			   {
				
				$condition_isp_type = $condition_isp_type. ",'".$x."'";

				   
			   }
		   
	   }
	$condition_isp_type = $condition_isp_type. ")";
}


if(isset($cont_type) && !isset($isp))

{

$sql = "SELECT COUNT(*) as plithos_public FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE header_response.cache_control LIKE '%public%' and $condition_con_type";


$sql2 = "SELECT COUNT(*) as plithos_private FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE cache_control LIKE '%private%' and $condition_con_type";

$sql3 = "SELECT COUNT(*) as plithos_no_cache FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE cache_control LIKE '%no-cache%' and $condition_con_type";

$sql4 = "SELECT COUNT(*) as plithos_no_store FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE cache_control LIKE '%no-store%' and $condition_con_type";


$sql5 = "SELECT COUNT(*) as plithos FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE $condition_con_type";


}


else if(!isset($cont_type) && isset($isp))

{

$sql = "SELECT COUNT(*) as plithos_public FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE header_response.cache_control LIKE '%public%' and $condition_isp_type";


$sql2 = "SELECT COUNT(*) as plithos_private FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE cache_control LIKE '%private%' and $condition_isp_type";

$sql3 = "SELECT COUNT(*) as plithos_no_cache FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE cache_control LIKE '%no-cache%' and $condition_isp_type";

$sql4 = "SELECT COUNT(*) as plithos_no_store FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE cache_control LIKE '%no-store%' and $condition_isp_type";

$sql5 = "SELECT COUNT(*) as plithos FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE $condition_isp_type";

}

else if(isset($cont_type) && isset($isp))

{

$sql = "SELECT COUNT(*) as plithos_public FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE header_response.cache_control LIKE '%public%' and $condition_con_type and $condition_isp_type";


$sql2 = "SELECT COUNT(*) as plithos_private FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE cache_control LIKE '%private%' and $condition_con_type and $condition_isp_type";

$sql3 = "SELECT COUNT(*) as plithos_no_cache FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE cache_control LIKE '%no-cache%' and $condition_con_type and $condition_isp_type";

$sql4 = "SELECT COUNT(*) as plithos_no_store FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE cache_control LIKE '%no-store%' and $condition_con_type and $condition_isp_type";


$sql5 = "SELECT COUNT(*) as plithos FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE $condition_con_type and $condition_isp_type";



}

else
	
	{
	
$sql = "SELECT COUNT(*) as plithos_public FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE header_response.cache_control LIKE '%public%'";


$sql2 = "SELECT COUNT(*) as plithos_private FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE cache_control LIKE '%private%'";

$sql3 = "SELECT COUNT(*) as plithos_no_cache FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE cache_control LIKE '%no-cache%'";

$sql4 = "SELECT COUNT(*) as plithos_no_store FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id WHERE cache_control LIKE '%no-store%'";


$sql5 = "SELECT COUNT(*) as plithos FROM header_response INNER JOIN entry ON header_response.id_entry = entry.id";
	

		
	}


$result = $con->query($sql);

$result2 = $con->query($sql2);

$result3 = $con->query($sql3);

$result4 = $con->query($sql4);

$result5 = $con->query($sql5);

$row = $result->fetch_assoc();

$row2 = $result2->fetch_assoc();

$row3 = $result3->fetch_assoc();

$row4 = $result4->fetch_assoc();

$row5 = $result5->fetch_assoc();

$public_percent = intval($row['plithos_public'])/intval($row5['plithos']);

$private_percent = intval($row2['plithos_private'])/intval($row5['plithos']);

$no_cache_percent = intval($row3['plithos_no_cache'])/intval($row5['plithos']);

$no_store_percent = intval($row4['plithos_no_store'])/intval($row5['plithos']);

echo "<table border='2'>";

echo "<tr>";

echo "<th>";
echo "Public Percentage";
echo "</th>";

echo "<th>";
echo "Private Percentage";

echo "</th>";

echo "<th>";
echo "No-Cache Percentage";

echo "</th>";

echo "<th>";
echo "No-Store Percentage";

echo "</th>";

echo "</tr>";

echo "<tr>";

echo "<td>";

echo $public_percent;

echo "</td>";

echo "<td>";

echo $private_percent;

echo "</td>";

echo "</td>";

echo "<td>";

echo $no_cache_percent;

echo "</td>";

echo "</td>";

echo "<td>";

echo $no_store_percent;

echo "</td>";


echo "</tr>";

echo "</table>";
?>