let registros = [];

function validar_captcha(recaptcha) {
    return recaptcha == 16;
}

function iniciar_sesion(usuario, contrasena, recaptcha) {
    if(!validar_captcha(recaptcha)) return false;
    return registros.findIndex(registro => registro.usuario === usuario && registro.contrasena === contrasena) !== -1;
}

module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;
