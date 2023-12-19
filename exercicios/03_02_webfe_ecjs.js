const nota1 = 10
const nota2 = 10
const nota3 = 2
const nota4 = 0
var result = (nota1 + nota2 + nota3 + nota4) / 4;

if (result == 10) {
    console.log("Aprovado com Distinção " + result);
} else if (result >= 7) {
    console.log('Aprovado ' + result);
} else {
    console.log('Reprovado ' + result);
}