import leia from 'readline-sync'

//ENTRADA
var produto = 100

//PROCESSAMENTO 
var desconto = produto * 10 / 100
var  valorfinal = produto - desconto

//SAÍDA
console.log("Desconto: R$ " + desconto)
console.log("Valor final: R$ " + valorfinal)


//ENTRADA 
var valorProduto = leia.questionFloat("DIGITE O VALOR DO PRODUTO: R$");

//PROCESSAMENTO


