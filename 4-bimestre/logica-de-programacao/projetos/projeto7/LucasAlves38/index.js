const prompt = require("prompt-sync")()

const limiteEstoqueBaixo = Number(prompt("Limite de estoque baixo: "))
const qtd = Number(prompt("Quantidade de produtos: "))
const catalogo = []

for(let i=1;i<=qtd;i++){
  const nome = prompt("Produto "+i+" - nome: ")
    const preco = Number(prompt("Produto "+i+" - preço: "))
  const estoque = Number(prompt("Produto "+i+" - estoque: "))
  catalogo.push({nome:nome,preco:preco,estoque:estoque})
}

const nomeReajuste = prompt("Reajuste - nome do produto: ")
const aumento = Number(prompt("Reajuste - aumento: "))

let estoqueTotal = 0
let produtosComEstoqueBaixo = 0
let maior = catalogo[0].preco
let produtoMaisCaro = catalogo[0].nome

for(let i=0;i<catalogo.length;i++){
    estoqueTotal += catalogo[i].estoque
  if(catalogo[i].estoque <= limiteEstoqueBaixo){
      produtosComEstoqueBaixo++
  }
    if(catalogo[i].preco > maior){
    maior = catalogo[i].preco
      produtoMaisCaro = catalogo[i].nome
    }
}

for(let i=0;i<catalogo.length;i++){
  if(catalogo[i].nome == nomeReajuste){
        catalogo[i].preco += aumento
  }
}

const resumo = `Produto mais caro: ${produtoMaisCaro}
Estoque total: ${estoqueTotal}
Produtos com estoque baixo: ${produtosComEstoqueBaixo}`

console.log(resumo)

module.exports = {
    catalogo,
    limiteEstoqueBaixo,
    produtoMaisCaro,
    estoqueTotal,
    produtosComEstoqueBaixo,
    resumo
}