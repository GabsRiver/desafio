const altura = 400;
const largura = 700;

function paisagem () {
    console.log(altura, largura);
    if ( altura < largura && altura > 315 && largura > 600) {
        console.log('Essa imagem é uma paisagem');
    } else {
        console.log('Não é paisagem');
    }
}

paisagem();