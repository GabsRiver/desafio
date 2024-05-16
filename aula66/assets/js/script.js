const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const zerar = document.querySelector('.zerar');

let hora = 0;
let minuto = 0;
let segundos = 0;

function cronometro() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minuto === 60) {
            minuto = 0;
            hora++;
        }
    }
    return `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`
}

function inicioCrono() {
    relogio.innerHTML = (cronometro());
}

iniciar.addEventListener('click', function (event) {
    cronos = setInterval(inicioCrono, 1000);
    relogio.style.color = 'black'; 
});

parar.addEventListener('click', function(event){
    clearInterval(cronos);
    relogio.style.color = 'red';
});

zerar.addEventListener('click', function(event){
    clearInterval(cronos);
    hora = 0;
    minuto = 0;
    segundos = 0;
    relogio.innerHTML = '00:00:00'
    relogio.style.color = 'black';
})