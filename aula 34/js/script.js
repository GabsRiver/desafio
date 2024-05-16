function meuEscopo() {
    const formu = document.querySelector('.formu');
    const resultado = document.querySelector('.resultado');

    const pessoa = [];
    
    function recebeEventoFormu (evento) {
        evento.preventDefault();

        const nome = formu.querySelector('.nome');
        const sobrenome = formu.querySelector('.sobrenome');
        const peso = formu.querySelector('.peso');
        const altura = formu.querySelector('.altura');

        pessoa.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,

        });

        console.log(pessoa)
        
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`

        
    }
    
    formu.addEventListener('submit', recebeEventoFormu)



}
meuEscopo();