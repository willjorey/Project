<?php
	require "../config.php";

	$team=json_decode(file_get_contents('php://input'));

	$tournamentId = $team->tournamentId;
	$teamId = $team->teamId;

	$sql = "insert into teamParticipants values ()";

	// if (mysqli_query($con, $sql)){
	// 	$last_id = mysqli_insert_id($con);
	// 	echo $last_id;

	// }else{
	// 	echo mysqli_error($con);
	// }
?>