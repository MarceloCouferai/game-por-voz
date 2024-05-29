const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

//adicionando valor da variavel dentro do span no index.html
const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;



function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1); //gerando número aleatório com Math.random()
}
