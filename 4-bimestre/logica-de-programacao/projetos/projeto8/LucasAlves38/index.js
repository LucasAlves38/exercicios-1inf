const prompt = require("prompt-sync")()
const precoUnitario = Number(prompt("Preço unitário: "))
const quantidade = Number(prompt("Quantidade: "))
const formaPagamento = prompt("Forma de pagamento (pix, cartao ou dinheiro): ")
const calcularSubtotal = (preco, quantidade) => preco * quantidade
function calcularFrete(subtotal) {
return subtotal >= 100 ? 0 : 10 }


function calcularDesconto(subtotal, formaPagamento) { let percentual
        switch (formaPagamento) {
  case "pix":
            case "dinheiro":
percentual = 5
      break
     case "cartao":
   percentual = 0
            break
 default:
        percentual = 0 }
return subtotal * percentual / 100
}
function calcularTotal(preco, quantidade, formaPagamento) {
      const subtotal = calcularSubtotal(preco, quantidade)
  const frete = calcularFrete(subtotal)
          const desconto = calcularDesconto(subtotal, formaPagamento)
    return subtotal - desconto + frete
}
const subtotal = calcularSubtotal(precoUnitario, quantidade)
        const frete = calcularFrete(subtotal)


const desconto = calcularDesconto(subtotal, formaPagamento)
   const total = calcularTotal(precoUnitario, quantidade, formaPagamento)
const resumo = `Resumo do pedido
Subtotal: ${subtotal}
Frete: ${frete}
Desconto: ${desconto}
Total: ${total}`
console.log(resumo)
module.exports = {
precoUnitario, quantidade,
        formaPagamento,
  calcularSubtotal, calcularFrete,
calcularDesconto,
      calcularTotal,
subtotal, frete,
    desconto, total,
 resumo }