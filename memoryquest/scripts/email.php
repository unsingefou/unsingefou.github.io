<?php
	$subject = $_POST["nameBox"] . " is requesting support on Memory Quest.";
	$message = "From: " . $_POST['emailBox'] . "\n\n" . $_POST['messageBox']; 
	
	$headers = 'From: ' . $_POST['emailBox'] . "\r\n" .
			'Reply-To: ' . $_POST['emailBox'];

	
    mail('support@jonathanlevis.net', $subject, $message, $headers);
	//mail('jonathan.levis@gmail.com', $subject, $message);
?>