<?php

  $recepient="roks.dm.hm@gmail.com";
  $siteName="RoksanaDM(my visited)";
  
  $name=trim($_POST["name"]);
  $phone=trim($_POST["phone"]);
  $mail=trim($_POST["mail"]);
  $coment=trim($_POST["coment"]);
  $message="ФИО:$name \n Телефон:$phone \n E-mail:$mail\n Комментарий:$coment";
  
  $pagetitle="Заявка с сайта \"$siteName\"";$recepient");
  
  ?>