<?php
   $db_Host = "localhost";
   $db_UserName = "root";
   $db_Password = "";
   $db_Name = "purchesing";

   $conexao = new mysqli($db_Host, $db_UserName, $db_Password, $db_Name);

   /*
        if($conexao -> errno){
                echo "Hove falha na conexão";
        }
        else{
                echo "Conexão bem sucedida! Obrigado";
        }
  */
?>