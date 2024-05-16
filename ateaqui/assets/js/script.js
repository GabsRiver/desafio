function escopo() {
    const formu = document.querySelector('.formu')
    const resultado = document.querySelector('.resultado')

    

    function eventoUm(evento) {
        evento.preventDefault();
        const peso = formu.querySelector('.peso').value;
        const altura = formu.querySelector('.altura').value;

        const pesom = Number(peso);
        const alturam = Number(altura);
        console.log(peso);
        console.log(altura);
        console.log(pesom);
        console.log(alturam);

        if (!isNaN(alturam)) {
            if (!isNaN(pesom)){
                console.log(pesom);
                console.log(alturam);             
                const calq = pesom / (alturam * alturam);
                console.log(calq);
                if (calq <= 18.5) {
                    resultado.innerHTML = `<p> Você esta com ${calq.toFixed(2)} e está Abaixo do peso </p>`;
                    resultado.style.backgroundColor = 'yellow';
                    resultado.style.color = 'black';
                } else if (calq >= 18.5 && calq <= 24.9) {
                    resultado.innerHTML = `<p> Você esta com ${calq.toFixed(2)} e o seu peso é Normal </p>`;
                    resultado.style.backgroundColor = 'green';
                    resultado.style.color = 'white';
                } else if (calq >= 25 && calq <= 29.9) {
                    resultado.innerHTML = `<p> Você esta com ${calq.toFixed(2)} e está com Sobre peso </p>`;
                    resultado.style.backgroundColor = 'brown';
                    resultado.style.color = 'white';
                } else if (calq >= 30 && calq <= 34.9) {
                     resultado.innerHTML = `<p> Você esta com ${calq.toFixed(2)} e está com Obesididade grau 1 </p>`;
                     resultado.style.backgroundColor = 'red';
                     resultado.style.color = 'white';
                } else if (calq >= 35 && calq <= 39.9) {
                    resultado.innerHTML = `<p> Você esta com ${calq.toFixed(2)} e está com Obesididade grau 2 </p>`;
                    resultado.style.backgroundColor = 'red';
                    resultado.style.color = 'white';
                } else if (calq >= 40) {
                    resultado.innerHTML = `<p> Você esta com ${calq.toFixed(2)} e está com Obesididade grau 3 </p>`;
                    resultado.style.backgroundColor = 'black'; 
                    resultado.style.color = 'white';                  
                } else {
                    resultado.innerHTML = `<p> Valor invalido </p>`;
                }                   
            } else if (isNaN(pesom)) {
                resultado.innerHTML = 'Valor digitado em Peso está inválido (use o "." ex: 1.80)';
                resultado.style.backgroundColor = 'grey'; 
                resultado.style.color = 'black';  
            } else {
                resultado.innerHTML = 'Nenhum valor digitado';
            }
        } else if (isNaN(alturam)) {
            resultado.innerHTML = 'Valor digitado em Altura está inválido (use o "." ex: 1.80)';
            resultado.style.backgroundColor = 'grey'; 
            resultado.style.color = 'black'; 
        } else {
            resultado.innerHTML = 'Nenhum valor digitado';
        }


    }

    formu.addEventListener('submit', eventoUm)



}
escopo();

        
        

