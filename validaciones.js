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

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;
