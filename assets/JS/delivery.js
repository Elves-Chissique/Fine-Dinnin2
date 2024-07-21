document.addEventListener('DOMContentLoaded', function() {
    var deliverySelected = document.querySelector('#yes');
    
    if (deliverySelected) {
        console.log("Elemento com ID #yes encontrado.");
        deliverySelected.addEventListener('change', function() {
            if (deliverySelected.checked) {
                getLocation();
            }
        });
    } else {
        console.error("Elemento com ID #yes não encontrado.");
    }
});

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
