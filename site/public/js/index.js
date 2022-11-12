// ----------------carousel---------------------------------------
// começa em 1
let contador = 1;

document.getElementById("radio1").checked = true;

// Quanto tempo será a passagem de cada imagem
setInterval(function () {
    nextImage();
}, 3000)

function nextImage() {
    contador++;
    if (contador > 4) {
        contador = 1;
    }

    document.getElementById("radio" + contador).checked = true;
}

