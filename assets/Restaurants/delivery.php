<?php
    include_once('config.php');
    $sql = "SELECT * FROM dados ORDER BY id Desc";

    $retornar = $conexao -> query($sql);
    
    /*print_r($retornar)*/
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fine_Dinning</title>
    <link rel="stylesheet" href="../Styles/mainStyle.css"/>
    <link rel="stylesheet" href="../Styles/julsBar.css"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ephesis&family=PT+Sans+Narrow:wght@700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Rubik+Maps&family=Rubik+Scribble&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik+Maps&family=Rubik+Scribble&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Josefin+Slab:wght@100&display=swap" rel="stylesheet">
    
    <style>
       
    </style>
</head>
<body onload="getLocation()">
    <div id="Container">
        <header>
            <menu>
                <nav>
                    <article>
                        
                    </article>
                </nav>
            </menu>
        </header>
        <section>
            <div class="Image_Fixed">
                <article id="cabecalho">
                    <img id="Home" src="../Images/home.png" alt="">
                    <h1>
                        Location Details
                    </h1>
                </article>
            </div>
            <article class="delivery_show">
                <article class="delivery-container">
                    Include Delivery service
                    <div class="btn-main">
                        <div class="btn-child">
                        </div>
                    </div>
                    <button class="btn-del" onclick="retunDel()">Return</button>
                    <br/> <br>
                    <button class="btn-del" onclick="detailsPDF()">Get PDF</button>
                </article>
                <div class="content">
                        <fieldset class="delivery-form"> <legend>Fine Dining Moz</legend>
                            <article class="main-local">
                                <div class="local" id="localizacao">
                                    <!--Aqui aparece o Local-->
                                </div>
                                <div class="digit-local">
                                    <input type="text" placeholder="Type More Location details here"> 
                                </div>
                                
                                <div class="Self-pick-up" id="selfPickUp">
                                    <p>
                                        Self pick up hello
                                    </p>
                                </div>
                            </article>
                            <textarea class="text-area-delivery" name="" id="" rows="2" >

                            </textarea>
                            <table>
                                <fieldset class="itensOrdered"><legend class="brand">Details Review</legend>
                                    <?php
                                        $info = mysqli_fetch_assoc($retornar);

                                        echo "<strong>Order N°: </strong> &nbsp;   &nbsp; &nbsp; &nbsp; ".$info['Id'];
                                        echo "<br/> <br/> <br/>";
                                        echo "<strong>Amount:</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        &nbsp;".$info['Valor']; echo " Mzn";
                                        echo "<br/> <br/> <br/>";
                                        echo "<strong>Date:</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;".$info['Datas'];
                                        echo "<br/> <br/> <br/>";
                                        echo "<strong>Name:</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;".$info['Nome'];
                                        echo "<br/> <br/> <br/>";
                                        echo "<strong>Number:</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;".$info['Numero'];
                                        echo "<br/> <br/> <br/>";
                                        echo "<strong>Email:</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;".$info['Email'];
                                        echo "<br/> <br/> <br/>";
                                        echo "<strong>Request:</strong> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;".$info['Itens'];
                                    ?>
                                </fieldset>
                            </table>
                        </fieldset>
                        <fieldset class="delivery-form2">
                            <legend>Payment Method</legend>
                            <div class="seta-de-escolha">
                                <img class="seta_cima" src="../Images/seta-cima.png" alt="seta para cima">
                                <img class="seta_baixo" src="../Images/seta-baixo.png" alt="seta para baixo">
                            </div>
                            <div class="show-payment-methods">
                                <article class="pay pay1">
                                    M-pesa
                                    <img src="../Images/M-pesa-logo.png" alt="M-pesa-logo">
                                </article>
                                <article class="pay pay2">
                                    E-mola
                                    <img src="../Images/emola-logo.png" alt="emola-logo">
                                </article>
                                <article class="pay pay3">
                                    Visa-card
                                    <img src="../Images/Visa-Logo.png" alt=" Visa-Logo">
                                </article>
                                <article class="pay pay4">
                                    Transfer
                                    <img src="../Images/Transferencia-icon.png" alt="Transferencia-icon">
                                </article>
                            </div>
                            <form action="">
                                <div class="payment-Number">
                                    <div class="Mpesa">
                                        <div>
                                            +258
                                        </div>
                                        <input type="Number" placeholder="type your 84">
                                    </div>
                                    <div class="Movitel">
                                        <div>
                                            +258
                                        </div>
                                        <input  type="Number" placeholder="type your 86">
                                    </div>
                                </div>
                                <div class="payment-transfer">
                                    <input type="file" name="proofPayment" id="proofPayment">
                                </div>

                                <input class="conclue-payment" type="submit" name="submit" value="Conclued payment">
                            </form>
                        </fieldset>
                </div>
            </article>
        </section>    
        <footer>
            &copy;copyright_Fine Dining Moz LDA
        </footer>
    </div>
    <script src="../JS/juls.js"></script>
    <script src="../JS/delivery.js"></script>

    <script src="../JS/html2pdf.js-main"></script>
</body>
</html>