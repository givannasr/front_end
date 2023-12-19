console.log('------------------------- Date -----------------------');

const hoje = new Date()

console.log(hoje);

console.log('----------------------- Date - Formato com Localidade ----------------------');

console.log(hoje.toLocaleDateString('pt-br'), hoje.toLocaleTimeString());