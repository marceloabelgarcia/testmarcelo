<?php
/**
* Class Mail
*
*/
class Mail {
/**
* Indica si la conexión con el servidor de correo requiere autenticación
* @var <boolean>
*/
private $authentication = true;
/**
* Indica el host donde se realizará la conexión con el servidor de correo
* @var <string>
*/
private $host = '192.168.1.33';
/**
* Indica el usuario que se empleará en la autenticación con el servidor de correo
* @var <string>
*/
private $user = 'usuario';
/**
* Indica el password que se empleará en la autenticación con el servidor de correo
* @var <string>
*/
private $password = 'pAss12345';
public function __construct(){
}
/**
* Envia el email
* @param <string> $to Es la dirección de email del destinatario
* @param <string> $subject Es el asunto del mensaje
* @param <string> $body Es el cuerpo del mensaje
* @param <boolean> $is_html Indica si el cuerpo del mensaje está en formato html
* @param <array> $para_cc Un array de direcciones de email para copia Cc
* @param <array> $para_bcc Un array de direcciones de email para copia Bcc
* @return <boolean> Devuelve true si se envia el email y lanza una excepción en caso de fallo
*/
private function sendEmail($to, $subject, $body, $is_html=false, Array $para_cc=array(), Array
$para_bcc=array()){
//... Envia el email y devuelve true si todo ha ido bien o lanza una excepción si falla
return "Se ha enviado el mail correctamente";
}


public function settings($authentication, $user, $password, $host) {
    $this->authentication = $authentication;
    $this->user = $user;
    $this->password = $password;
    $this->host = $host;
}

public function sendEmailSignup($to, $subject, $body, $is_html) {
    return $this->sendEmail($to, $subject, $body, $is_html, []);
}


}
?>