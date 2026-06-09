import leia from 'readline-sync';

var nota1, nota2, nota3;

nota1 = leia.questionFloat("Digite a Primeira nota: ");
nota2 = leia.questionFloat("Digite a segunda nota: ");
nota3 = leia.questionFloat("Digete a terceira nota: ");

var soma = nota1 + nota2 + nota3;
var media = soma / 3;

console.log("A média é: " + media.toFixed(2));

