console.log('------------------01-------------------');

//OPERADOR DE IGUALDADE (==)
//O operador de igualdade compara dois operandos e retorna verdadeiro, se eles forem iguais e falso se forem diferentes;

var x = 5;

console.log(x == 5); //retorna verdadeiro
console.log(x == '5');// também retorna verdadeiro
console.log(x == 4);// retorna falso
console.log(x == 'c');// tbm retorna falso

console.log('------------------02-------------------');
//IGUALDADE ESTRITA (===)
//A igualdade estrita, além de cosiderar os valores dos operandos, leva em conta também o seu tipo

console.log(x === 5); //retorna verdadeiro
console.log(x === '5');// retorna falso

console.log('------------------03-------------------');
// DIFERENTE (!=)

console.log('string1' != 'string2');//true


console.log('------------------04-------------------');
//MAIOR (>)

console.log(5 > 4);//true

console.log('------------------05-------------------');
//MENOR (<)

console.log(5 < 4);//false

console.log('------------------06-------------------');
// MAIOR IGUAL (>=)
// Funciona de forma semelhante ao operador maior, mas retorna verdadeiro caso o operador da esquerda seja maior ou igual ao operador da direita

var x = 6;
var y = 4;

console.log(x >= y);//true
console.log(x >= 6);//true
console.log(y >= x);//false

console.log('------------------07-------------------');
// MENOR IGUAL (<=)
// Funciona de forma semelhante ao operador menor,mas retorna verdadeiro caso o operador da esquerda seja menor ou igual ao operador da direita

console.log(x <= y);

