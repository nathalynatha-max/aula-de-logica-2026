import leia from 'readline-sync' 

//ENTRADA
var totalEleitores = leia.questionInt("INFORME O TOTAL DE ELEITORES DA CIDADE: ");
var totalbrancos = leia.questionInt("INFORME A QTD DE VOTOS BRANCOS: ");
var totalNulos = leia.questionInt("INFORME A QTD DE VOTOS NULOS: ");
var totalValidos = leia.questionInt("INFORME A QTD DE VOTOS VALIDOS: ");

//PROCESSAMENTO
var percentualBrancos = (totalbrancos / totalEleitores) * 100;
var percentualNulos = (totalNulos / totalEleitores) * 100;
var percentualValidos = (totalValidos / totalEleitores) * 100;

//SAÍDA
console.log("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%")
console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%")
console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%")
