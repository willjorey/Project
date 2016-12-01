<?php
	require "../config.php";

	$team=json_decode(file_get_contents('php://input'));

	$name = $team->name;

	$coach = $team->cname;
	
	$age = $team->age;

	$gender = $team->gender;

	$sql = "insert into team (name, coach, age, gender) values ('$name', '$coach', '$age', '$gender')";


	if (mysqli_query($con, $sql)){
		echo "Team Inserted";
	}else{
		echo mysqli_error($con);
	}


?>