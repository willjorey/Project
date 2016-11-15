<?php
	require "../config.php";
	$oid = json_decode(file_get_contents('php://input'));
	$sql = "select * from tournament where oid='$oid'";

	$result = mysqli_query($con, $sql);

	$tournaments = array();

	if (mysqli_num_rows($result) != 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$tournaments[] = $row;
		}
	}
	echo json_encode($tournaments);
?>