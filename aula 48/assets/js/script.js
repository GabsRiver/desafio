function getDayWeekText (dayWeek){
    let dayWeekText;

    switch (dayWeek) {
        case 0:
            dayWeekText = 'domingo';
            return dayWeekText;
        case 1:
            dayWeekText = 'segunda-feira';
            return dayWeekText;
        case 2:
            dayWeekText = 'terça-feira';
            return dayWeekText;
        case 3:
            dayWeekText = 'quarta-feira';
            return dayWeekText;
        case 4:
            dayWeekText = 'quinta-feira';
            return dayWeekText;
        case 5:
            dayWeekText = 'sexta-feira';
            return dayWeekText;
        case 6:
            dayWeekText = 'Sabado';
            return dayWeekText;
        default:
            dayWeekText = ' ';
            return dayWeekText;
    }
}

function getmes (mess){
    let mesdia;

    switch (mess) {
        case 0:
            mesdia = 'janeiro';
            return mesdia;
        case 1:
            mesdia = 'fevereiro';
            return mesdia;
        case 2:
            mesdia = 'março';
            return mesdia;
        case 3:
            mesdia = 'abril';
            return mesdia;
        case 4:
            mesdia = 'maio';
            return mesdia;
        case 5:
            mesdia = 'junho';
            return mesdia;
        case 6:
            mesdia = 'julho';
            return mesdia;
        case 7:
            mesdia = 'agosto';
            return mesdia;
        case 8:
            mesdia = 'setembro';
            return mesdia;
        case 9:
            mesdia = 'outubro';
            return mesdia;
        case 10:
            mesdia = 'novembro';
            return mesdia;
        case 11:
            mesdia = 'dezembro';
            return mesdia;
    }
}

function zeroToLeft  (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data){
    const dia = zeroToLeft(data.getDate());
    const mes = getmes(mess);
    const ano = zeroToLeft(data.getFullYear());

    const hora = zeroToLeft(data.getHours());
    const minuto = zeroToLeft(data.getMinutes());
    const segundo = zeroToLeft(data.getSeconds());

    return `${dia} de ${mes} de ${ano}, ás ${hora}:${minuto}:${segundo}`
}

const data = new Date();
let dayWeek = data.getDay();
const mess = data.getMonth();
const dayWeekText = getDayWeekText(dayWeek);
const dataBrasil = formataData(data);

console.log(dayWeek, dayWeekText, dataBrasil)

const titu = document.querySelector('.titu');
titu.innerHTML = `Hoje é ${dayWeekText}, ${dataBrasil}`;