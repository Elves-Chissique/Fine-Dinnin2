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



//configuraçãao do segundo carossel
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

/*configuração de botão de menu para mobile phone*/
let menu_humburguer = window.document.querySelector('#menu-humburguer')
let mobileCentral = window.document.querySelector('#mobileCentral')
let menu_fechar = window.document.querySelector('#menu-fechar')
let logo_mobile = window.document.querySelector('.logo-mobile')

menu_humburguer.addEventListener('click', chamarMenuFechar)
menu_fechar.addEventListener('click', chamarMenuHumbuguer)

function chamarMenuFechar(){ /*função para Abrir menu*/
    menu_fechar.style.display = 'block'
    menu_humburguer.style.display = 'none'
    mobileCentral.style.marginTop = '2.5em'
    mobileCentral.style.position = 'fixed'
    mobileCentral.style.transition = '1s'
    logo_mobile.style.display = 'none'
}
function chamarMenuHumbuguer(){ /*função para fechar menu*/
    menu_fechar.style.display = 'none'
    menu_humburguer.style.display = 'block'
    mobileCentral.style.marginTop = '-100%'
    mobileCentral.style.transition = '1s'

    logo_mobile.style.display = 'flex'
    
    logo_mobile.style.marginTop = '.5em'
}

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
/*-------------configuração de butões----------------------------------*/
var Home = window.document.getElementById('Home');
var phoneA = window.document.getElementById('phoneA');
let RestButton = window.document.getElementById('RestButton')
Home.addEventListener('click',backHome)
phoneA.addEventListener('click',goPhoneA)
RestButton.addEventListener('click', goRestaurant)


function backHome(){
    window.location= "index.html"
}

function goPhoneA(){
    window.location = '#contactA'
}

function goRestaurant(){
    window.location = '#resttt'
    RestButton.style.transition = '2s'
}

/*---------------- configuração de offcanva lateral-------------------------- */
let contactInitial = window.document.getElementById('contacntInitial')
let chamarContact = window.document.getElementById('chamarContact')
let contactInitialMobile = window.document.getElementById('contactInitialMobile')
let closeInitial = window.document.getElementById('closeInitial')
let contactText = window.document.getElementById('contactText')

chamarContact.addEventListener('click', showInitial)
closeInitial.addEventListener('click', fecharInicial)
contactInitialMobile.addEventListener('click', showInitialMobile)


function showInitialMobile(){
    contactInitial.style.width = "100%"
    contactInitial.style.marginLeft = '0%'
    contactInitial.style.marginTop = '2.5em'
    contactInitial.style.height = "100vh"
    contactInitial.style.transition = '.3s'
    closeInitial.style.display = 'inline-block'
    contactText.style.display = 'block'
    contactText.style.transition = '.5s'
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
    contactInitial.style.marginLeft = '-100%'
    contactInitial.style.height = "0vh"
    contactInitial.style.transition = '.3s'
    closeInitial.style.display = 'none'
    contactText.style.display = 'none'
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


/*configuração de animação de imagens e letras do site */

let elements = window.document.querySelectorAll('.hidden-fig')
let fried = window.document.querySelectorAll('.opacity-style')

let myobserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('shown-fig')
        }
        else{
            entry.target.classList.remove('shown-fig') 
        }
    })
})
elements.forEach((element)=>myobserver.observe(element))

let myOtherObs = new IntersectionObserver((entradas)=>{
    entradas.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('normal-view')
        }
        else{
            entry.target.classList.remove('normal-view')
        }
    })
})

fried.forEach((element)=> myOtherObs.observe(element))