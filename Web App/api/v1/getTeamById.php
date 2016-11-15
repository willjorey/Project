<?php
	require "../config.php";
	$tid = json_decode(file_get_contents('php://input'));
	
	$sql = "select * from team where id='$tid'";
	$result = mysqli_query($con, $sql);

	$team = array();

	if (mysqli_num_rows($result) != 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$team[] = $row;
		}
	}
	echo json_encode($team);
?>