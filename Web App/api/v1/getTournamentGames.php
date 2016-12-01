<?php
	require "../config.php";
	$id = json_decode(file_get_contents('php://input'));
	
	$sql = "select * from game where tid='$id'";
	$result = mysqli_query($con, $sql);

	$games = array();

	if (mysqli_num_rows($result) != 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$games[] = $row;
		}
	}
	echo json_encode($games);
?>