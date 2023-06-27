//Classe de criação dos produtos
    class Produto {
        constructor (nomeProduto, preco, icmsProduto, categoria){
            this.nomeProduto = nomeProduto
            this.preco = parseFloat(preco)
            this.icmsProduto = parseFloat(icmsProduto)
            this.categoria = categoria
        }
        calcularIcms (){
            this.preco = this.preco * this.icmsProduto
        }
    }

//Array que armazena os produtos em formatos de objetos
    const listaProdutos = []

//Função que permite incluir novos produtos no array de produtos
    function incluirProduto(){
        let produto = document.getElementById('txtname')
        let valor = document.getElementById('txtvalor')
        let icms = document.getElementById('txticms')
        let categoria = document.getElementById('selcat')


        let novoProduto = new Produto (produto.value , valor.value , icms.value , categoria.value)
        novoProduto.calcularIcms()
        listaProdutos.push(novoProduto)


        return console.log(listaProdutos)
    }

//Função que permite listar a tabela de produtos na tela
    function listarProdutos(){
        for (const produto of listaProdutos){   
            let container = document.getElementById("res")

            container.innerHTML = `<div
                                    <h3> Produto: ${produto.nomeProduto} </h3>
                                    <p> Valor: ${produto.preco} </p>
                                    <p> Categoria: ${produto.categoria}</p>
                                    </div>`

            document.body.append(container)
        }

        return console.log("lista na tela")
    }

