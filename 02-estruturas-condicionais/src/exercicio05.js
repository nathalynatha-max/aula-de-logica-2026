// número 1

import leia from 'readline-sync'

//cliente 1
var nome1 = leia.question("NOME 1: ");
var valor1 = Number(leia.question("VALOR 1: "));
//cliente 2
var nome2 = leia.question("NOME 2: ");
var valor2 = Number(leia.question("VALOR 2: "));
//total
console.log("Total: " + (valor1 + valor2));
//média
console.log("Média: " + ((valor1 + valor2) / 2));
//mais que 20
if (valor1 > 20) {
    console.log("Acima de 20: " + nome1);
}
if (valor2 > 20) {
    console.log("Acima de 20: " + nome2);
}
