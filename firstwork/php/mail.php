<?php 

require_once("phpmailer/PHPMailerAutoload.php");
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$tel = $_POST['user_tel'];
$messege = $_POST['user_messege'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'antonigoodmen@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'DtxYftnA09L8rCkQrPnY
'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('antonigoodmen@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('anton_savkov88@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(false);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = $name . ' оставил заявку!'.$tel . 'Он добавил'.$messege;
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>