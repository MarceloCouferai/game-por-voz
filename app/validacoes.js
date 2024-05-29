function verificaChuteValido(chute) {
    const numero =  chute; //converte para inteiro

    if (chuteForInvalido(numero)) { 
        return elementoChute.innerHTML = '<div class="erro">Somente números!</div>';
    }

    if(numeroForMaiorOuMenorQueOLimite(numero)){
        elementoChute.innerHTML += `<div class="erro">O valor deve ser maior que ${menorValor} e
        menor que ${maiorValor}.</div>`
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numero}</h3>
        <button class="button" onclick="atualizarPagina()">Reiniciar game</button> 
        `
    }
    if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div class="erro">O número secreto é menor <i class="fa-solid fa-arrow-down"> </i></div>
        `
    }else{
        elementoChute.innerHTML +=  `
        <div class="erro">O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }

}

function chuteForInvalido(numero) { //valida se é number ou não
    return isNaN(parseFloat(numero));
}

function numeroForMaiorOuMenorQueOLimite(numero){
    return numero > maiorValor || numero < menorValor;
}

function atualizarPagina(){
    window.location.reload();
}