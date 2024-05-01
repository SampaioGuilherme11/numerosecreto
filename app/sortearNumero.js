    // GERAR NUMERO ALEATORIO

const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

    // SELECIONAR OS VALORES

const elementoMaiorValor = document.querySelector('#maior-valor')
const elementoMenorValor = document.querySelector('#menor-valor')

    // SORTEIO VALOR ALEATORIO

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

// console.log(numeroSecreto)

    // ALTERAR OS VALORES

elementoMaiorValor.textContent = maiorValor
elementoMenorValor.textContent = menorValor