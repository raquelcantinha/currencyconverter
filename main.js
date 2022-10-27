// algoritmo saudação
const hora = new Date().getHours()
let saudacao
if (hora < 12) {
    saudacao = "bom dia."
} else if (hora < 18) {
    saudacao = "boa tarde."
} else {
    saudacao = "boa noite."
};
document.getElementById("saudacao").textContent = "Olá, " + saudacao;

function converter(valorMoeda) {
    let valorDigitado = document.getElementById("valoremreal");
    let valor = parseFloat(valorDigitado.value);
    let cotacao = valorMoeda;
    valorEmOutraMoeda = valor / cotacao;
    valorFinal = valorEmOutraMoeda.toFixed(2);
    document.getElementById("valorconvertido").textContent = valorFinal;
    document.getElementById("valorconvertido").style.fontWeight = '700';
}

const btns = document.querySelectorAll('.btn'); //chamando todos os botões das moedas

for (let i = 0; i < btns.length; i++) { //indicando que cada botão da lista deve rodar o script
    let btn = btns[i];
    let moeda = btn.value;
    btn.onclick = function() {
        converter(moeda)
    }
}

const btnApagar = document.getElementById('apagar').addEventListener('click', apagar)

function apagar() {
    document.getElementById("dados").reset();
    valorconvertido.textContent = "Quanto vale meu dinheiro?";
    document.getElementById("valorconvertido").style.fontWeight = '500';
}
