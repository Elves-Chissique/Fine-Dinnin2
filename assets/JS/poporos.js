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


