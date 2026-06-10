 
//EXEMPLO 1

// E-SÓ VAI DAR VERDADEIRO SE TODOS FOREM VERDADEIROS
// OU- SÓ VAI DAR FALSO SE TODOS FOREM FALSOS

var idade = 30;
var temCnh = true;

if(idade < 1) {
    console.log("RECÉM NASCIDO")
 } else if(idade >= 1 && idade <= 12) {
    console.log("CRIANÇA")
 } else if (idade > 12 && idade < 18) {
    console.log("ADOLESCENTE")
 } else if (idade >= 18 && idade <=60){
    console.log("ADULTO")
 } else {
    console.log("IDOSO")
 }

//EXEMPLO 2

var mediaFinal = 6.5;

if(mediaFinal >= 7) {
    console.log("APROVADO!!")
} else if(mediaFinal >= 5 && mediaFinal < 7){
    console.log("EM RECUPERAÇÃO!!")
} else {
    console.log("REPROVADO!!")
}

//EXEMPLO 3

var diaSamana = "quarta";
if(diaSamana === "sabado" || diaSamana === "domingo") {
    console.log("FIM DE SEMANA");
} else {
    console.log("DIA ÚTIL")
}

// DESAFIO DO NÚMERO PAR OU IMPAR,exercicio 02;

var numero = 6;
if(numero % 2 === 0) {
    console.log("PAR")
}else {
    console.log("IMPAR")
}

// SWITCH CASE
var cor = "VERDE";
switch (cor) {
    case "VERMELHO":
          console.log("PARE")
          break;
    case "AMARELO":  
          console.log("ATENÇÃO")
          break;
    case "VERDE":
          console.log("SIGA")
          break;
    default:
        console.log("COR INVÁLIDA")
}

// OPERADOR TERNÁRIO / ESTRUTURA CONDICIONAL

(CONDIÇÃO) ? "ALGO ACONTECEU" : "OUTRA COISA ACONTECE";

var idade = 22;
var eMaior = idade >= 18 ? "MAIOR DE IDADE" : "MENOR DE IDADE";
console.log(eMaior);

// OU
console.log(idade >= 18 ? "MAIOR DE IDADE" : "MENOR DE IDADE")
