const relogio = document.getElementById('.relogio');
const iniciar = document.getElementById('.iniciar');
const parar = document.getElementById('.parar');
const zerar = document.getElementById('.zerar');

let hora = 0;
let minuto = 0;
let segundos = 0;

function cronometro  () {
    segundos ++;
    if (segundos === 60) {
        segundos = 0;
        minutos ++;
        if (minuto === 60 ) {
            minuto = 0;
            hora ++;
        }
    }
    return `${hora.toString().padStart}:${minuto.toString().padStart}:${segundo.toString().padStart(2, '0')}`
}

relogio.innerHTML = cronometro;