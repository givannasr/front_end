console.log('------------------- Converter array para objeto ------------------');

const pessoa = ['Giovanna', 22, 'Rio Claro'];

const objPessoa = Object.assign({
    nome: pessoa[0],
    idade: pessoa[1],
    cidade: pessoa[2],
});

console.log(pessoa);
console.log(objPessoa);

console.log('------------------- Coverter objeto para array -----------------------');

const obj = {
    livro: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    ano: 1937,
};

const array = Object.keys(obj).map(chave => obj[chave]);

console.log(obj);
console.log(array);