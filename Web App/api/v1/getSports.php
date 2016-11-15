<?php
	require"../config.php";
	$sql = "select * from sport";
	$result = mysqli_query($con, $sql);

	$array = array();

	if(mysqli_num_rows($result) != 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$array[] = $row;
		}
	}
	echo json_encode($array);
?>