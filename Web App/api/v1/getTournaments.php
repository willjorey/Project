<?php
	require "../config.php";
	$sql = "select * from tournament";
	$result = mysqli_query($con, $sql);

	$tournaments = array();

	if (mysqli_num_rows($result) != 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$tournaments[] = $row;
		}
	}
	echo json_encode($tournaments);
?>