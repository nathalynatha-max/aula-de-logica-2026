import leia from 'readline-sync'

var ud = leia.question("DIGITE O ULTIMO NUMERO DA SUA PLACA: ");

if(ud === '0' || ud === '1'){
   console.log("VOCÊ NÃO PODE RODAR NA SEGUNDA-FEIRA"); 
}else if (ud === '2' || ud === '3') {
   console.log("VOCÊ NÃO PODE RODAR NA TERÇA-FEIRA");
}else if (ud === '4' || ud === '5') {
   console.log("VOCÊ NÃO PODE RODAR NA QUARTA-FEIRA");
}else if (ud === '6' || ud === '7') {
   console.log("VOCÊ NÃO PODE RODAR NA QUINTA-FEIRA");
}else if (ud === '8' || ud === '9') {
   console.log("VOCÊ NÃO PODE RODAR NA SEXTA-FEIRA");
}