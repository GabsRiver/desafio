//const numero = x;

function tratamento (numero){
    if (typeof numero === 'string'){        
        return console.log('Esse não é um numero!');;        
    } 
}

function divisivel (numero) {
    const valorTratado = tratamento(numero);

    // Após verificação do numero linha do raciocinio.
    if (numero % 5 === 0 && numero % 3 === 0) {
        console.log ('FizzBuzzz');        
    } else if (numero % 3 === 0) {
        console.log ('Fizz');        
    } else if (numero % 5 === 0  ) {
        console.log ('Buzz');
    } else {
        console.log ('Não é divisivel, nem por 5 e nem por 3')
    }

}

for (let i = 0; i <= 100; i++) {
    console.log (i, divisivel(i))
}
