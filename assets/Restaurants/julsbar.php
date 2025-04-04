<?php
    include_once('config.php');
    if(isset($_POST['submit'])){
        $Email = $_POST['nEmail'];
        $Number = $_POST['nNumber'];
        $Name = $_POST['nName'];
        $items = $_POST['nitems'];
        $dataReadOnly = $_POST['dataReadOnly'];
        $valorReadOnly = $_POST['valorReadOnly'];


        $results = mysqli_query($conexao, "INSERT INTO dados(Email, Numero, Nome, Itens, Datas, Valor) VALUES('$Email','$Number','$Name', '$items', '$dataReadOnly', '$valorReadOnly')");

        if($results){
            header("Location: delivery.php");
            exit();
        }
        
    }
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
</head>
<body>
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
                        Juls Bar & Restaurants
                    </h1>
                    <img id="cartIcon" src="../Images/online-store-cart.png" alt="">
                </article>
                <br>
                <article id="juls">
                    <div id="julsBarBtn">
                        <ul class="ul-btn">
                            <li>
                                <a id="overView" href="#julsBar">Over-view</a>
                            </li>
                            <li>
                                <a id="photos" href="#photo">Photos</a>
                            </li>
                            <li>
                                <a id="reviews" href="#ReviewsMain">Reviews</a>
                            </li>
                            <li>
                                <a id="speciality" href="#">specialty</a>
                            </li>
                            <li>
                                <a id="food" href="#">Food</a>
                            </li>
                            <li>
                                <a id="location" href="#">Location</a>
                            </li>
                        </ul>
                        
                    </div>
                    <div id="julsBar">
                        <p id="btn-plus-minus">
                            <a href="../../index.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"     fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            </a>
                            <svg id="btnplus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>
                            <svg id="btnmin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                              </svg>
                        </p>

                        <div>
                            <div id="mainView">
                                
                                <img src="MObileBar/MainView.webp" alt="">
                                <div id="mainViewInfo" class="escola">
                                    <div id="left" class="info-leftRigth">
                                        <Span class="span-view">
                                            Restaurants & Bar 
                                        </Span>
                                        <hr>
                                        <p>
                                            <span>
                                                <img src="../Images/star.png" alt="" id="maior">
                                                <img src="../Images/star.png" alt="" id="maior">
                                                <img src="../Images/star.png" alt="" id="maior">
                                                <img src="../Images/star.png" alt="" id="maior">
                                                <img src="../Images/star-social-favorite-middle-full.png" alt="" id="maior">
                                                4,5 
                                            </span>
                                            <span>
                                                <img class="menor" src="../Images/chat-right-dots.svg" alt="">
                                                02  review
                                            </span>
                                            <span>
                                                <img class="menor"  src="../Images/toast.png" alt="">
                                                Cocktails 
                                            </span>
                                            <div class="tag-div">
                                                <p class="tag">Culinary Artistry</p>
                                                <p class="tag">Distinctive Libations</p>
                                                <p class="tag">Unforgettable Moments</p>
                                            </div>
                                            <br>

                                            <p class="general-p">
                                               Refresh, enjoy and recharge <br>
                                               Cockitails made with organic ingredients and methods, while having JulsBar cocktails you will be connected to inhambane and tofo Beach community
                                            </p>
                                            <p id="divLogo">
                                                <img id="logo" src="MObileBar/Logo.jpg" alt="">
                                            </p>
                                        </p>
                                    </div>
                                    <div id="leftOther" class="info-leftRigth">
                                        <Span class="span-view">
                                            Order Preview 
                                            
                                        </Span>
                                        <hr>
                                        <div id="mainOrderPrevision">
                                            <div class="orderPrevision" id="previsionComidas"> <!--div photo e preço-->
                                                <div id="photoOrder">
                                                    <p>
                                                        <span id="precoletras">
                                                            Preço:
                                                            &nbsp;
                                                        </span>
                                                        
                                                        <output id="precoNumerario">00</output>
                                                    </p>
                                                    
                                                    <img src="../Images/humburger.png" alt="" id="photoForOrder">
                                                </div>
                                                <div id="nameOrder">
                                                    nome Food
                                                </div>
                                            </div>


                                            <div class="orderPrevision" id="previsionBebidas"> <!--div photo e preço-->
                                                <div id="photoOrderB">
                                                    <p>
                                                        <span id="precoletrasB">
                                                            Preço:
                                                            &nbsp;
                                                        </span>
                                                        
                                                        <output id="precoNumerarioB">00</output>
                                                    </p>
                                                    <img src="../Images/chá.jpg" alt="" id="photoForOrderB">
                                                </div>
                                                <div id="nameOrderB">
                                                    Nome Bebidas
                                                </div>
                                            </div>
                                            <div id="multiplicadorResultado">
                                                
                                                <div id="multiplicador">
                                                    <p class="p1">
                                                        <span id="numeroProdutoMultip">
                                                            <!--Quantidade Multiplicado-->
                                                        </span>
                                                        <span id="nomeProdutoMultip">
                                                            <!--Produto Multiplicado-->
                                                            Food not selected
                                                        </span>
                                                    </p>

                                                    <p id="valorTotal"> <!---------------------------->
                                                        <sapn id="totalN">
                                                            00.00
                                                        </sapn>
                                                        <br>
                                                        <span id="totalT">
                                                            Total to Pay
                                                        </span>
                                                    </p> <!---------------------------------------->

                                                    <p class="p2">
                                                        <span id="numeroProdutoMultipBebidas">
                                                            <!--Quantidade Multiplicado-Bebidas -->
                                                        </span>
                                                        <span id="nomeProdutoMultipBebidas">
                                                            <!--Produto Multiplicado-Bebidas -->
                                                            Drink not selected
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="right" class="info-leftRigth">
                                        <span class="span-order">
                                            Make your order
                                        </span>
                                        <hr>
                                        <form action="julsbar.php" method="post">
                                            <!--Area de integrar carinho de compras-->
                                                <input id="containerOnly" type="text" name="nitems" readonly>

                                                <input  id="dataReadOnly" type="text" name="dataReadOnly" readonly>

                                                <input id="valorReadOnly" type="text" name="valorReadOnly" readonly>
                                                <article class="cartList-main"> <!--Entrada de Div Carinho ou Cart-->
                                                    <div class="cartList-container">
                                                        <div id="adicionados" class="cartList-items" >
                                                            <!--Artigos Adicionados carrinho aparecem aqui-->
                                                        </div>
                
                                                        <div id="valoresPareAdicionados">
                
                                                        </div><!--Preço dos artigos Adicionados carrinho aparecem aqui-->
                
                                                        <div class="cartList-image">
                                                            <img id="shoppingBags" src="../Images/shopping bags.png" alt="">
                                                        </div>
                                                    
                                                        <button onclick="redicionar()" id="purchase" class="purchase-btn">purchase</button>
                                                        <button class="cancel-p-btn">Cancel</button>
                                                    
                                                    </div> 
                                                    <div class="cart-total">
                                                        <p>Total</p>
                                                        <div id="cartM">
                                                        
                                                        </div>
                                                    </div>
                                                </article> <!--Fim carrinho ou cart-->
                                            <!--Fim area de integrar carinho de compras-->
                                            <p class="dataTime">
                                                <span>
                                                    <label for="iData">
                                                        <img id="svgData" src="../Images/calendar-check.svg" alt="">
                                                        Date
                                                    </label> <br>
                                                    <output name="nDate" id="iData">
                                                </span>

                                                <span>
                                                    <label for="iTime">
                                                        <img id="svgHora" src="../Images/clock.svg" alt="">
                                                        Time
                                                    </label> <br>
                                                    <output name="nTime" id="iTime">
                                                </span>
                                            </p>
                                            <p class="typ-Order">
                                                <span>
                                                    <label for="iFood">Food</label>
                                                    <input type="checkbox" name="nTyp" id="iFood" checked>
                                                </span>

                                                <span>
                                                    <label for="iBeverages">Beverages</label>
                                                    <input type="checkbox" name="nTyp" id="iBeverages" checked>
                                                </span>

                                                <span>
                                                    <label for="iOther">Other</label>
                                                    <input type="checkbox" name="nOther" id="iOther">
                                                </span>
                                            </p>
                                            <!--ATT-->
                                            <div class="other-txt">
                                                <label for="iOtherWrite">Other</label>
                                                <input type="text" name="" id="iOtherWrite" placeholder="Write here your request">
                                            </div>
                                            <!--ATT-->
                                            <div class="food-selection nova-food">
                                                <p class="Qty"> <!--area de Mudança-->
                                                    <span>
                                                        <label for="iFQty">Food - qty</label>
                                                    </span>
    
                                                    <span class="valor">
                                                        <button onclick="diminuirNumero(), exibirValor(), calcular()" onclick="exibirValor()" type="button" name="nSubtrair" id="iFSubtrair">-</button>
    
                                                        <input oninput="exibirValor()"  type="number" name="nQty" id="iFQty" min="0" value="1"  readonly>
                                                        <!--Hello, World!-->
    
                                                        <button onclick="aumentarNumero(), exibirValor(), calcular()" type="button" ame="nAdiconar" id="iFAdicionar">+</button>
                                                    </span>
                                                </p> <!--Area de mudança-->

                                                <label for="iFoodSelection">Select Food</Select></label>
                                                <select onchange="valorSeleacionado(), calcular(), exibirValor()" id="iFoodSelection">
                                                    <option value="selecting">Select your Food</option>
                                                    <option value="humburguer">Humburguer</option>
                                                    <option value="Sandes">Sandes</option>
                                                    <option value="Pizza Hut">Pizza Hut</option>
                                                    <option value="Burger King">Burger King</option>
                                                    <option value="Panda Expressr">Panda Express</option>
                                                </select>
                                            </div>

                                            <div class="beverages-select">
                                                <p class="bQty">
                                                    <span>
                                                        <label for="iBQty">Drink - qty</label>
                                                    </span>
                                                    <span class="valor">
                                                        <button onclick="diminuirSegundoNumero(), exibirValor2(), calcular()"  type="button" name="nSubtrair" id="iBSubtrair">-</button>
    
                                                        <input type="number" name="nQty" id="iBQty" value="1" min="0" readonly>
    
                                                        <button onclick="aumentarSegundoNumero(), exibirValor2(), calcular()" type="button" ame="nAdiconar" id="iBAdicionar">+</button>
                                                    </span>
                                                </p>
                                                <label for="iBeverageSelection">Select Drinks</label>
                                                <select onchange="visualizarBebida(), calcular()" id="iBeverageSelection">
                                                    <option value="selecting Drinks">Select your drinks</option>
                                                    <option value="coffee">Coffee</option>
                                                    <option value="champagne">Champagne</option>
                                                    <option value="Chamomile Tea">Chamomile Tea</option>
                                                    <option value="soda">Soda-woter</option>
                                                    <option value="water">still-Water</option>
                                                    <option value="juice">Lemon-Juice</option>
                                                    <option value="smoothie">Smoothie</option>
                                                    <option value="milk">Milk</option>
                                                    <option value="iced-tea">Iced Tea</option>
                                                    <option value="lemonade">Lemonade</option>
                                                    <option value="hot-chocolate">Hot Chocolate</option>
                                                    <option value="energy-drink">Energy Drink</option>
                                                    <option value="iced-coffee">Iced Coffee</option>
                                                    <option value="fruit-infused-water">Fruit Infused Water</option>
                                                    <option value="beer">Beer</option>
                                                    <option value="wine">Wine</option>
                                                    <option value="cocktail">Cocktail</option>
                                                    <option value="mocktail">Mocktail</option>
                                                    <option value="iced-latte">Iced Latte</option>
                                                    <option value="iced-matcha">Iced Matcha</option>
                                                </select>
                                            </div>

                                            

                                            <p class="contact-info">
                                                <span>
                                                    <label for="iEmail">Email</label>
                                                    <input type="email" name="nEmail" id="iEmail" placeholder="Email" required>
                                                </span>
                                                
                                                <br> <br>

                                                <span>
                                                    <label for="iNumber">Number</label>
                                                    <input type="number" name="nNumber" id="iNumber" placeholder="Number" required>
                                                </span> 
                                                
                                                <br> <br>

                                                <span>
                                                    <label for="iName">Name</label>
                                                    <input type="text" name="nName" id="iName" placeholder="Full Name" required>
                                                </span>

                                            </p>
                                            <!--
                                            <div  class="deliver_options">
                                                <fieldset>
                                                    <legend>Delivery service inclueded?</legend>
                                                    <divn>
                                                        <label id="lab_yes" for="yes">Yes</label>
                                                        <input onclick="getLocation()" type="radio" name="deliveryService" value="yes" id="yes">
                                                    </divn>
                    
                                                    <divn>
                                                        <label id="lab_no" for="no">No</label>
                                                        <input type="radio" name="deliveryService" value="no" id="no" checked>
                                                    </divn>
                                                </fieldset>
                                            </div>
                                            -->

                                            <p id="submit">
                                                <input class="cart" type="button" value="Add to cart">

                                                <input class="submit" type="submit" value="submit" id="subm" name="submit">
                                            </p>

                                            <br>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <!--Entrada da ABA Photos-->
                <article id="photosMain">
                    <div id="photo">
                        <div class="conteiner">
                            <div id="mensagemPhotos">
                                Explore our gallery of work images and immerse yourself in a visual journey of dedication, expertise and excellence.
                            </div>
                            <p class="imagem-a">
                                <img id="imgJuls1" src="MObileBar/IMG-20231225-WA0031pp.webp" alt="" onclick="showPhoto1()">
                            </p>
                            <p class="imagem-a">
                                <img id="imgJuls2" src="MObileBar/IMG-20231225-WA0032.webp" alt="" onclick="showPhoto2()">
                            </p>
                            <p class="imagem-a">
                                <img id="imgJuls3" src="MObileBar/IMG-20231225-WA0033.webp" alt="" onclick="showPhoto3()">
                            </p>
                            <p class="imagem-a">
                                <img id="imgJuls4" src="MObileBar/IMG-20231225-WA0034.webp" alt="" onclick="showPhoto4()">
                            </p>
                            <p class="imagem-a">
                                <img id="imgJuls5" src="MObileBar/IMG-20231225-WA0035.webp" alt="" onclick="showPhoto5()">
                            </p>
                            <p id="imgJuls7" class="imagem-a">
                                <img src="MObileBar/IMG-20231225-WA0036.jpg" alt=""  onclick="showPhoto6()">
                            </p>
                            <p id="imgJuls8" class="imagem-a">
                                <img src="MObileBar/IMG-20231225-WA0037.webp" alt=""  onclick="showPhoto7()">
                            </p>
                            <p id="imgJuls9" class="imagem-a">
                                <img src="MObileBar/IMG-20231225-WA0038.webp" alt=""  onclick="showPhoto8()">
                            
                            </p>
                            <p id="imgJuls10" class="imagem-a">
                                <img src="MObileBar/IMG-20231225-WA0039.webp" alt=""  onclick="showPhoto9()">
                            </p>
                            <p id="imgJuls11" class="imagem-a">
                                <img src="MObileBar/IMG-20231225-WA0040.webp" alt=""  onclick="showPhoto10()">
                            </p>
                            <p id="imgJuls12" class="imagem-a">
                                <img src="MObileBar/IMG-20231225-WA0041.webp" alt=""  onclick="showPhoto11()">
                            </p>
                            <p id="imgJuls14" class="imagem-a">
                                <img src="MObileBar/IMG-20231225-WA0043.webp" alt=""  onclick="showPhoto13()">
                            </p>
                            <div id="photoShowMainFrame">
                                <div id="photoShow">
                                    <img id="imagemPrincipal" src="MObileBar/IMG-20231225-WA0031pp.webp" alt="" onclick="showPhoto1()">
                                    <span onclick="closePhotos()" id="limpar">
                                        X
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </article>
                

                <!--Entrada da ABA Reviws-->
                <article id="ReviewsMain">
                    <div class="fondo-comentario" id="fundoComentario"> <!--Div de fundo preto para facilitar  a visibilidade da linha do comentário-->
                        <div>
                            <form action="">
                                <p>
                                    <input type="text" name="nomeForm2" id="nomeForm2" placeholder="your name" required>
                                </p>
                                <p>
                                    <input type="text" name="comentarioForm2" id="comentarioForm2" placeholder="Add your review here" required>
                                    <span class="btn-submit-cancel">
                                        <input id="submitBtnF2" type="submit" value="comment">
                                        <input id="cancelBtnF2" type="button" value="cancel">
                                    </span>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div id="ReviewsFrame">
                        <p id="btnOfComment">
                            <span id="abrirComentarios">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                </svg>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right-quote" viewBox="0 0 16 16">
                                    <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                                    <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                                </svg>
                            </span><!-- SPAN de SVGs do botão de adicionarcomentário-->
                        </p>
                       <div>
                            <span >
                                <svg class="perfil-of-comment" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                </svg> <!--SVG da foto de perfil para ABA  comentário-->
                            </span>
                            <span id="nomeOfComment">
                                Elves Chissique
                            </span>
                            <br>
                            <p id="corpOfComment">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, similique. Praesentium ducimus asperiores aspernatur labore distinctio rerum ea? Officiis velit beatae non perspiciatis molestias explicabo recusandae, molestiae dicta maxime inventore!
                            </p>
                       </div>

                       <div>
                            <svg class="perfil-of-comment" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg> <!--SVG da foto de perfil para ABA  comentário-->
                            <span id="nomeOfComment">
                                Elves Chissique
                            </span>
                            <br>
                            <p id="corpOfComment">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, similique. Praesentium ducimus asperiores aspernatur labore distinctio rerum ea? Officiis velit beatae non perspiciatis molestias explicabo recusandae, molestiae dicta maxime inventore!
                            </p>
                       </div>
                       <div>
                            <svg class="perfil-of-comment" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg> <!--SVG da foto de perfil para ABA  comentário-->
                            <span id="nomeOfComment">
                                Elves Chissique
                            </span>
                            <br>
                            <p id="corpOfComment">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, similique. Praesentium ducimus asperiores aspernatur labore distinctio rerum ea? Officiis velit beatae non perspiciatis molestias explicabo recusandae, molestiae dicta maxime inventore!
                            </p>
                       </div>
                       <div>
                            <svg class="perfil-of-comment" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg> <!--SVG da foto de perfil para ABA  comentário-->
                        <span id="nomeOfComment">
                            Elves Chissique
                        </span>
                        <br>
                        <p id="corpOfComment">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, similique. Praesentium ducimus asperiores aspernatur labore distinctio rerum ea? Officiis velit beatae non perspiciatis molestias explicabo recusandae, molestiae dicta maxime inventore!
                        </p>
                   </div>
                   </div>

                </article>
                <br>
            </div>
            
        </section>
        <footer>
            &copy;copyright_Fine Dining Moz LDA
        </footer>
    </div>
    <script src="../JS/juls.js"></script>
    <script src="../JS/delivery.js"></script>
    <script>
        
    </script>
</body>
</html>