function carro (marca, modelo, anoFabricacao, cor,combustivel, isNew){
    this.marca = marca;
    this.modelo = modelo;
    this.anoFabricacao = anoFabricacao;
    this.cor = cor;
    this.combustivel = combustivel;
    this.isNew = isNew;
    this.indicarAbastecimento = function(){console.log("Abasteça com " + combustivel)}
}

function isCarroNew (msg){
    let carroNew = true

    if (msg === "Sim") {
        carroNew = true
    } else {
        carroNew = false
    }
    return carroNew
}

const carro1 = new carro ("Renault","Master", 2011, "vemelho","Diesel", isCarroNew(prompt("O carro é novo?")))

console.log(carro1)


for (const propriedade in carro1) {
    console.log(carro1[propriedade])
}

carro1.indicarAbastecimento();