<?php

require_once("Mail.php");

$mail = new Mail();

$host = "192.168.1.22";
$user = null;
$pass = null;


$password = "passdelusuario";
$usuario = "username";

$name = "Marcelo";
$to ="garciamaar@gmail.com";
$subject="registro"; 
$is_html = false;

$body = "Estimad@ usuario,
le recordamos que sus datos de acceso son los siguientes:
usuario: %usuario%
password: %password%
Un saludo.";



$body = str_replace('%usuario%', $usuario, $body);
$body = str_replace('%password%', $password, $body);


$mail->settings(true, $user, $pass, $host);
$message = $mail->sendEmailSignup($to, $subject, $body, $is_html);
echo $message;

?>