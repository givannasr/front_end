console.log('----------------------- Métodos de strings - trim --------------------------');

const texto = '\ttestando\n';

console.log(texto);

console.log(texto.trim());

console.log('--------------------------------- Métodos de strings - substring ----------------------------------');

const palavra = 'Javascript';

const resSubstring1 = palavra.substring(0, 4);

console.log(resSubstring1);

const resSubstring2 = palavra.substring(4, 10);

console.log(resSubstring2);

console.log('------------------------ Métodos de strings - padstart ------------------------');

numero = '1';

const testPadStart = numero.padStart(4 , '0');

console.log(testPadStart);

const testPadEnd = numero.padEnd(4, '0');

console.log(testPadEnd);

console.log('------------------------ Método de string - split ----------------------------------');

const frase = 'O rato roeu a roupa do rei de Roma';

const array = frase.split(' ');
console.log(frase);
console.log(array);

console.log('--------------------------- Método de string - Join ------------------------------');

const listaCompras = ['Mouse','Teclado', 'Monitor']

const listaComprasString = `Precisamos comprar ${listaCompras.join(', ')}.`;

console.log(listaComprasString);