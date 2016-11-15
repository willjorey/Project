<?php

if($_POST) {
  var_dump($_POST);
  $fp = fopen('../../data/data.json', 'w');
  fwrite($fp, json_encode($_POST));
  fclose($fp);
  echo "success";
} else {
  echo "save data failed...";
};

?>