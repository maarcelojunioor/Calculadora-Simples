let operacaoSelecionada = null;
let numeroAnterior = null;
let numeroAtual = '0';

function limpar() {
    numeroAtual = '0';
    numeroAnterior = null;
    operacaoSelecionada = null;
}

function inserirNumero(numero) {
    if (numeroAtual === '0') {
        numeroAtual = numero;
    } else {
        numeroAtual += numero;
    }
    atualizarVisor();
}

function selecionarOperacao(operacao) {
    if (operacaoSelecionada !== null) {
        calcular();
    }
    numeroAnterior = numeroAtual;
    operacaoSelecionada = operacao;
    numeroAtual = '0';
}

function calcular() {
    let resultado;
    const anterior = parseFloat(numeroAnterior);
    const atual = parseFloat(numeroAtual);
    if (isNaN(anterior) || isNaN(atual)) {
        return;
    }
    switch (operacaoSelecionada) {
        case 'soma':
            resultado = anterior + atual;
            break;
        case 'subtracao':
            resultado = anterior - atual;
            break;
        case 'multiplicacao':
            resultado = anterior * atual;
            break;
        case 'divisao':
            resultado = anterior / atual;
            break;
        default:
            return;
    }
    numeroAtual = resultado.toString();
    operacaoSelecionada = null;
    numeroAnterior = null;
    atualizarVisor();
}

function atualizarVisor() {
    const visor = document.getElementById('input-numeros');
    visor.value = numeroAtual;
    const resultado = document.getElementById('resultado');
    resultado.value = numeroAtual;
}

atualizarVisor();
