    let nome = document.getElementById("nome")
    let valor = document.getElementById("valor")
    let parcelas = document.getElementById("parcelas")
    let botao = document.getElementById("botao")
    let mensagem = document.getElementById('res')


botao.addEventListener("keydown", function evento(event){

        if (event.key === "Enter"){
            mensagem.innerText += `${nome.value} seu emprestimo de ${valor.value} dividido em ${parcelas.value} parcelas`
        }
    })

