<?php 

if(isset($_POST['submit']))
{
$to = "fahadaameer@gmail.com";
$email = $_POST['email'];
$subject = $_POST['subject'];
$txt = $_POST['message'];
$headers = "From: {$email}" . "\r\n" .
"CC: somebodyelse@example.com";

mail($to,$subject,$txt,$headers);
  
}

?>
