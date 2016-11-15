<?php
	require "../config.php";

	$game=json_decode(file_get_contents('php://input'));

	$tid = $game->id;

	$home = $game->home;
	$h1 = explode('|',$home);
	$hname = $h1[0];
	$hid = $h1[1];
	
	$away = $game->away;
	$a1 = explode('|',$away);
	$aname = $a1[0];
	$aid = $a1[1];

	$date = $game->date;

	$sql = "insert into game (tid, home, away, date, homeID, awayId) values ('$tid', $hname, $aname, '$date', $hid, $aid)";


	if (mysqli_query($con, $sql)){
		echo "Game Inserted";
	}else{
		echo mysqli_error($con);
	}


?>