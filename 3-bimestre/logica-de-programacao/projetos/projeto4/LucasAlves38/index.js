const cliente = "Aline Freitas"
const opcaoMenu = 4
const quantidade = 4
const formaPagamento = "dinheiro"
const statusPedido = "aprovado"

 let prato
 let precoUnitario
switch (opcaoMenu) {
  case 1: prato = "Sushi"
  precoUnitario = 32
  break
  case 2: prato = "Temaki"
  precoUnitario = 24
  break
  case 3: prato = "Yakisoba"
  precoUnitario = 28
  break
  case 4: prato = "Chá Gelado"
  precoUnitario = 9
  break
  default: prato = "Opção inválida"
 precoUnitario = 0
 }
const subtotal = precoUnitario * quantidade
const freteStatus = subtotal >= 80 ? "Frete grátis" : "Frete pago"
const frete = subtotal >= 80 ? 0 : 10

  let pagamentoMensagem
  let descontoPercentual
  switch (formaPagamento) {
  case "pix": pagamentoMensagem = "Pagamento via PIX"
  descontoPercentual = 10
  break
  case "cartao": pagamentoMensagem = "Pagamento via cartão"
  descontoPercentual = 10
  break
  case "dinheiro": pagamentoMensagem = "Pagamento em dinheiro"
  descontoPercentual = 0
  break
  default: pagamentoMensagem = "Forma de pagamento inválida"
descontoPercentual = 0
}
const desconto = subtotal * descontoPercentual / 100
const total = subtotal - desconto + frete

let statusMensagem
switch (statusPedido) {
case "pendente": statusMensagem = "Aguardando pagamento"
break
case "aprovado": statusMensagem = "Pedido em preparo"
break
case "enviado": statusMensagem = "Pedido a caminho"
break
case "cancelado": statusMensagem = "Pedido cancelado"
break
default: statusMensagem = "Status desconhecido"
 }
const resumo = `Cliente: ${cliente}
Item: ${prato} x${quantidade}
Subtotal: R$ ${subtotal}
${freteStatus}
${pagamentoMensagem}
Desconto: R$ ${desconto}
Total: R$ ${total}
${statusMensagem}`
console.log(resumo)


module.exports = {

    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}