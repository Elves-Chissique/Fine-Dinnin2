
function getLocation() {
    console.log("Função getLocation chamada.");
    const output = document.getElementById('localizacao');

    if (navigator.geolocation) {
        console.log("Geolocalização é suportada.");
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        output.textContent = "Geolocalização não é suportada por este navegador.";
    }
}

function showPosition(position) {
    console.log("Função showPosition chamada.");
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`)
        .then(response => {
            console.log("Resposta da API de geocodificação recebida.");
            return response.json();
        })
        .then(data => {
            console.log("Dados de geocodificação processados.");
            if (data.address) {
                const endereco = data.address;
                const localizacao = `${endereco.city || endereco.town || endereco.village || ''}, ${endereco.state || ''}, ${endereco.country || ''}`;
                document.getElementById('localizacao').textContent = `Localização: ${localizacao}`;
            } else {
                document.getElementById('localizacao').textContent = "Não foi possível obter o endereço.";
            }
        })
        .catch(error => {
            document.getElementById('localizacao').textContent = "Ocorreu um erro ao obter o endereço.";
            console.error(error);
        });
}

function showError(error) {
    console.log("Função showError chamada.");
    let mensagemErro;

    switch(error.code) {
        case error.PERMISSION_DENIED:
            mensagemErro = "Usuário negou a solicitação de Geolocalização.";
            break;
        case error.POSITION_UNAVAILABLE:
            mensagemErro = "Informação de localização não está disponível.";
            break;
        case error.TIMEOUT:
            mensagemErro = "A solicitação para obter a localização expirou.";
            break;
        case error.UNKNOWN_ERROR:
            mensagemErro = "Ocorreu um erro desconhecido.";
            break;
    }

    document.getElementById('localizacao').textContent = mensagemErro;
    console.error(mensagemErro);
}


/*---------------------------------Configuraçãoa de BATN de delivery------------------------------------*/

let btnMain = window.document.querySelector('.btn-main');
let btnChild = window.document.querySelector('.btn-child');

btnMain.addEventListener('click', ondeEstou);

// Função que será chamada quando o botão principal for clicado
function ondeEstou() {
    // Obtém os estilos computados do btnMain após as mudanças
    let computedStyle = window.getComputedStyle(btnMain);

    if (computedStyle.backgroundColor === 'rgb(0, 0, 0)') {
        btnMain.style.backgroundColor = 'rgb(0,128,0)';
        btnMain.style.justifyContent = 'right'; // Alterado para textAlign

        let local = window.document.querySelector('.local');
        let digitLocal = window.document.querySelector('.digit-local');
        let deliveryForm = window.document.querySelector('.delivery-form');
        let SelfPickUp = window.document.querySelector('.Self-pick-up');
        let textAreaDelivery = window.document.querySelector('.text-area-delivery')

        local.style.display = 'flex'
        SelfPickUp.style.display = 'none'
        digitLocal.style.display = 'flex'
        textAreaDelivery.style.display = 'flex'
        deliveryForm.style.width = '95%'
        deliveryForm.style.transition = '.5s'
    }
    else{
        btnMain.style.backgroundColor = 'rgb(0,0,0)';
        btnMain.style.justifyContent = 'left'; // Alterado para textAlign


        let local = window.document.querySelector('.local');
        let digitLocal = window.document.querySelector('.digit-local');
        let deliveryForm = window.document.querySelector('.delivery-form');
        let SelfPickUp = window.document.querySelector('.Self-pick-up');
        let textAreaDelivery = window.document.querySelector('.text-area-delivery')

        local.style.display = 'none'
        SelfPickUp.style.display = 'flex'
        digitLocal.style.display = 'none'
        textAreaDelivery.style.display = 'none'
        deliveryForm.style.width = '50%'
    }
}

//configuracao metodo payment
let seta_cima = window.document.querySelector('.seta_cima')
let seta_baixo = window.document.querySelector('.seta_baixo')
let show_payment_methods = window.document.querySelector('.show-payment-methods')
seta_cima.addEventListener('click', cimaBaixo)
seta_baixo.addEventListener('click', baixoCima)

function cimaBaixo(){
    seta_cima.classList.add('Ocultar_Cima');
    seta_cima.classList.remove('seta_cima')

    seta_baixo.classList.add('mostrar_baixo');
    seta_baixo.classList.remove('seta_baixo')

    show_payment_methods.classList.add('show-payment-methods-after')
    show_payment_methods.classList.remove('show-payment-methods')
}

function baixoCima(){
    seta_cima.classList.remove('Ocultar_Cima');
    seta_cima.classList.add('seta_cima')

    seta_baixo.classList.remove('mostrar_baixo')
    seta_baixo.classList.add('seta_baixo')

    show_payment_methods.classList.remove('show-payment-methods-after')
    show_payment_methods.classList.add('show-payment-methods')
    
}

