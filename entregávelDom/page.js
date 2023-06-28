let nome = prompt("Digite o seu nome")
let idade = Number(prompt("Digite a sua idade"))
let data = new Date()
let saudacao = ["Bom dia!", "Boa tarde!", "Boa noite!"]
let boasVindas = document.getElementById("dados")

if ( data.getHours() < 12 ){    
    boasVindas.innerHTML = `${nome}, ${saudacao[0]}`
} else if ( data.getHours() < 18 ) {
    boasVindas.innerHTML = `${nome}, ${saudacao[1]}`
} else {
    boasVindas.innerHTML = `${nome}, ${saudacao[2]}`
}

let info = document.getElementById("res")

info.innerHTML += `Você tem ${idade} anos`
