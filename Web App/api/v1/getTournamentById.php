<?php
	require "../config.php";
	$id = json_decode(file_get_contents('php://input'));
	
	$sql = "select * from tournament where id='$id'";
	$result = mysqli_query($con, $sql);

	$tournament = array();

	if (mysqli_num_rows($result) != 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$tournament[] = $row;
		}
	}
	echo json_encode($tournament);
?>