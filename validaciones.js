let registros = [];

function validar_nombre_usuario(string) {
    return /^[A-Z][A-Za-z]*$/g.test(string);
}

function validar_anoNacimiento_usuario(valor) {
    if(isNaN(valor)) {
        return false;
    }
    var parsedValue = parseInt(valor);
    return parsedValue >= 1900 && parsedValue < 2022;
}

function validar_contrasena(string) {
    return string.length >= 6 &&
        /[A-Z]+/.test(string) &&
        /[a-z]+/.test(string) &&
        /[0-9]+/.test(string) &&
        !/\W+|_+/g.test(string)
}

function agregarRegistro() {
    const usuario = document.getElementById('nombre_usuario').value;
    const anoNacimiento = document.getElementById('anoNacimiento_usuario').value;
    const contrasena = document.getElementById('contrasena_usuario').value;
    if(validar_nombre_usuario(usuario) && validar_anoNacimiento_usuario(anoNacimiento) && validar_contrasena(contrasena)) {
        registros.push({usuario, anoNacimiento, contrasena});
    }
}

function EncontrarUsuarioPorEdad(arreglo) {
    let selectedIndex = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < arreglo.length; i++) {
        if(arreglo[i].anoNacimiento >= selectedIndex) {
            selectedIndex = i;
        }
    }
    if(selectedIndex > 0) {
        console.log(arreglo[selectedIndex]);
        return arreglo[selectedIndex];
    }
    return null;
}

document.getElementById('enviar_registro').addEventListener('click', agregarRegistro);

module.exports.registros = registros;
module.exports.EncontrarUsuarioPorEdad = EncontrarUsuarioPorEdad;
module.exports.agregarRegistro = agregarRegistro;
