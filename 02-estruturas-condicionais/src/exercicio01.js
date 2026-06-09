 import leia from 'readline-sync';

var senhapadrao = "1234";
var senhaUsuario = leia.question("DIGITE A SUA SENHA: ");

if(senhaUsuario === senhapadrao){
    console.log("ACESSO PERMITIDO!!!")
}else {
    console.log("ACESSO NEGADO!!!")
}