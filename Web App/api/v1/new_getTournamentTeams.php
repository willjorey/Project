<?php
	require "../config.php";

	$id = json_decode(file_get_contents('php://input'));

	$sql = "select * from team where id in (select teamId from tournamentParticipants where tournamentId='$id');";

	$result = mysqli_query($con, $sql);

	$array = array();

	if(mysqli_num_rows($result) != 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$array[] = $row;
		}
	}
	echo json_encode($array);

?>