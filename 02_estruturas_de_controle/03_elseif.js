console.log('-------------------01--------------------');
//ELSE IF

if (1 > 2) {
    console.log('teste');
} else if (2 > 4) {
    console.log('teste 2');
} else if (5 > 1) {
    console.log('Agora sim');
}

console.log('-------------------02--------------------');

var userName = 'Giovanna';
var userAge = 22;

if (userName == 'José'){
    console.log('Bem vindo José!');
} else if (userName === 'Giovanna' && userAge === 22){
    console.log('Bem vinda '+userName+', você tem '+userAge+' anos!');
}
