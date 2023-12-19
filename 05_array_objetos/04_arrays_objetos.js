console.log("-------------------- Array : indexOf e lastIndexOf ------------------------");

const frutas = ['Morango', 'Maça', 'Abacate', 'Uva', 'Abacate'];

console.log(frutas.indexOf('Maça'));
console.log(frutas.indexOf('Abacate'));
console.log(frutas.lastIndexOf('Abacate'));

console.log('--------------- Array :  forEach ---------------');

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(num => console.log(num));

console.log('------------------- Objetos : forEach ------------------');

const posts = [
    { title: 'Post#1', category: 'C#' },
    { title: 'Post#2', category: 'JavaScript' },
    { title: 'Post#3', category: 'HTML' },
];

posts.forEach((post) => {
    console.log(`Exibindo ${post.title} da categoria: ${post.category}`);
})

console.log('--------------- Array : includes -----------------');

const vogais = ['a', 'e', 'i', 'o', 'u'];

if (vogais.includes('a')) {
    console.log('Vogal');
} else {
    console.log('Consoante');
}

console.log('-------------------- Array : map -----------------');

const array = [1, 2, 3];
const arrayN = array.map((x) => x + 1);

console.log(array);
console.log(arrayN);

console.log('--------------------- TABUADA ----------------------');

const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let = i = 1;
while (i <= 10) {
    const tabuada = numb.map((x) => i * x);
    console.log(tabuada);
    i++
}

console.log('---------------------- Array : reverse --------------------------');

const arrayX = [10, 20, 30, 40];
const arrayY = arrayX.map((x) => x);

arrayY.reverse();

console.log(arrayX);
console.log(arrayY);