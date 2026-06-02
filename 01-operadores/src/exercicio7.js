import leia from 'readline-sync'

var valorproduto = leia.questionFloat("DIGITE O VALOR DO PRODUTO: ");

if(valorproduto < 20) {
   var valorfinal = valorproduto + (valorproduto * (45 / 100));
   
}


