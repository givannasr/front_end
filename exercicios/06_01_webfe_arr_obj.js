const numb1 = 2;
const numb2 = 2;

function maiorMenor(num1, num2) {
    if (num1 > num2) {
        return 'O primeiro valor é o maior.';
    } else if (num1 < num2) {
        return 'O segundo valor é o maior.';
    } else {
        return 'Não existe valor maior, os dois são iguais.';
    }
}

const res = maiorMenor(numb1, numb2);

console.log(res);