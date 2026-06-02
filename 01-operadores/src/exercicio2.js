import Leia from 'readline-sync'

//entrada
var altuara = Leia.questionFloat('Digite a  altura do retangolo: ');
var largura = Leia.questionFloat('Digite a  largura do retangolo: ');

//processamento
var area = altuara * largura;

//saida 
console.log("a area do retangulo é: " + area.toFixed(2));
