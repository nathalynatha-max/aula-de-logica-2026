import leia from 'readline-sync'

//ENTRADA
var corrida01 = leia.questionFloat("DIGITE O VALOR DA PRIMEIRA CORRIDA: R$");
var corrida02 = leia.questionFloat("DIGITE O VALOR DA SEGUNDA CORRIDA: R$");
var corrida03 = leia.questionFloat("DIGITE O VALOR DA TERCEIRA CORRIDA: R$");
var corrida04 = leia.questionFloat("DIGITE O VALOR DA QUARTA CORRIDA: R$");
var corrida05 = leia.questionFloat("DIGITE O VALOR DA QUINTA CORRIDA: R$");

//PROCESSAMENTO
var vallorBruto = corrida01 + corrida02 + corrida03 + corrida04 + corrida05;
var valorDescontoApp = vallorBruto * (25 / 100); //calculo porcentagem
var valorLiquido = vallorBruto - valorDescontoApp;

//saída 
console.log("O VALOR TOTAL ARECADO COM OS DESCONTOS É DE R$" +valorLiquido.toFixed(2))














