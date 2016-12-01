<?php
	require "../config.php";
	$gid = json_decode(file_get_contents('php://input'));
	
	$sql = "select * from game where id='$gid'";
	$result = mysqli_query($con, $sql);

	$game = array();

	if (mysqli_num_rows($result) != 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$game[] = $row;
		}
	}
	echo json_encode($game);
?>