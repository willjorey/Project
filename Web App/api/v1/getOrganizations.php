<?php
require "../config.php";
$query = "select * from organization";
$result = mysqli_query($con, $query);

$array = array();

if(mysqli_num_rows($result) != 0) {
	while($row = mysqli_fetch_assoc($result)) {
		$array[] = $row;
	}
}
echo json_encode($array);
?>