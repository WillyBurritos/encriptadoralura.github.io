const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiado = document.querySelector(".puedesCopiar");

/*console.table(matrizCodigo);*/

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    /*mensaje.style.backgroundImage = "none";*/
}

/*Cada elemento de la matrizCodigo tiene dos elementos dentro, entonces si el string incluye el elemento "0" de los elementos interiores,
los reemplaza con el segundo elemento interior, o sea la posición "1" */
function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return stringEncriptado;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}



function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }
    return stringDesencriptado;
}

function btnCopiar() {

    mensaje.select();
    document.execCommand('copy')

    copiado.innerHTML = "¡Copiado!";
    copiado.style.color = "#169e16";
    copiado.style.animation = "moveRight 1s ease-in-out";
    mensaje.value = "";

    copiado.addEventListener('animationend', () => {
        setTimeout(() => {
            copiado.innerHTML = "Puedes copiar el texto"; // Restablece el texto
            copiado.style.color = ""; // Restablece el color
            copiado.style.animation = ""; // Elimina la animación
        }, 2000); // 2000 milisegundos = 2 segundo de retraso
    });

}





