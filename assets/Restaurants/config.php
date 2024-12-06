<?php
    $dbHost = "sql200.byethost9.com";
    $dbUser = "b9_37409917";
    $dbPassward = "Pedrosa.2";
    $dbName = "b9_37409917_FineDining";

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