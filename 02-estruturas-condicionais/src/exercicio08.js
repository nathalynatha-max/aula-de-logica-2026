//exercicio 2
import leia from 'readline-sync'

var mes = Number(leia.question("DIGITE O MES: "));

if (mes == 2){
    console.log("28 DIAS");
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log("30 DIAS");
} else {
    console.log("31 DIAS");
}
