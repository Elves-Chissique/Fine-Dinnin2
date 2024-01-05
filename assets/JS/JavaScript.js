
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
    window.location = '#Restaurants'
    RestButton.style.transition = '3s'
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