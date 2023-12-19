let num1 = 1;
let num2 = 0;

function superSomador(valor1, valor2) {
    if (valor1 < valor2) {
        let result = 0;
        let cont;
        cont = valor1;
        do {
            result += cont;
            cont++;
        } while (cont <= valor2)
        return result;
    } else {
        return 'valor 1 é maior que valor 2!';
    }
}

const res = superSomador(num1, num2);

console.log(res);

