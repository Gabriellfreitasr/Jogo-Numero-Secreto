let listaDosNumerosSorteados = [];
let numeroLimite = 100;
let numeroaleatorio = gerarNumero();
let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(`Número Aleatório: ${numeroaleatorio}`);
    console.log(`Chute: ${chute}`);
    
    if (chute == numeroaleatorio) {
        exibirTexto ("h1", "Parabéns!!!");
        let palavraTentativa = tentativas > 1 ? "Tentativas" : "Tentativa";
        let mensagemTentativas = `Você acertou o número Secreto com ${tentativas} ${palavraTentativa} !`;
        exibirTexto ("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if ( chute > numeroaleatorio) {
            exibirTexto ("h1", "Dica!!!");
            exibirTexto ("p", "O número é menor!");
        }

        else {
            exibirTexto ("h1", "Dica!!!");
            exibirTexto ("p", "O número é Maior!");
        }
        tentativas++;
        limparCampo();
    }
}

// Função com Parâmetro - Forma mais resumida e fácil de aplicar 
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian portuguese Female", {rate:1.2});
}

    exibirTexto ("h1", "Jogo do Número Secreto");
    exibirTexto ("p", `Escolha um número de 1 a ${numeroLimite} `);

function exibirMensagemInicial() {
    exibirTexto ("h1", "Jogo do Número Secreto");
    exibirTexto ("p", `Escolha um número de 1 a ${numeroLimite} `);
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDosNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDosNumerosSorteados = [];
    }

    if (listaDosNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero(); 
    } else {
        listaDosNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo() {
    exibirMensagemInicial();
    numeroaleatorio = gerarNumero();
    limparCampo();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}


