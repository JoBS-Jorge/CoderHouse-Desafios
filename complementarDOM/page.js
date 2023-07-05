class Publicacao {
    constructor(titulo, texto) {
        this.titulo = titulo
        this.texto = texto
    }
}

class Produtos {
    constructor(id, nome, valor) {
        this.id = id
        this.nome = nome
        this.valor = valor
    }
}

class Pessoas {
    constructor(id, nome, email, telefone) {
        this.id = id
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }
}

const publicacoes = []
const produtos = []
const pessoas = []


let publicacao1 = new Publicacao("Conheça Javascript", "este texto é apenas um teste da primeira publicação")
publicacoes.push(publicacao1)
let publicacao2 = new Publicacao("Sabe o que é HTML?", "Texto de teste publicação 2")
publicacoes.push(publicacao2)
let publicacao3 = new Publicacao("Sabe o que é CSS?", "Texto de teste publicação 3")
publicacoes.push(publicacao3)

let produto1 = new Produtos(1,"banana", 5)
produtos.push(produto1)
let produto2 = new Produtos(2, "maça", 2)
produtos.push(produto2)
let produto3 = new Produtos(3, "arroz", 10,50)
produtos.push(produto3)

let pessoa1 = new Pessoas("Jorge","jorge.not@gmail.com", "61996576118")
pessoas.push(pessoa1)
let pessoa2 = new Pessoas("Ellen", "contatoellengalvao@gmail.com", "61999441095")
pessoas.push(pessoa2)
let pessoa3 = new Pessoas("Rosangela", "rosangelabraga@gmail.com", "61984401483")
pessoas.push(pessoa3)

console.log(publicacoes)
console.log(produtos)
console.log(pessoas)

let listaPublicacoes = document.getElementById("publicacoes")

publicacoes.forEach(element => {
    let elemento = document.createElement("p")
    elemento.innerHTML = `${element.titulo} - ${element.texto}`
    listaPublicacoes.appendChild(elemento)
});

let listaProdutos = document.getElementById("produtos")

produtos.forEach(element => {
    let elemento = document.createElement("p")
    elemento.innerHTML = `${element.titulo} - ${element.texto}`
    listaProdutos.appendChild(elemento)
});

let listaPessoas = document.getElementById("pessoas")

pessoas.forEach(element => {
    let elemento = document.createElement("p")
    elemento.innerHTML = `${element.titulo} - ${element.texto}`
    listaPessoas.appendChild(elemento)
});