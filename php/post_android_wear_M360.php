<?php

require_once '../include/config.php';
$input = json_decode(file_get_contents("php://input"));

try
{
	$m = new MongoClient(DB_MONGO_ADDRESS);
	$db = $m->typingTutor->androidWear_M360;
	foreach ($input as $value)
	{
		$db->insert($value);
		// echo "New record created successfully.\n";
	}
}
catch(PDOException $e)
{
	echo $e->getMessage();
}

?>
