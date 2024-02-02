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

iData.innerHTML = soData+":"+soMes+":"+soAno
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
        var iBeverageSelection = window.document.getElementById('iBeverageSelection')

        iBeverageSelection.style.display = 'none'
    }
}


function verificarIFood2(){
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
    fundoComentario.style.display = 'flex'
}

function fecharCampoComentario(){
    fundoComentario.style.display = 'none'
}