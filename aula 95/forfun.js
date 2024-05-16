let n = '54.62-1';

// Passo 1: Remover pontos e traços da string
let digitsOnly = n.replace(/[^\d]/g, '');

// Passo 2 e 3: Expressão de reduce para multiplicar cada número na sequência e somar os resultados
let result = Array.from(digitsOnly).reduce((total, digit, index) => {
    let multiplier = 10 - index;
    return total + (parseInt(digit) * multiplier);
}, 0);

console.log(result);
50 + 36 + 48 + 14 + 8