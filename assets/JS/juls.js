/*-------------configuração de botão Home----------------------------------*/
var Home = window.document.getElementById('Home');
Home.addEventListener('click',backHome)


function backHome(){
    window.location= "../../index.html"
}

/*-------------- Fução da hora ----------------*/
var iData = window.document.getElementById('iData')
var iTime = window.document.getElementById('iTime')

var data = new Date()

var soData = data.getDate()
var soMes = data.getMonth()
var soAno = data.getFullYear()
var soHoras = data.getHours()
var soMinutos = data.getMinutes()
var horasC;
var MinutosC;

if(soHoras < 10){
    horasC = "0"+soHoras
}
else{
    horasC = soHoras 
}

if(soMinutos < 10){
    MinutosC = "0"+soMinutos
}
else{
    MinutosC = soMinutos 
}

iData.innerHTML = soAno+" / "+soMes+" / "+ soData
iTime.innerHTML = horasC + " : " + MinutosC





var mostrarbtnjulsBar = window.document.getElementById('julsBarBtn')
var btnplus = window.document.getElementById('btnplus')
var btnmin = window.document.getElementById('btnmin')

btnplus.addEventListener('click', mostrarbtn)
btnmin.addEventListener('click', naoMostrarbtn)

function mostrarbtn(){
    mostrarbtnjulsBar.style.marginTop = ".6vw"
    mostrarbtnjulsBar.style.transition = "all 2s"
    btnmin.style.display = "inline"
    btnplus.style.display = "none"
}

function naoMostrarbtn(){
    btnmin.style.display = "none"
    btnplus.style.display = "inline"
    mostrarbtnjulsBar.style.marginTop = "-100%"
    mostrarbtnjulsBar.style.transition = "all 2s"
}

/* --------------- configuração de butoes de overview, photos, reviews-------------------------- */
var overview = window.document.getElementById('overView') 
var photos = window.document.getElementById('photos') 
var reviews = window.document.getElementById('reviews') 
var speciality = window.document.getElementById('speciality') 
var food = window.document.getElementById('food') 
var locat = window.document.getElementById('location') 


overview.addEventListener('click', stickOverView)
photos.addEventListener('click', stickPhotos)
reviews.addEventListener('click', stickReviews)
speciality.addEventListener('click', stickSpeciality)
food.addEventListener('click', stickFood)
locat.addEventListener('click', stickLocation)

function stickOverView(){
    overview.style.borderBottom = "1px solid #fff"

    photos.style.borderBottom = "none"
    photos.style.color = "#fff"
    reviews.style.borderBottom = "none"
    reviews.style.color = "#fff"
    speciality.style.borderBottom = "none"
    speciality.style.color = "#fff"
    food.style.borderBottom = "none"
    food.style.color = "#fff"
    locat.style.borderBottom = "none"
    locat.style.color = "#fff"
}

function stickPhotos(){
    photos.style.borderBottom = "1px solid #fff"

    overview.style.borderBottom = "none"
    overview.style.color = "#fff"
    reviews.style.borderBottom = "none"
    reviews.style.color = "#fff"
    speciality.style.borderBottom = "none"
    speciality.style.color = "#fff"
    food.style.borderBottom = "none"
    food.style.color = "#fff"
    locat.style.borderBottom = "none"
    locat.style.color = "#fff"
}

function stickReviews(){
    reviews.style.borderBottom = "1px solid #fff"


    photos.style.borderBottom = "none"
    photos.style.color = "#fff"
    overview.style.borderBottom = "none"
    overview.style.color = "#fff"
    speciality.style.borderBottom = "none"
    speciality.style.color = "#fff"
    food.style.borderBottom = "none"
    food.style.color = "#fff"
    locat.style.borderBottom = "none"
    locat.style.color = "#fff"
}

function stickSpeciality(){
    speciality.style.borderBottom = "1px solid #fff"

    photos.style.borderBottom = "none"
    photos.style.color = "#fff"
    reviews.style.borderBottom = "none"
    reviews.style.color = "#fff"
    overview.style.borderBottom = "none"
    overview.style.color = "#fff"
    food.style.borderBottom = "none"
    food.style.color = "#fff"
    locat.style.borderBottom = "none"
    locat.style.color = "#fff"
}

function stickFood(){
    food.style.borderBottom = "1px solid #fff"

    photos.style.borderBottom = "none"
    photos.style.color = "#fff"
    reviews.style.borderBottom = "none"
    reviews.style.color = "#fff"
    speciality.style.borderBottom = "none"
    speciality.style.color = "#fff"
    overview.style.borderBottom = "none"
    overview.style.color = "#fff"
    locat.style.borderBottom = "none"
    locat.style.color = "#fff"
}

function stickLocation(){
    locat.style.borderBottom = "1px solid #fff"

    photos.style.borderBottom = "none"
    photos.style.color = "#fff"
    reviews.style.borderBottom = "none"
    reviews.style.color = "#fff"
    speciality.style.borderBottom = "none"
    speciality.style.color = "#fff"
    food.style.borderBottom = "none"
    food.style.color = "#fff"
    overview.style.borderBottom = "none"
    overview.style.color = "#fff"
}  


/*-------------------- Configuração de ABA de Seleção de comida----------------------------- */

var iFood = window.document.getElementById('iFood')
var iBeverages = window.document.getElementById('iBeverages')
var iOther = window.document.getElementById('iOther')

iFood.addEventListener('click', verificarIFood2)
iBeverages.addEventListener('click', verificarIFood2)
iOther.addEventListener('click', verificarIFood2)


window.onload = function verificarIFood(){
    if(iFood.checked){
        var iFoodSelection = window.document.getElementById('iFoodSelection')

        iFoodSelection.style.display = 'block'
    }
    else{
        var iFoodSelection = window.document.getElementById('iFoodSelection')

        iFoodSelection.style.display = 'none'
    }

    if(iBeverages.checked){
        var iBeverageSelection = window.document.getElementById('iBeverageSelection')

        iBeverageSelection.style.display = 'block'
    }
    else{
        var previsionBebidas = window.document.getElementById('previsionBebidas')
        previsionBebidas.style.display = 'none'
        var iBeverageSelection = window.document.getElementById('iBeverageSelection')

        iBeverageSelection.style.display = 'none'
    }
}


function verificarIFood2(){
    if(iFood.checked){
        var previsionComidas = window.document.getElementById('previsionComidas')
        previsionComidas.style.display = 'flex'
        var iFoodSelection = window.document.getElementById('iFoodSelection')

        iFoodSelection.style.display = 'block'
    }
    else{
        var previsionComidas = window.document.getElementById('previsionComidas')
        previsionComidas.style.display = 'none'
        var iFoodSelection = window.document.getElementById('iFoodSelection')

        iFoodSelection.style.display = 'none'
    }

    if(iBeverages.checked){
        var previsionBebidas = window.document.getElementById('previsionBebidas')
        previsionBebidas.style.display = 'flex'

        var iBeverageSelection = window.document.getElementById('iBeverageSelection')

        iBeverageSelection.style.display = 'block'
    }
    else{
        var previsionBebidas = window.document.getElementById('previsionBebidas')
        previsionBebidas.style.display = 'none'
        var iBeverageSelection = window.document.getElementById('iBeverageSelection')

        iBeverageSelection.style.display = 'none'
    }



    if(iOther.checked){
        var iOtherWrite = window.document.getElementById('iOtherWrite')

        iOtherWrite.style.display = 'block'
    }
    else{
        var iOtherWrite = window.document.getElementById('iOtherWrite')

        iOtherWrite.style.display = 'none'
    }
}







/*----------------- configuração de butoes de oumento e diminuição de quatindade de food and Beverage---------------*/

function aumentarNumero(){
    var iFQty = window.document.getElementById('iFQty')
    iFQty.stepUp()
}


function diminuirNumero(){
    var iFQty = window.document.getElementById('iFQty')
    iFQty.stepDown()
}


function aumentarSegundoNumero(){
    var iBQty = window.document.getElementById('iBQty')
        iBQty.stepUp()
}

function diminuirSegundoNumero(){
    var iBQty = window.document.getElementById('iBQty')
        iBQty.stepDown()
}



/*--------------- configuração para photo Show Frame----------------------------*/


var photoShow = window.document.getElementById('photoShow')
var imagemPrincipal = window.document.getElementById('imagemPrincipal')
var photoShowMainFrame = window.document.getElementById('photoShowMainFrame') 


function showPhoto1(){
        photoShowMainFrame.style.display = 'flex'
        imagemPrincipal.src= "../Restaurants/MObileBar/IMG-20231225-WA0031.jpg"
}
function showPhoto2(){
    photoShowMainFrame.style.display = 'flex'
    imagemPrincipal.src= "../Restaurants/MObileBar/IMG-20231225-WA0032.jpg"
}

function showPhoto3(){
    photoShowMainFrame.style.display = 'flex'
    imagemPrincipal.src= "../Restaurants/MObileBar/IMG-20231225-WA0033.jpg"
}

function showPhoto4(){
    photoShowMainFrame.style.display = 'flex'
    imagemPrincipal.src= "../Restaurants/MObileBar/IMG-20231225-WA0034.jpg"
}

function showPhoto5(){
    photoShowMainFrame.style.display = 'flex'
    imagemPrincipal.src= "../Restaurants/MObileBar/IMG-20231225-WA0035.jpg"
}

function showPhoto6(){
    photoShowMainFrame.style.display = 'flex'
    imagemPrincipal.src= "../Restaurants/MObileBar/IMG-20231225-WA0036.jpg"
}

function showPhoto7(){
    photoShowMainFrame.style.display = 'flex'
    imagemPrincipal.src= "../Restaurants/MObileBar/IMG-20231225-WA0037.jpg"
}
function showPhoto8(){
    photoShowMainFrame.style.display = 'flex'
    imagemPrincipal.src= "../Restaurants/MObileBar/IMG-20231225-WA0038.jpg"
}
function showPhoto9(){
    photoShowMainFrame.style.display = 'flex'
    imagemPrincipal.src= "../Restaurants/MObileBar/IMG-20231225-WA0039.jpg"
}
function showPhoto10(){
    photoShowMainFrame.style.display = 'flex'
    imagemPrincipal.src= "../Restaurants/MObileBar/IMG-20231225-WA0040.jpg"
}
function showPhoto11(){
    photoShowMainFrame.style.display = 'flex'
    imagemPrincipal.src= "../Restaurants/MObileBar/IMG-20231225-WA0041.jpg"
}
function showPhoto12(){
    photoShowMainFrame.style.display = 'flex'
    imagemPrincipal.src= "../Restaurants/MObileBar/IMG-20231225-WA0042.jpg"
}
function showPhoto13(){
    photoShowMainFrame.style.display = 'flex'
    imagemPrincipal.src= "../Restaurants/MObileBar/IMG-20231225-WA0043.jpg"
}
function showPhoto14(){
    photoShowMainFrame.style.display = 'flex'
    imagemPrincipal.src= "../Restaurants/MObileBar/IMG-20231225-WA0035.jpg"
}


/*--------------------------------------*/

function closePhotos(){
    photoShowMainFrame.style.display = 'none' /* configuração para fechar toda a ABA de phot show */
}

/*----------------------- Configuração para ABA de Reviews--------------------------- */

var fundoComentario = window.document.getElementById('fundoComentario')
var abrirComentarios = window.document.getElementById('abrirComentarios')
var cancelBtnF2 = window.document.getElementById('cancelBtnF2')

abrirComentarios.addEventListener('click', abrirCampoComentario)
cancelBtnF2.addEventListener('click', fecharCampoComentario)

function abrirCampoComentario(){
    fundoComentario.style.display = 'block'
}

function fecharCampoComentario(){
    fundoComentario.style.display = 'none'
}



/* Configuração de preços e fotos para de Orders*/
function valorSeleacionado(){
    var iFoodSelection = window.document.getElementById('iFoodSelection');
    var nomeProdutoMultip = window.document.getElementById('nomeProdutoMultip')
    var nameOrder = window.document.getElementById('nameOrder');
    var leftOther = window.document.getElementById('leftOther');
    var left = window.document.getElementById('left');

    var selectedThing = iFoodSelection.value;
    nameOrder.innerHTML = selectedThing;
    nomeProdutoMultip.innerHTML = selectedThing;

    var precoNumerario = window.document.getElementById('precoNumerario');
  
    if(selectedThing == "humburguer"){
        precoNumerario.innerHTML = 660;
        var newPicture = '../Images/humburger.png';
        window.document.getElementById('photoForOrder').src = newPicture
    }
    else if(selectedThing == "Sandes"){
        precoNumerario.innerHTML = 250;
        var newPicture = '../Images/Sandes.png';
        window.document.getElementById('photoForOrder').src = newPicture;
    }
    else if(selectedThing == "Pizza Hut"){
        precoNumerario.innerHTML = 960;
        var newPicture = '../Images/pizza.png';
        window.document.getElementById('photoForOrder').src = newPicture;
    }
    else if(selectedThing == "Burger King"){
        precoNumerario.innerHTML = 750;
        var newPicture = '../Images/SemFoto.png';
        window.document.getElementById('photoForOrder').src = newPicture;
    }
    else if(selectedThing == "Panda Expressr"){
        precoNumerario.innerHTML = 492;
        var newPicture = '../Images/SemFoto.png';
        window.document.getElementById('photoForOrder').src = newPicture;
    }
   

    if(selectedThing == 'selecting'){
        var previsionComidas = window.document.getElementById('previsionComidas')
        previsionComidas.style.display = 'none'
        left.style.display = 'none'
    }
    else{
        var previsionComidas = window.document.getElementById('previsionComidas')
        previsionComidas.style.display = 'flex'
        leftOther.style.display = "flex" 
        left.style.display = 'none' 
    }


}

function exibirValor(){
    var numeroProdutoMultip = window.document.getElementById('numeroProdutoMultip')
    var iFQtyy = window.document.getElementById('iFQty').value;

    numeroProdutoMultip.innerHTML = iFQtyy + ' x '
}


function calcular(){
    var iFoodSelection = window.document.getElementById('iFoodSelection').value;
    var iBeverageSelection = window.document.getElementById('iBeverageSelection').value
    var precoNumerarioB = window.document.getElementById('precoNumerarioB').value
    var precoNumerario = window.document.getElementById('precoNumerario').value //Preço de comida
    var iFQtyy = window.document.getElementById('iFQty').value; // Quantidade de Comida

    var somaComidas;
    var somaBebidas;

    if(iFoodSelection == 'selecting'){
        somaComidas = 0;
    }
    else{
        somaComidas = Number(precoNumerario*iFQtyy)
    }




    var iBQtyy = window.document.getElementById('iBQty').value;
    if(iBeverageSelection == 'selecting Drinks'){
       somaBebidas = 0;
    }
    else{
        somaBebidas = Number(precoNumerarioB*iBQtyy)
    }
    var somaGeral = (somaComidas+somaBebidas)
    var totalN = window.document.getElementById('totalN')
    totalN.innerHTML = somaGeral
}




//configurar area de bebidas
function visualizarBebida(){
    var iBeverageSelection = window.document.getElementById('iBeverageSelection').value
    var numeroProdutoMultipBebidas = window.document.getElementById('numeroProdutoMultipBebidas')
    var nomeProdutoMultipBebidas = window.document.getElementById('nomeProdutoMultipBebidas')
        nomeProdutoMultipBebidas.innerHTML = iBeverageSelection
    var previsionBebidas = window.document.getElementById('previsionBebidas')
    var numeroProdutoMultipBebidas = window.document.getElementById('numeroProdutoMultipBebidas')
    var iBQtyy = window.document.getElementById('iBQty').value;

    numeroProdutoMultipBebidas.innerHTML = iBQtyy + ' x '

    if(iBeverageSelection == 'selecting Drinks'){
        previsionBebidas.style.display = "none";
    }
    else{
        previsionBebidas.style.display = "flex";
        leftOther.style.display = "block" ; 
        left.style.display = 'none';
    };


    var precoNumerarioB = window.document.getElementById('precoNumerarioB')

    if(iBeverageSelection == 'coffee' ){
        var novaPhoto = '../Images/café.png'
        window.document.getElementById('photoForOrderB').src = novaPhoto
        window.document.getElementById('nameOrderB').innerHTML = iBeverageSelection
        precoNumerarioB.innerHTML = 500

    }
    else if(iBeverageSelection == "champagne"){
        precoNumerarioB.innerHTML = 1492;
        var newPicture = '../Images/chapanhe.png';
        window.document.getElementById('photoForOrderB').src = newPicture;
        window.document.getElementById('nameOrderB').innerHTML = iBeverageSelection
    }
    else if(iBeverageSelection == 'Chamomile Tea'){
        var novaPhoto = '../Images/chá.jpg'
        window.document.getElementById('photoForOrderB').src = novaPhoto
        window.document.getElementById('nameOrderB').innerHTML = iBeverageSelection
        precoNumerarioB.innerHTML = 200
    }
    else if(iBeverageSelection == 'soda'){
        var novaPhoto = '../Images/SemFoto.png'
        window.document.getElementById('photoForOrderB').src = novaPhoto
        window.document.getElementById('nameOrderB').innerHTML = iBeverageSelection
        precoNumerarioB.innerHTML = 358
    }
    else if(iBeverageSelection == 'water'){
        var novaPhoto = '../Images/SemFoto.png'
        window.document.getElementById('photoForOrderB').src = novaPhoto
        window.document.getElementById('nameOrderB').innerHTML = iBeverageSelection
        precoNumerarioB.innerHTML = 430
    }
       
}

/*-----------------Configuração de Adicionar ao carinho para comidas-------------------------------------*/
let AddToCart2 = window.document.querySelector('.cart')
AddToCart2.addEventListener('click', Adicionar2)

function Adicionar2() {
    let cartList = window.document.querySelector('.cartList-items')
    let cartMain = window.document.querySelector('.cartList-main')
    let cartIcon2 = window.document.getElementById('cartIcon')

    let multComidas1 = window.document.getElementById('iFQty').value
    let precoComidas1 = window.document.getElementById('precoNumerario').value
    let selectedThing2 = window.document.getElementById('iFoodSelection').value

    let  pResulta1 = Number(precoComidas1*multComidas1) //valor do produto selecionado 
    let cartMoney = window.document.getElementById('cartM')
    let valoresPareAdicionados = window.document.getElementById('valoresPareAdicionados')

    if(!valoresPareAdicionados.innerText.includes(pResulta1) && pResulta1 != 0){
        valoresPareAdicionados.innerHTML += `<p>${pResulta1}</p>`
    }
    if (!cartList.innerText.includes(selectedThing2) && selectedThing2 != 'selecting') {
        cartIcon2.src = '../Images/online-store-cart-withContent.png'
        cartList.innerHTML += `<li> ${multComidas1} x  ${selectedThing2}</li>`;
        alert('Item added')
        cartMain.style.backgroundColor = 'rgba(0, 0, 0, 0.95)'
    }

    // Seleciona a div que contém os valores
    const valoresContainer = document.getElementById('valoresPareAdicionados');
    // Seleciona todos os elementos dentro da div
    const valores = valoresContainer.querySelectorAll('p');
    let soma = 0;
    
    // Itera sobre os elementos e soma os valores
    valores.forEach(elemento => {
        soma += parseFloat(elemento.textContent) || 0;
    });
    
    // Exibe o resultado na div de resultado
    cartMoney.innerHTML = soma+",00"     
    

    /*Configuracao de input de container only input oculto*/
    let containerOnly = window.document.getElementById('containerOnly');
    if(!containerOnly.value.includes(selectedThing2) && selectedThing2!="selecting"){
        containerOnly.value += selectedThing2+" x "+multComidas1+",  " 
    }  
    
    valorReadOnly.value = soma 
    dataReadOnly.value = iData.value
}/*Fim da função Adicionar ao carinho para ala de comidas*/




/*---------------------Configuração de Adicionar ao carinho Bebidas-----------------------------*/
let AddToCart = window.document.querySelector('.cart')
let cartList = window.document.querySelector('.cartList-items')
let cartMain = window.document.querySelector('.cartList-main')
let cartIcon2 = window.document.getElementById('cartIcon')
AddToCart.addEventListener('click', Adicionar)

function Adicionar() {
    let multComidas = window.document.getElementById('iBQty').value
    let precoComidas = window.document.getElementById('precoNumerarioB').value
    let iBeverageSelection2 = window.document.getElementById('iBeverageSelection').value

    let  pResulta = Number(precoComidas*multComidas) //valor do produto selecionado 
    let cartMoney = window.document.getElementById('cartM')
    let valoresPareAdicionados = window.document.getElementById('valoresPareAdicionados')
    if(!valoresPareAdicionados.innerText.includes(pResulta)&& pResulta != 0){
        valoresPareAdicionados.innerHTML += `<p> ${pResulta} </p>`
    }


    if (!cartList.innerText.includes(iBeverageSelection2) && iBeverageSelection2 != 'selecting Drinks') {
        cartIcon2.src = '../Images/online-store-cart-withContent.png'
        cartList.innerHTML += `<li>${multComidas} x ${iBeverageSelection2}</li>`;
        cartMain.style.backgroundColor = 'rgba(0, 0, 0, 0.95)'
        alert('Item added')
    }

        // Seleciona a div que contém os valores
        const valoresContainer = document.getElementById('valoresPareAdicionados');
        // Seleciona todos os elementos dentro da div
        const valores = valoresContainer.querySelectorAll('p');
        let soma = 0;
    
        // Itera sobre os elementos e soma os valores
        valores.forEach(elemento => {
            soma += parseFloat(elemento.textContent) || 0;
        });
    
        // Exibe o resultado na div de resultado
        cartMoney.innerHTML = soma+',00';

    let containerOnly = window.document.getElementById('containerOnly');

    if(!containerOnly.value.includes(iBeverageSelection2) && iBeverageSelection2 != "selecting Drinks"){
        containerOnly.value += iBeverageSelection2+" x "+multComidas+",  ";
    }

    valorReadOnly.value = soma
    dataReadOnly.value = iData.value
}
/*Fim da função Adicionar ao carinho para ala de bebidas*/



document.addEventListener('DOMContentLoaded', () => {
    let cartIcon = window.document.getElementById('cartIcon')
    let cartMain = window.document.querySelector('.cartList-main')
    cartIcon.addEventListener('click', () => {
        let backgroundC = window.getComputedStyle(cartMain).backgroundColor
        if (backgroundC === "rgb(255, 255, 255)") {
            alert('Cart empty');
        } else {
            cartMain.style.display = "flex";
        }
    });


    let cancelpBtn = window.document.querySelector('.cancel-p-btn')
    cancelpBtn.addEventListener('click', hideCarlist)
    function hideCarlist(){
    cartMain.style.display = 'none'
    //window.location = "../Restaurants/julsbar.html"
    }
});



function exibirValor2(){
    var numeroProdutoMultip = window.document.getElementById('numeroProdutoMultipBebidas')
    var iBQtyy = window.document.getElementById('iBQty').value;

    numeroProdutoMultip.innerHTML = iBQtyy + ' x '
    
}

/*---------------Inclued Delivery Service-------------------------- */

var yes = window.document.getElementById('yes')
var no = window.document.getElementById('no')
var lab_yes = window.document.getElementById('lab_yes')
var lab_no = window.document.getElementById('lab_no')
let selfPickUp = window.document.querySelector('.Self-pick-up')

yes.addEventListener('click', incluedService,)
no.addEventListener('click', notIncluedService,)

function incluedService(){
    if(yes.checked){
        let Local = window.document.querySelector('.local')
        lab_yes.style.color = '#0f4380'
        lab_no.style.color = 'white'
    }
}

function notIncluedService(){
    if(no.checked){
        lab_no.style.color = '#0f4380'
        lab_yes.style.color = 'white'
    }
}

let subm = window.document.getElementById('subm')
subm.addEventListener('click', redicionar)

function redicionar(){
    window.location = '../Restaurants/delivery.html'
}

