import leia from 'readline-sync'

var numeroMagico = Math.floor(Math.random() * 100) +1; //forma de criar numeros aleatorios

var tentativa;
var qtdTentativas = 0;

console.log("======JOGO NUMERO MÁGICO=======")

do{
    tentativa = leia.questionInt("Digite sua tentativa: ");
    qtdTentativas++;

    if(tentativa > numeroMagico) {
        console.log("O número mágico MENOR!!")
    }else if(tentativa < numeroMagico){
        console.log("O número")
    }


}while(tentativa !== numeroMagico);

