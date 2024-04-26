function iniciarContagem() {
    const dataEvento = new Date(document.getElementById('eventoData').value);
    const now = new Date().getTime();
    const diferenca = dataEvento - now;

    if (diferenca < 0) {
        document.getElementById('contagemRegressiva').innerHTML = "O evento começou!";
        alert("Evento começou!!!");
        return;
    }

    const intervalo = setInterval(function() {
        const now = new Date().getTime();
        const diferenca = dataEvento - now;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        document.getElementById('contagemRegressiva').innerHTML =
            `Tempo restante: ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;

        if (diferenca < 0) {
            clearInterval(intervalo);
            document.getElementById('contagemRegressiva').innerHTML = "O evento começou!";
            alert("Evento começou!!!");
        }
    }, 1000);
}

function cancelarContagem() {
    document.getElementById('contagemRegressiva').innerHTML = "Contagem Regressiva Cancelada";
    clearInterval(intervalo);
}