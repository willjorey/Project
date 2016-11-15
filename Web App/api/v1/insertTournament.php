<?php
	require "../config.php";

	$tournament=json_decode(file_get_contents('php://input'));


	$name = $tournament->name;
	$age = $tournament->age;
	$gender = $tournament->gender;
	$date = $tournament->date;
	$oid = $tournament->oid;

	$sql = "insert into tournament (name, age, gender, date, oid) values ('$name', '$age','$gender', '$date', '$oid')";

	if (mysqli_query($con, $sql)){
		$last_id = mysqli_insert_id($con);
		echo $last_id;

	}else{
		echo mysqli_error($con);
	}
?>