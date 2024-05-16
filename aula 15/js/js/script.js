const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML =`<p> Raiz quadrada: ${numero ** (1/2)},<br /> ${numero} é inteiro: ${Number.isInteger(numero)}  <br /> É NaN: ${Number.isNaN(numero)}, <br /> Arredondando para baixo: ${Math.floor(numero)} <br /> Arredondando para cima: ${Math.ceil(numero)} <br /> Com duas casas decimais: ${numero.toFixed(2)}. </p>`;
        //`<p>${numero} é inteiro: ${numero.isInteger(numero)}</p>`;
        //`<p>É NaN: ${Number.isNaN(numero)}</p>`;
        //`<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
        //`<p>Arredondando para cime: ${Math.ceil(numero)}</p>`
        //`<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`
        //
        //
                       