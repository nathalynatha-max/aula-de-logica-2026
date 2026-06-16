import leia from 'readline-sync'

console.log("==== DESARME A BOMBA ====");
console.log("UMA BOMBA FOI ENCONTRADA, VOCÊ CORTA O FIO CERTO!"),
console.log("SE CORTAR O FIO ERRADO KABUMMMMMMMMMMMMMMMMMMMM!!! VOCÊ PRECISA CORTAR O FIO CORRETO E VOCÊ TEM 3 TENTATIVAS!");
console.log("=================");

var fios = [
    "Vermelho", "Azul", "Verde", "Amarelo", "Preto", "Branco", "Laranja", "Roxo", "Marrom", "Cinza"
];

var fioCorreto = fios[Math.floor(Math.random() * fios.length)];
var tentativas = 3;
var desarmou = false

do {
    var escolha = leia.keyInSelect(
       fios,
       `Escolha um foi para cortar,voce tem ${tentativas} tentativas`
    )
    var foiEscolhido = fios[escolha];

    if(foiEscolhido === fioCorreto){
        console.log("VOCÊ CORTOU O FIO " + foiEscolhido);
        console.log("BOOMB HAS BEEN DEFUSED");
        desarmou = true;
    } else {
        console.log("VOCÊ CORTOU O FIO " + foiEscolhido);
        console.log("ESSE NÃO ERA O FIO CPRRETO!");

        tentativas--;
        fios.splice(escolha, 1);
    }

    console.log('----------------------------------')
} while (tentativas > 0 && desarmou === false);

if (desarmou === false) {
    console.log("KABUMMMMMMMMMMMMMMMMM!! não o site!")
    console.log("O FIO CORRETO O " + fioCorreto);
}
