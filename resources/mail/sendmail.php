<?php 
$name=filter_input(INPUT_POST,'name');
$email=filter_input(INPUT_POST,'email');
$message=filter_input(INPUT_POST,'message');

if(
	empty($name) ||
	empty($email) ||
	empty($message) ||
    !filter_var($email,FILTER_VALIDATE_EMAIL)
  )
{
	echo 'Not valide submit';
}

$to="santunu23@gmail.com";
$headers =  'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'From: Your name <info@address.com>' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
$subject="You receive a new message from your website from $name";
$message_body="Message Send from $name are below \n From:$email\n Message:$message";
$header="Replay-to: $email";
mail($to,$subject,$message_body,$headers);
return true;







?>