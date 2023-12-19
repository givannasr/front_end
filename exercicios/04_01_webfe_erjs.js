const estacao = "Outubro"

switch (estacao) {
    case 'Janeiro':
    case 'Fevereiro':
    case 'Março':
        console.log('O més de ' + estacao + ' pertence a estação: Verão');
        break;
    case 'Abriu':
    case 'Maio':
    case 'Junho':
        console.log('O més de ' + estacao + ' pertence a estação: Outono');
        break;
    case 'Junho':
    case 'Agosto':
    case 'Setembro':
        console.log('O més de ' + estacao + ' pertence a estação: Inverno');
        break;
    case 'Outubro':
    case 'Novembro':
    case 'Dezembro':
        console.log('O més de ' + estacao + ' pertence a estação: Primavera');
        break;
    default:
        console.log('Erro de digitação! Tente novamente.');
}