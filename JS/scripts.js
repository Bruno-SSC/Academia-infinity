// usar um dom para mudar a imagem sempre que o botão for pressionado

let div = document.getElementById('fotoAtual');

let n = 1;
div.style.backgroundImage = `url(./CSS/assets/gymEquip/${n}.jpg)`;

function fotoAnterior() {
    n -= 1;
    if (n < 1)
        n = 6;
    div.style.backgroundImage = `url(./CSS/assets/gymEquip/${n}.jpg)`;

}

function proximaFoto() {
    n += 1;
    if (n > 6)
        n = 1;
    div.style.backgroundImage = `url(./CSS/assets/gymEquip/${n}.jpg)`;

}

