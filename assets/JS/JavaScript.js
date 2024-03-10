/*Configuração de slides-carossl*/
let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  
  if (slideIndex >= slides.length) {slideIndex = 0}

  if (slideIndex < 0) {slideIndex = slides.length - 1}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }


  slides[slideIndex].style.display = "flex";
  
}

setInterval(() => {
    plusSlides(1);
}, 4300);



//configuraçãao do segundo carassol
let slideIndexII = 0;
showSlidesII();

function plusSlidesII(a) {
    showSlidesII(slideIndexII += a);
}

function showSlidesII(){
    let c;
    const slidesII = document.getElementsByClassName("slideII");
    if (slideIndex >= slidesII.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slidesII.length - 1}

    for (let c = 0; c < slidesII.length; c++) {
        slidesII[c].style.display = "none";
    }
    slidesII[slideIndex].style.display = "flex";
}


setInterval(() => {
    plusSlidesII(0);
}, 6000);


/*termina aqui a configuração de slides-carossol*/
let formBusinessRegist = window.document.getElementById("formBusinessRegist")
let SecondButton = window.document.getElementById("SecondFormBtn")
let btnRegister = window.document.getElementById('btnRegister')

SecondButton.addEventListener('click', modalNotShow)
btnRegister.addEventListener('click', modalShow)

function modalShow(){
    formBusinessRegist.style.display = "flex"
}

function modalNotShow(){
    formBusinessRegist.style.display = "none"
}
/*-------------configuração de botão Home----------------------------------*/
var Home = window.document.getElementById('Home');
Home.addEventListener('click',backHome)


function backHome(){
    window.location= "index.html"
}

/*---------------- configuração de offcanva lateral-------------------------- */
let contactInitial = window.document.getElementById('contacntInitial')
let RestButton = window.document.getElementById('RestButton')
let chamarContact = window.document.getElementById('chamarContact')
let closeInitial = window.document.getElementById('closeInitial')
let contactText = window.document.getElementById('contactText')

chamarContact.addEventListener('click', showInitial)
closeInitial.addEventListener('click', fecharInicial)
RestButton.addEventListener('click', irpara)

function irpara(){
    window.location = '#Venues'
}

function showInitial(){
    contactInitial.style.width = "30%"
    contactInitial.style.marginLeft = '0%'
    contactInitial.style.height = "100vh"
    contactInitial.style.transition = '.3s'
    closeInitial.style.display = 'inline-block'
    contactText.style.display = 'block'
    contactText.style.transition = '.5s'
}

function fecharInicial(){
    contactInitial.style.width = "0%"
    contactInitial.style.marginLeft = '-10%'
    contactInitial.style.height = "0vh"
    contactInitial.style.transition = '.3s'
    closeInitial.style.display = 'none'
    contactText.style.display = 'none'
}

/*--------------------------------------------------------------------------------------------------------------------- */
let catering1 =  window.document.querySelector('span#catering1')
let catering2 =  window.document.querySelector('span#catering2')
let catering3 =  window.document.querySelector('span#catering3')
let catering4 =  window.document.querySelector('span#catering4')
let catering5 =  window.document.querySelector('span#catering5')
let catering6 =  window.document.querySelector('span#catering6')

let delivery1 =  window.document.querySelector('span#delivery1')
let delivery2 =  window.document.querySelector('span#delivery2')
let delivery3 =  window.document.querySelector('span#delivery3')

/* Chamada por querySelector para Catering Foto e Texto (Mudança automática de foto e textos)*/
let cateringFoto =  window.document.querySelector('span#cateringFoto')
var cateringText =  window.document.querySelector('span#cateringText')
let cateringFoto2 =  window.document.querySelector('span#cateringFoto2')
var cateringText2 =  window.document.querySelector('span#cateringText2') //Serviços de catering
let cateringFoto3 =  window.document.querySelector('span#cateringFoto3')
var cateringText3 =  window.document.querySelector('span#cateringText3')
let cateringFoto4 =  window.document.querySelector('span#cateringFoto4')
var cateringText4 =  window.document.querySelector('span#cateringText4')
let cateringFoto5 =  window.document.querySelector('span#cateringFoto5')
var cateringText5 =  window.document.querySelector('span#cateringText5') //Serviços de catering
let cateringFoto6 =  window.document.querySelector('span#cateringFoto6')
var cateringText6 =  window.document.querySelector('span#cateringText6')

let deliveryFoto1 =  window.document.querySelector('span#deliveryFoto1')
var deliveryText1 =  window.document.querySelector('span#deliveryText1')
let deliveryFoto2 =  window.document.querySelector('span#deliveryFoto2') //Serviços de dlivery
var deliveryText2 =  window.document.querySelector('span#deliveryText2')
let deliveryFoto3 =  window.document.querySelector('span#deliveryFoto3')
var deliveryText3 =  window.document.querySelector('span#deliveryText3')



/*Chamada por querySelctor para cateringH (Mudança de cor dos titulos nos catering) */
let cateringH1 = window.document.querySelector('span#cateringH1')
let cateringH2 = window.document.querySelector('span#cateringH2') //Serviços de catering
let cateringH3 = window.document.querySelector('span#cateringH3')
let cateringH4 = window.document.querySelector('span#cateringH4')
let cateringH5 = window.document.querySelector('span#cateringH5') //Serviços de catering
let cateringH6 = window.document.querySelector('span#cateringH6')

let deliveryH1 = window.document.querySelector('span#deliveryH1')
let deliveryH2 = window.document.querySelector('span#deliveryH2')  //serviços de delivery
let deliveryH3 = window.document.querySelector('span#deliveryH3')


/*Adicionando o Eventos e funções para a primeira div*/
catering1.addEventListener('mouseover',mudarParaTexto)
catering1.addEventListener('mouseout',mudarParaFoto)

function mudarParaTexto(){
    var cateringText =  window.document.querySelector('span#cateringText')
    cateringFoto.style.width = '0px'
    cateringFoto.style.hight = '0px'
    cateringFoto.style.opacity = '0'
    cateringFoto.style.transition = '0.5s'


    cateringText.style.fontSize = '13.1pt'
    cateringText.style.transition = '0.3s'
    cateringText.style.width = '290px'
    cateringText.style.hight = '300px'
    cateringText.style.opacity = '1'

    cateringH1.style.color = "#fff"
    cateringH1.style.transition = '0.5s'

}

function mudarParaFoto(){
    cateringFoto.style.width = '290px'
    cateringFoto.style.opacity = '1'
    cateringFoto.style.transition = '0.7s'
    cateringFoto.style.hight = '200px'

    cateringText.style.transition = '.3s'
    cateringText.style.width = '290'
    cateringText.style.hight = '0'
    cateringText.style.fontSize = '0px'

    cateringH1.style.color = "#000"
    cateringH1.style.transition = '0.5s'
}


/*Adicionando o Eventos e funções para a segunda div*/
catering2.addEventListener('mouseover',mudarParaTexto2)
catering2.addEventListener('mouseout',mudarParaFoto2)

function mudarParaTexto2(){
    cateringFoto2.style.width = '0px'
    cateringFoto2.style.hight = '0px'
    cateringFoto2.style.opacity = '0'
    cateringFoto2.style.transition = '0.5s'


    cateringText2.style.fontSize = '13.1pt'
    cateringText2.style.transition = '0.3s'
    cateringText2.style.width = '290px'
    cateringText2.style.hight = '300px'
    cateringText2.style.opacity = '1'

    cateringH2.style.color = "#fff"
    cateringH2.style.transition = '0.5s'

}

function mudarParaFoto2(){
    cateringFoto2.style.width = '290px'
    cateringFoto2.style.opacity = '1'
    cateringFoto2.style.transition = '0.7s'
    cateringFoto2.style.hight = '200px'

    cateringText2.style.transition = '.3s'
    cateringText2.style.width = '290'
    cateringText2.style.hight = '0'
    cateringText2.style.fontSize = '0px'

    cateringH2.style.color = "#000"
    cateringH2.style.transition = '0.5s'
}



/*Adicionando o Eventos e funções para a terceira div*/
catering3.addEventListener('mouseover',mudarParaTexto3)
catering3.addEventListener('mouseout',mudarParaFoto3)

function mudarParaTexto3(){
    cateringFoto3.style.width = '0px'
    cateringFoto3.style.hight = '0px'
    cateringFoto3.style.opacity = '0'
    cateringFoto3.style.transition = '0.5s'


    cateringText3.style.fontSize = '13.1pt'
    cateringText3.style.transition = '0.3s'
    cateringText3.style.width = '290px'
    cateringText3.style.hight = '300px'
    cateringText3.style.opacity = '1'

    cateringH3.style.color = "#fff"
    cateringH3.style.transition = '0.5s'

}

function mudarParaFoto3(){
    cateringFoto3.style.width = '290px'
    cateringFoto3.style.opacity = '1'
    cateringFoto3.style.transition = '0.7s'
    cateringFoto3.style.hight = '200px'

    cateringText3.style.transition = '.3s'
    cateringText3.style.width = '290'
    cateringText3.style.hight = '0'
    cateringText3.style.fontSize = '0px'

    cateringH3.style.color = "#000"
    cateringH3.style.transition = '0.5s'
}


/*Adicionando o Eventos e funções para a quarta div*/
catering4.addEventListener('mouseover',mudarParaTexto4)
catering4.addEventListener('mouseout',mudarParaFoto4)

function mudarParaTexto4(){
    cateringFoto4.style.width = '0px'
    cateringFoto4.style.hight = '0px'
    cateringFoto4.style.opacity = '0'
    cateringFoto4.style.transition = '0.5s'


    cateringText4.style.fontSize = '13.1pt'
    cateringText4.style.transition = '0.3s'
    cateringText4.style.width = '290px'
    cateringText4.style.hight = '300px'
    cateringText4.style.opacity = '1'

    cateringH4.style.color = "#fff"
    cateringH4.style.transition = '0.5s'

}

function mudarParaFoto4(){
    cateringFoto4.style.width = '290px'
    cateringFoto4.style.opacity = '1'
    cateringFoto4.style.transition = '0.7s'
    cateringFoto4.style.hight = '200px'

    cateringText4.style.transition = '.3s'
    cateringText4.style.width = '290'
    cateringText4.style.hight = '0'
    cateringText4.style.fontSize = '0px'

    cateringH4.style.color = "#000"
    cateringH4.style.transition = '0.5s'
}


/*Adicionando o Eventos e funções para a quinta div*/
catering5.addEventListener('mouseover',mudarParaTexto5)
catering5.addEventListener('mouseout',mudarParaFoto5)

function mudarParaTexto5(){
    cateringFoto5.style.width = '0px'
    cateringFoto5.style.hight = '0px'
    cateringFoto5.style.opacity = '0'
    cateringFoto5.style.transition = '0.5s'


    cateringText5.style.fontSize = '13.1pt'
    cateringText5.style.transition = '0.3s'
    cateringText5.style.width = '290px'
    cateringText5.style.hight = '300px'
    cateringText5.style.opacity = '1'

    cateringH5.style.color = "#fff"
    cateringH5.style.transition = '0.5s'

}

function mudarParaFoto5(){
    cateringFoto5.style.width = '290px'
    cateringFoto5.style.opacity = '1'
    cateringFoto5.style.transition = '0.7s'
    cateringFoto5.style.hight = '200px'

    cateringText5.style.transition = '.3s'
    cateringText5.style.width = '290'
    cateringText5.style.hight = '0'
    cateringText5.style.fontSize = '0px'

    cateringH5.style.color = "#000"
    cateringH5.style.transition = '0.5s'
}

/*Adicionando o Eventos e funções para a sext6 div*/
catering6.addEventListener('mouseover',mudarParaTexto6)
catering6.addEventListener('mouseout',mudarParaFoto6)

function mudarParaTexto6(){
    
    cateringFoto6.style.width = '0px'
    cateringFoto6.style.hight = '0px'
    cateringFoto6.style.opacity = '0'
    cateringFoto6.style.transition = '0.5s'


    cateringText6.style.fontSize = '13.1pt'
    cateringText6.style.transition = '0.3s'
    cateringText6.style.width = '290px'
    cateringText6.style.hight = '300px'
    cateringText6.style.opacity = '1'

    cateringH6.style.color = "#fff"
    cateringH6.style.transition = '0.5s'

}

function mudarParaFoto6(){
    cateringFoto6.style.width = '290px'
    cateringFoto6.style.opacity = '1'
    cateringFoto6.style.transition = '0.7s'
    cateringFoto6.style.hight = '200px'

    cateringText6.style.transition = '.3s'
    cateringText6.style.width = '290'
    cateringText6.style.hight = '0'
    cateringText6.style.fontSize = '0px'

    cateringH6.style.color = "#000"
    cateringH6.style.transition = '0.5s'
}

/*----------Selecionamento de categoria de restaurantes, caterings e tableBookings------*/

function escutar(){
    var titleInfo = window.document.getElementById('titleInfo')
    var restaurantes = window.document.getElementById('restaurantes')
    var tableBookings = window.document.getElementById('tableBookings')
    var caterings = window.document.getElementById('caterings')

    let RadioRest = window.document.getElementById('Rrestaurants')
    let RadioTableB = window.document.getElementById('RtableB')
    let RadioCaterings = window.document.getElementById('Rcaterings')
    let RadioAll = window.document.getElementById('Rall')


    if(RadioAll.checked){
        titleInfo.innerHTML = ' '
        restaurantes.style.display = "block"
        tableBookings.style.display = "block"
        caterings.style.display = "block"
    }
    
    if(RadioCaterings.checked){
        titleInfo.innerHTML = 'find below all venues that provide catering services'
        restaurantes.style.display = "none"
        tableBookings.style.display = "none"
        caterings.style.display = "block"
        
    }

    if(RadioRest.checked){
        titleInfo.innerHTML = 'find below all Restaurants, choose one and make your order'
        restaurantes.style.display = "block"
        tableBookings.style.display = "none"
        caterings.style.display = "none"
    }

    if(RadioTableB.checked){
        titleInfo.innerHTML = 'you can make a table reservation here'
        restaurantes.style.display = "none"
        tableBookings.style.display = "block"
        caterings.style.display = "none"
    }
};


/* --------------configuração de modal for business registration---------------------- */

