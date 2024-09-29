<?php
    $dbHost = "localhost";
    $dbUser = "root";
    $dbPassward = "";
    $dbName = "purchesing";

    $conexao = new mysqli($dbHost, $dbUser, $dbPassward, $dbName);

    /*
    if($conexao -> connect_errno){
        echo "Erro";
    }
    else{
        echo "Conexao efetuada com sucesso";
    }
    */
?>