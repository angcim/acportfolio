<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['text'];
$message = $_POST['message'];

$email_from = 'angcim.designs@gmail.com';
$email_body = "User Name: $name.\n".
"Subject: $subject.\n".
"User Email: $visitor_email.\n".
"User Message: $message.\n";


$to = "angcim.designs@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_body,$headers);

header("Location: Angelika Designs");

?>
