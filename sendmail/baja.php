<?php
 
require_once("Mail.php");

$mail = new Mail();

$host = "192.168.1.33";
$user = "usuario";
$pass = "pAss12345";

$to ="garciamaar@gmail.com";
$subject="registro"; 
$is_html = true;

$body = "<p>Su baja se ha realizado</p>";

$mail->settings(true, $user, $pass, $host);
$message = $mail->sendEmailSignup($to, $subject, $body, $is_html);
echo $message;

?>