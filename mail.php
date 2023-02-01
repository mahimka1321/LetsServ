<?php
$name = $_POST['NAME'];
$mail = $_POST['MAIL'];
$message = $_POST['MESSAGE'];
$headers = 'From: webmaster@example.com';
mail("plotnick33@gmail.com", "Заявка с сайта", "Имя:".$name." Почта: .$mail Сообщение: .$message",$headers);


header("Location: index.html");
exit();
?>
