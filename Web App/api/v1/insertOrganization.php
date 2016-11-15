<?php
	require "../config.php";

	$org=json_decode(file_get_contents('php://input'));

	$name = $org->name;
	$sport = $org->sport;

	$sql = "insert into organization (name, sportid) values ('$name', '$sport')";
	
	if (mysqli_query($con, $sql)){
		$last_id = $con->insert_id;
	}else{
		echo mysqli_error($con);
	}

?>