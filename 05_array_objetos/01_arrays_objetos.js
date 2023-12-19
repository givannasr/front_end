console.log('-------------------------- ARRAYS --------------------------');

const lista = [1, 2, 3, 4,];
console.log(lista);
console.log(typeof lista);
console.log(typeof 'lista');
console.log(typeof 2);
console.log(typeof undefined);
console.log(typeof NaN);

const diversos = ['Giovanna', 1, 1, 2, 1, 9, 9, ['Casa'], true];
console.log(diversos);
console.log(typeof diversos);

console.log('------------ Propiedades --------------');
const numbers = [1, 2, 3, 4];
console.log(numbers.length);
console.log(numbers['length']);

console.log('----------------------------- Arrays ------------------------------');

const person = {
    nome: 'Nicollas',
    idade: 20,
    profissao: 'Analista',
}

console.log(person.nome);

console.log(person.nome.length);



// const listaValores = Object.values(person);

// console.log(listaValores[1]);

console.log('----------- Objetos - Adicionando e removendo propriedades -----------');

const car = {
    engine: 1500,
    brand: 'VW',
    model: 'Fusca',
    km: 7000000
}

console.log(car);

car.ano = 1954;

console.log(car);

delete car.km;

console.log(car);

console.log('----------------------------- Loop em Arrays ------------------------------');

const alunos = ['Murilo', 'Thais', 'Camilly', 'Kelly', 'Pantalhão', 'Valle'];

for (let i = 0; i <= alunos.length; i++) {
    console.log(`Listando o aluno ${alunos[i]}`);
}

console.log('----------------- Métodos de arrays: push e pop -------------------');

const array = ['a', 'b', 'c']
console.log(array);
array.push('d');
console.log(array);
// array.pop('d');
// console.log(array);

let letraRemovida = array.pop()

console.log(array);
console.log(`A letra revida foi ${letraRemovida}`);

array.push('e', 'f', 'g');
console.log(array);

