import leia from 'readline-sync';

//entradda 
var anos = leia.questionInt("digite a quantidade de anos: ");
var meses = leia.questionInt("digite a quantidade de meses: ");
var dias = leia.questionInt("digite a quantidade de dias: ");

//processamento
var anosemdias = anos * 365;
var mesesemdias = meses * 30;
var totaldias = anosemdias + mesesemdias + dias

//saida 
console.log("você viveu"+ totaldias + " dias");

