import leia, { question } from 'readline-sync'

var gols1 = Number(leia.question("GOLS DE GREMIO: "));
var gols2 = Number(leia.question("GOLS DO INTER"));

var diferenca = Math.abs(gols1 - gols2);

if (diferenca == 0) {
    console.log("EMPATE");
} else if (diferenca <= 3) {
    console.log("PARTIDA NORMAL");
} else {
    console.log("GOLEADA");
}
