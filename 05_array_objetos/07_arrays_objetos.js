console.log('--------------------- Rest Operador / Rest Parameters -------------------');

const somaInfinita = (...args) => {
    let total = 0
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total
};

console.log(somaInfinita(2, 6, 4, 3, 7));