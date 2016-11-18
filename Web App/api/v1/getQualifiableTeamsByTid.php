<?php
	require "../config.php";
	$tid = json_decode(file_get_contents('php://input'));
	
	$sql = "select team.id, team.Name, team.Coach, team.Age, team.Gender, team.Image from team, tournament where (team.age=tournament.age and team.gender=tournament.gender) and tournament.id='$tid'";

	$result = mysqli_query($con, $sql);

	$teams = array();

	if (mysqli_num_rows($result) != 0) {
		while($row = mysqli_fetch_assoc($result)) {
			$teams[] = $row;
		}
	}
	echo json_encode($teams);
?>