
const encriptar = document.getElementById("boton1");
const desencriptar = document.getElementById("boton2");
const copia = document.getElementById("extraer");
let textareaUno = document.getElementById("textoAlmacenado");
let textareaDos = document.getElementById("textoCopia");

/*function observacion() {
    let verificacion = textareaUno;
    let texto = verificacion.value;

    // Expresión regular para validar solo minúsculas y espacios
    const regente = /^[a-z\s]*$/;

    // Verifica si el texto no coincide con la expresión regular
    if (!regente.test(texto)) {
        // Alerta al usuario
        alert("Solo se permiten letras minúsculas y espacios.");
        // Limpia el textarea
        texto.value = "";
    }
}
    PARA TENER EN CUENTA 
*/

const textareaVerificacion = document.getElementById('textoAlmacenado');

        // Evento para restringir caracteres al escribir
        textareaVerificacion.addEventListener('input', function() {
            const textoOriginal = this.value;
            // Filtrar solo letras minúsculas y números
            this.value = this.value.replace(/[^a-z0-9 ]/g, '');

            // Verificar si hubo caracteres no permitidos
            if (this.value.length < textoOriginal.length) {
                alert('No se permiten mayúsculas ni caracteres especiales.');
            }
        });

boton1.addEventListener('click', function() {

    let textoAEncriptar = textoAlmacenado.value;
    let cifrado = {
        'a':'ai',
        'e':'enter',
        'i':'imes',
        'o':'ober',
        'u':'ufat',
    };

    let regex = new RegExp(Object.keys(cifrado).join('|'),'g');

    let nuevoTexto = textoAEncriptar.replace(regex,(match) => {
        return cifrado[match];
    });

    textareaUno.value = nuevoTexto;
    textareaDos.value = nuevoTexto;
    textareaUno.value = '';
    mensaje.style.backgroundImage = "none"
   

});

boton2.addEventListener('click', function() {
    let textoAEncriptar = textoAlmacenado.value;
    let cifrado = {
        'ai':'a',
        'enter':'e',
        'imes':'i',
        'ober':'o',
        'ufat':'u',
    };

    let regex = new RegExp(Object.keys(cifrado).join('|'),'g');

    let nuevoTexto = textoAEncriptar.replace(regex,(match) => {
        return cifrado[match];
    });

    textareaUno.value = nuevoTexto;
    textareaDos.value = nuevoTexto;
    textareaUno.value = '';
    textoCopia.style.backgroundimage = "none"

});

copia.onclick = function() {
    const textareaCopia = document.getElementById("textoCopia");
    // Usar la API de Clipboard para copiar el texto
    navigator.clipboard.writeText(textareaCopia.value)
        .then(() => {
            // Notificación de éxito
            alert('Texto copiado al PortaPapeles: ' + textareaCopia.value);
        })
        .catch(err => {
            // Manejo de errores
            console.error('Error al copiar el texto: ', err);
        });
};