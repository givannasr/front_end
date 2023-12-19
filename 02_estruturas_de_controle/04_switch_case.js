console.log('-------------------01--------------------');

/* 
A estrutura switch permite executar um bloco de código
diferente de acordo com cada opção (cada case) especificada. Seu uso é
indicado quando os valores a serem analizados nessas condições são pré- definidos.
Declaramos uma variavel eutilizamos como parametro do switch para avaliarmos as condições:
*/

const sexo = 'feminino';

switch (sexo) {
    case "feminino":
        console.log('Bem-vinda!');
        break;
    default:
        console.log('Bem-vindo!');
}

console.log('-------------------02--------------------');

const autenticado = true;

switch (autenticado) {
    case true:
        console.log("Usuário autenticado com sucesso!");
        break;
    default:
        console.log('Usuário não autenticado!');
}

console.log('-------------------03--------------------');