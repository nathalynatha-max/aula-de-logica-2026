import leia from 'readline-sync' 

var macas = leia.question("DIGITE QUANTIDADES DE MACAS: ");

if (macas < 12) {
    console.log("TOTAL DA COMPRA: R$ " + (macas * 0.30));
} else {
    console.log("TOTAL DA COMPRA: R$ " + (macas * 0.25));
}
