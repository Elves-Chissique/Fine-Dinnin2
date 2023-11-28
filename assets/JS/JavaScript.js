
let catering1 =  window.document.querySelector('span#catering1')
let catering2 =  window.document.querySelector('span#catering2')
let catering3 =  window.document.querySelector('span#catering3')

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

/* ---------------------------------Aqui começa a configuração das funçoes dos serviços de Delivery------------------------------ */

/*Adicionando o Eventos e funções para a primeira div de serviços de delivery*/
delivery1.addEventListener('mouseover',mudarParaTextoDelivery)
delivery1.addEventListener('mouseout',mudarParaFotoDelivery)

function mudarParaTextoDelivery(){
    deliveryFoto1.style.width = '0px'
    deliveryFoto1.style.hight = '0px'
    deliveryFoto1.style.opacity = '0'
    deliveryFoto1.style.transition = '0.5s'


    deliveryText1.style.fontSize = '13.1pt'
    deliveryText1.style.transition = '0.3s'
    deliveryText1.style.width = '290px'
    deliveryText1.style.hight = '300px'
    deliveryText1.style.opacity = '1'

    deliveryH1.style.color = "#fff"
    deliveryH1.style.transition = '0.5s'

}

function mudarParaFotoDelivery(){
    deliveryFoto1.style.width = '290px'
    deliveryFoto1.style.opacity = '1'
    deliveryFoto1.style.transition = '0.7s'
    deliveryFoto1.style.hight = '200px'

    deliveryText1.style.transition = '.3s'
    deliveryText1.style.width = '290'
    deliveryText1.style.hight = '0'
    deliveryText1.style.fontSize = '0px'

    deliveryH1.style.color = "#000"
    deliveryH1.style.transition = '0.5s'
}



/*Adicionando o Eventos e funções para a segunda div de serviços de delivery*/
delivery2.addEventListener('mouseover',mudarParaTextoDelivery2)
delivery2.addEventListener('mouseout',mudarParaFotoDelivery2)

function mudarParaTextoDelivery2(){
    deliveryFoto2.style.width = '0px'
    deliveryFoto2.style.hight = '0px'
    deliveryFoto2.style.opacity = '0'
    deliveryFoto2.style.transition = '0.5s'


    deliveryText2.style.fontSize = '13.1pt'
    deliveryText2.style.transition = '0.3s'
    deliveryText2.style.width = '290px'
    deliveryText2.style.hight = '300px'
    deliveryText2.style.opacity = '1'

    deliveryH2.style.color = "#fff"
    deliveryH2.style.transition = '0.5s'

}

function mudarParaFotoDelivery2(){
    deliveryFoto2.style.width = '290px'
    deliveryFoto2.style.opacity = '1'
    deliveryFoto2.style.transition = '0.7s'
    deliveryFoto2.style.hight = '200px'

    deliveryText2.style.transition = '.3s'
    deliveryText2.style.width = '290'
    deliveryText2.style.hight = '0'
    deliveryText2.style.fontSize = '0px'

    deliveryH2.style.color = "#000"
    deliveryH2.style.transition = '0.5s'
}



/*Adicionando o Eventos e funções para a terceira div de serviços de delivery*/
delivery3.addEventListener('mouseover',mudarParaTextoDelivery3)
delivery3.addEventListener('mouseout',mudarParaFotoDelivery3)

function mudarParaTextoDelivery3(){
    deliveryFoto3.style.width = '0px'
    deliveryFoto3.style.hight = '0px'
    deliveryFoto3.style.opacity = '0'
    deliveryFoto3.style.transition = '0.5s'


    deliveryText3.style.fontSize = '13.1pt'
    deliveryText3.style.transition = '0.3s'
    deliveryText3.style.width = '290px'
    deliveryText3.style.hight = '300px'
    deliveryText3.style.opacity = '1'

    deliveryH3.style.color = "#fff"
    deliveryH3.style.transition = '0.5s'

}

function mudarParaFotoDelivery3(){
    deliveryFoto3.style.width = '290px'
    deliveryFoto3.style.opacity = '1'
    deliveryFoto3.style.transition = '0.7s'
    deliveryFoto3.style.hight = '200px'

    deliveryText3.style.transition = '.3s'
    deliveryText3.style.width = '290'
    deliveryText3.style.hight = '0'
    deliveryText3.style.fontSize = '0px'

    deliveryH3.style.color = "#000"
    deliveryH3.style.transition = '0.5s'
}