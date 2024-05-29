 const elementoChute = document.getElementById('chute');
 
 // incluindo API 
window.SpeechRecognition = window.SpeechRecognition || 
window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();


recognition.addEventListener('result', onSpeak); //adicionando evento no navegador


function onSpeak(e){
    chute = e.results[0][0].transcript; //pega o que foi dito
    exibeChuteNaTela(chute); //chama função
    verificaChuteValido(chute); //chama função
}


function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse: </div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
