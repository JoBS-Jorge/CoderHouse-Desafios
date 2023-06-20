let numero = Number(prompt('Digite um número'))

if(numero > 1000){
    alert(`O número (${numero}) digitado é MAIOR que 1.000`)
} else {
    console.log(`O número (${numero}) digitado é MENOR que 1.000`)
}

let textInput = prompt('Digite Olá')

if (textInput == "Olá"){
    alert('Muito bem')
} else {
    console.log('ERRO: texto inválido')
}

let faixaNum = Number(prompt('Digite um numero para saber se está na faixa'))

if(faixaNum >= 10 && faixaNum <= 50){
    alert('Número digitado entre 10 - 50')
} else {
    console.log('Número fora da faixa')
}