console.log('----------------------- Arrow Function ----------------------');

const testArrow = () => {
    console.log('Essa é uma Arrow Function.');
}

testArrow();

console.log('--------------------------- Desafio ---------------------------');

const desafioArrow = (n) => {
    if ((n % 2) === 0) {
        return `${n} é par`;
    } else {
        return n + ' é impar';
    }
}
let result = desafioArrow(3);
console.log(result);

console.log('-------------------- Mais sobre as Arrow Function ----------------------');

const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;
console.log(raizQuadrada2(12));

console.log('----------------------------------------------------');