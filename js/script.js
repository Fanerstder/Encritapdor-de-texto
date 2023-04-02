const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")
const alertMessage = document.querySelector(".box-mensaje")
const alertMessage1 = document.querySelector(".box-mensaje2")


/*---------- FUNCIONES -----------*/

/* Function de Encritar*/

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    /* convertir letras mayusculas en minúsculas */
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i=0;i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
    stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])       
        }
    }
    return stringEncriptada;
}

/* Funcion de desencriptar */

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    /* convertir letras mayusculas en minúsculas */
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i=0;i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
    stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])       
        }
    }
    return stringDesencriptada;
    
}

/* BOTONES */

function btnEncritar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage ="none"
    inputTexto.value ="";
    alertMessage.style.display = "none";
    alertMessage1.style.display = "none";
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    inputTexto.value ="";
}

function copyToClipBoard() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value ="";
    alert("texto copiado");
    alertMessage.style.display = "";
    alertMessage1.style.display = "";
}
