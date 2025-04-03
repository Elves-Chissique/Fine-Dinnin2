let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => (slide.style.display = "none"));
  slideIndex = (slideIndex + 1) > slides.length ? 1 : slideIndex + 1;
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides, 6000);
}
showSlides();

const DateInput = window.document.getElementById('DateInput')
const TimeInput = window.document.getElementById('TimeInput')

DateInput.value = "01/01/2025"

TimeInput.value = "12:00"


let People = window.document.getElementById('People');

People.addEventListener("change", () => {
    // Obtém o <option> selecionado
    let selectedOption = People.options[People.selectedIndex];

    // Verifica se o <option> possui a classe 'other'
    if (selectedOption.classList.contains('other')) {
       let number= prompt('Insert the number of People');
       selectedOption.value = "sim"
    }
});


/*-----------------------------ABA de Table booking------------------------------------*/
let nextBtn = document.getElementById('nextBtn')
let fistInfo= window.document.querySelector('.first-info')
let secondInfo = window.document.querySelector('.second-info') 

nextBtn.addEventListener('click', estouOn)

function estouOn(){
  fistInfo.style.marginTop = "-100%"
  fistInfo.style.transition = ".6s"

  setTimeout(()=>{
    secondInfo.style.marginTop = '43%'
    secondInfo.style.transition = ".6s"  
  },500)
}

//Food dietary Restriction Area

  let yes = window.document.getElementById('yes')
  let no = window.document.getElementById('no')



  no.addEventListener("change", simOuNao)
  yes.addEventListener("change", simOuNao)
   
  function simOuNao(){
    let ifYes = window.document.querySelector('.if-yes')
    if(no.checked){
      ifYes.style.backgroundColor = "#07366b00"
    }
    if(yes.checked){
      ifYes.style.backgroundColor = "rgb(141, 4, 4)"
    }

  }

  //----------------------------------------------------------------------------------------------------
  let ifYes2 = window.document.querySelector('.if-yes2')

  ifYes2.addEventListener('')
  


/*-----------------------------ABA de Exibição de comida na areade menu------------------------------*/
let phot1 = window.document.getElementById("phot1")
let phot2 = window.document.getElementById("phot2")
let phot3 = window.document.getElementById("phot3")
let phot4 = window.document.getElementById("phot4")
let phot5 = window.document.getElementById("phot5")
let phot6 = window.document.getElementById("phot6")
let phot7 = window.document.getElementById("phot7")
let phot8 = window.document.getElementById("phot8")
let phot9 = window.document.getElementById("phot9")
let dinamicInfo = window.document.getElementById('dinamicInfo')
let dinamicInfo2 = window.document.getElementById('dinamicInfo2')

phot1.addEventListener('click', info)
phot2.addEventListener('click', info2)
phot3.addEventListener('click', info3)
phot4.addEventListener('click', info4)
phot5.addEventListener('click', info5)
phot6.addEventListener('click', info6)
phot7.addEventListener('click', info7)
phot8.addEventListener('click', info8)
phot9.addEventListener('click', info9)

function info(){
  photPrinc.src = "../Images/food/comida/images 7.jpeg"
  photPrinc.style.marginTop = "-80px"
  photPrinc.style.width = '90%'
  photPrinc.style.borderRadius = '.5em'
  dinamicInfo.innerHTML = "Grilled Chicken Supreme - Flavor and tenderness in Every Bite!"
  dinamicInfo2.innerHTML = "Indulge in our succlent grilled chicken perfectlyseasoned and servred with a fresh salad, golden potatoes and your choice of fluffy rice or soft xima  "
}

function info2(){
  photPrinc.src = "../Images/food/comida/images 8.jpeg"
  photPrinc.style.marginTop = "-80px"
  photPrinc.style.width = '90%'
  photPrinc.style.borderRadius = '.5em'
}

function info3(){
  photPrinc.src = "../Images/food/comida/images 3.jpeg"
  photPrinc.style.marginTop = "-80px"
  photPrinc.style.width = '90%'
  photPrinc.style.borderRadius = '.5em'
}

function info4(){
  photPrinc.src = "../Images/food/comida/images 4.jpeg"
  photPrinc.style.marginTop = "-80px"
  photPrinc.style.width = '90%'
  photPrinc.style.borderRadius = '.5em'
}

function info5(){
  photPrinc.src = "../Images/food/comida/images 5.jpeg"
  photPrinc.style.marginTop = "-80px"
  photPrinc.style.width = '90%'
  photPrinc.style.borderRadius = '.5em'
}

function info6(){
  photPrinc.src = "../Images/food/comida/images 6.jpeg"
  photPrinc.style.marginTop = "-80px"
  photPrinc.style.width = '90%'
  photPrinc.style.borderRadius = '.5em'
}

function info7(){
  photPrinc.src = "../Images/food/comida/images 4.jpeg"
  photPrinc.style.marginTop = "-80px"
  photPrinc.style.width = '90%'
  photPrinc.style.borderRadius = '.5em'
}

function info8(){
  photPrinc.src = "../Images/food/comida/images 5.jpeg"
  photPrinc.style.marginTop = "-80px"
  photPrinc.style.width = '90%'
  photPrinc.style.borderRadius = '.5em'
}

function info9(){
  photPrinc.src = "../Images/food/comida/images 6.jpeg"
  photPrinc.style.marginTop = "-80px"
  photPrinc.style.width = '90%'
  photPrinc.style.borderRadius = '.5em'
}