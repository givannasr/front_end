console.log('-------------------01--------------------');

const x = 5;

if (x > 7) {
    console.log('X é maior que 7');
} else {
    console.log('X é menor que 7');
}

console.log('-------------------02--------------------');

const user = 'João';

if (user === 'João') {
    console.log('Olá João!');
} else {
    console.log('Você não é o João!');
}

if (user === 'Maria') {
    console.log('Olá Maria!');
} else {
    console.log('Você não é a Maria!');
}

console.log('-------------------03--------------------');

const num = 4;

if (num != 4) {
    console.log('Número diferente!');
} else {
    console.log('O número é igual a ' + num);
}

console.log('-------------------04--------------------');
/*
Criar uma constante do tipo bool (true/false) com o valor setado para false
*/
const loggedIn = false;

/*
neste trecho é realizado toda a validação do usuario com o 
banco e em seguida realizamos a verificação abaixo para continuarmos,
no IF verificamos se ela é true, tipos boleanos podemos verificar
se é true de duas formas: if(loggedIn) ou if(loggedIn === true)
*/
if (loggedIn) {
    console.log('Está autentico');
} else {
    console.log('Não está autenticado');
}

console.log('-------------------05--------------------');

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log('Números mais altos');
} else {
    console.log('Números não são mais altos');
}