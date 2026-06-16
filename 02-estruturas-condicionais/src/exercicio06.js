// exercicio 2
import leia from 'readline-sync'

var produto = Number(leia.question("VALOR DO PRODUTO: "));

var m1 = Number(leia.question("MOEDAS DE 1 REAL: "));
var m50 = Number(leia.question("MOEDAS DE 50 CENTAVOS: "));
var m25 = Number(leia.question("MOEDAS DE 25 CENTAVOS: "));
var m10 = Number(leia.question("MOEDAS DE 10 CENTAVOS: "));
var m5 = Number(leia.question("MOEDAS DE 5 CENTAVOS: "));

var total = (m1 * 1.00) + (m50 * 0.50) + (m25 * 0.25) + (m10 * 0.10) + (m5 * 0.05);

if (total >= produto) {
    console.log("PODE COMPRAR O PRODUTO");
} else {
    console.log("NAO TEM DINHEIRO SUFICIENTE");
}
