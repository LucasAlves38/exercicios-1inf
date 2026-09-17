const nome = "Lucas Alves"
const idade = 22
const tipoCredencial = "comum"
const possuiIngresso = true
const impedido = false
const valorIngresso = 25
const valorPago = 25
 
let idadeStatus;
 
if (idade >= 18) {
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}
 
let nivelAcesso
 
if (tipoCredencial === "curador" || tipoCredencial === "organizador") {
    nivelAcesso = "Acesso administrativo liberado"
} else {
    nivelAcesso = "Acesso comum"
}
 
let acessoStatus;
 
if (idade >= 18 && possuiIngresso && !impedido) {
    acessoStatus = "Entrada liberada"
} else {
    acessoStatus = "Entrada negada"
}
 
let pagamentoStatus;
 
if (valorPago >= valorIngresso) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}
 
let troco;
 
if (pagamentoStatus === "Pagamento aprovado") {
    troco = valorPago - valorIngresso;
} else {
    troco = 0
}
let statusExposicao;
if (acessoStatus === "Entrada liberada" && pagamentoStatus === "Pagamento aprovado") {
    statusExposicao = "Check-in da exposição confirmado"
} else {
    statusExposicao = "Check-in da exposição não confirmado"
}
 
const resumo = `

Visitante: ${nome}
Credencial: ${tipoCredencial} (${nivelAcesso})
Valor do ingresso: R$ ${valorIngresso}
Valor pago: R$ ${valorPago}
Troco:R$ ${troco}
Situação da idade:${idadeStatus}
Situação do acesso:${acessoStatus}
Situação do pagamento: ${pagamentoStatus}
Resultado final: ${statusExposicao}
`
console.log(resumo);
 
module.exports = {
    nome,
    idade,
    tipoCredencial,
    possuiIngresso,
    impedido,
    valorIngresso,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusExposicao,
    resumo
}
 