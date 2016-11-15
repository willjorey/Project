<?php

define('DB_SERVER', 'bk-prod-us1.cd2junihlkms.us-east-1.rds.amazonaws.com:3306');
define('DB_USERNAME', 'l6ux65b7xtp9sdo');
define('DB_PASSWORD', 'nH6bMnXhmmndXFZjAGqgM3');
define('DB_DATABASE', 'backands147263801fnqphltd');

//Create connection
$con = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

//Check Connection
if ($con->connect_error) {
	die("Connection Failed: ". $con->connect_error);
}

?>