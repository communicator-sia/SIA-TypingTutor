<?php

require_once '../include/config.php';
$input = json_decode(file_get_contents("php://input"));
$input_serialized_to_string = (string) serialize($input);

// strlen() returns the number of bytes in a string.
$input_size_in_bytes = strlen($input_serialized_to_string);
//echo "Vsebina stringa:" . $input_serialized_to_string . "\n";
echo "Velikost stringa:" . $input_size_in_bytes . "\n";

try
{
	$m = new MongoClient(DB_MONGO_ADDRESS);
	$db = $m->typingTutor->keyboard;
	$db->insert($input);
	//echo "New record created successfully.\n";
	$_SESSION['userSentDataIterations']++;
	$_SESSION['userSentDataSize'] = $input_size_in_bytes;
}
catch(PDOException $e)
{
	echo $e->getMessage();
}

try
{
	$conn = new PDO("mysql:host=".DB_HOST.";dbname=".DB_DATABASE, DB_USER, DB_PASSWORD);
	// set the PDO error mode to exception
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$sql = $conn->prepare("UPDATE hjk SET input_bytes_hjk = :inputSize WHERE users_fk = (SELECT unique_id FROM users WHERE username = :username)");

	$sql->bindParam(':username', $_SESSION['UserName']);
	$sql->bindValue(':inputSize', $input_size_in_bytes);
	$sql->execute();

	// ce record s tem kljucem ze obstaja, sql ne inserta

	$_SESSION['user_monitored'] = true;
}
catch(PDOException $e)
{
	echo $e->getMessage()."<br />";
}

$conn = null;

?>
