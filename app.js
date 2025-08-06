//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listAmigos = [];

function adicionarAmigo(){
    let nomeAmigos = document.getElementById('amigo').value;
    if(listAmigos.includes(nomeAmigos)){
        alert(`Nome "${nomeAmigos}" já adiconado, incluir outro!`);
        limparCampo();
    }else if (nomeAmigos == '') {
        alert(`Nome "${nomeAmigos}" invalido, digite um nome valido!'`);
        limparCampo();
    }else {
        listAmigos.push(nomeAmigos);
        limparCampo();
    }
    atualizarLista();
}

function sortearAmigo(){
    let numeroSoteado = numeroAleatorio();
    let mensagemSorteado = `O amigo secreto sorteado é: ${listAmigos[numeroSoteado]}`;
    let nomeSorteado = document.getElementById('resultado');
    nomeSorteado.innerHTML = mensagemSorteado;
    finalizarJogo();
}

function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (i = 0; i < listAmigos.length; i++){
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listAmigos[i];

        lista.appendChild(paragrafo);
    }
}

function limparCampo(){
    document.getElementById('amigo').value = '';
}

function numeroAleatorio(){
    return parseInt(Math.random() * listAmigos.length);
}

function finalizarJogo(){
    listAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
}