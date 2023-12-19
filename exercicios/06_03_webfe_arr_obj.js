const nomeFunc = 'Jose';
const salar = 1500;
const tc = 10

function salarioN(nome, salario, atn) {
    if (atn < 3) {
        const novosalar1 = salario * 1.03;
        return `Parabéns ${nome}! Seu novo salario é de R$${novosalar1}`
    } else if (atn > 3, atn < 10) {
        const novosalar2 = salario * 1.125;
        return `Parabéns ${nome}! Seu novo salario é de R$${novosalar2}`
    } else {
        const novosalar3 = salario * 1.2;
        return `Parabéns ${nome}! Seu novo salario é de R$${novosalar3}`
    }
}

console.log(salarioN(nomeFunc, salar, tc));