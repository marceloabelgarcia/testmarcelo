<?php

require_once("Mail.php");

$mail = new Mail();

$host = "192.168.1.66";
$user = "registro";
$pass = "r3g1str0";


$name = "Marcelo";
$to ="garciamaar@gmail.com";
$subject="registro"; 
$is_html = true;

$body = "<p>Bienvenido <strong>%nombre%</strong>,<br>
su registro se ha realizado con éxito.<p>
<p>Esperemos que nustros servicios sean de su agrado</p>
<p>Un saludo</p>";

$body = str_replace('%nombre%', $name, $body);


$mail->settings(true, $user, $pass, $host);
$message = $mail->sendEmailSignup($to, $subject, $body, $is_html);
echo $message;

?>