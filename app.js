let listaNumerosSorteados=[];
let numeroLimiteDeSorteios = 10; 
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
exibirMsgInicial();

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0});
}

function exibirMsgInicial () {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela ('p', 'Escolha um número de 1 a 10 ');    
}

function verificarChute () {
    let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'Parabéns');
        let palavraTentativas = tentativas > 1? 'tentativas':'tentativa';
        let numeroTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas} !`;
            exibirTextoNaTela ('p', numeroTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela ( 'p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela ('p', 'O número secreto é maior');
        }
        tentativas++
        limparCampo();
       
    }
 }

function limparCampo (){
    chute=document.querySelector ('input');
    chute.value ='';
}


function numeroAleatorio () {
    let numeroSorteado = parseInt (Math.random() *numeroLimiteDeSorteios + 1);
    let qntDeNumerosSorteados = listaNumerosSorteados.length; 
    if (qntDeNumerosSorteados == numeroLimiteDeSorteios) {
        listaNumerosSorteados=[]
    }
    if (listaNumerosSorteados.includes(numeroSorteado)){
    return numeroAleatorio(); 
    } else {
     listaNumerosSorteados.push(numeroSorteado);
     console.log (listaNumerosSorteados);
       return numeroSorteado;
        }
}

function reiniciarJogo(){
    tentativas = 1;
    exibirMsgInicial();
    numeroSecreto = numeroAleatorio();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'Jogo do número secreto'; 

/*let paragrafo = document.querySelector ('p');
paragrafo.innerHTML = 'Escolha um número de 1 a 10'; */


/*function verificarChute () {
    let chute = document.querySelector ('input').value;
    console.log (`O chute é igual ao número secreto: ${chute ==numeroSecreto}`);
    console.log (numeroSecreto);
    console.log (chute);
}*/