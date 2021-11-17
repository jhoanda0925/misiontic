const calcularPorcentaje = (valor, limite) => {
    console.log(valor, limite);
    const result = limite ? (valor / limite) * 100 : 0;
    console.log('result', result);
    return result;
};

const calcularPorcentajes = (limitePM10, limitePM2punto5, limiteNO2, limiteCO, limiteS02, valorPM10, valorPM2punto5, valorNO2, valorCO, valorSO2) => {
    return {
        porcentajePM10: calcularPorcentaje(valorPM10, limitePM10),
        porcentajePMpunto2: calcularPorcentaje(valorPM2punto5, limitePM2punto5),
        porcentajeNO2: calcularPorcentaje(valorNO2, limiteNO2),
        porcentajeCO: calcularPorcentaje(valorCO, limiteCO),
        porcentajeSO2: calcularPorcentaje(valorSO2, limiteS02)
    }
}

const registrarAQI = value => {
    const rango = rangosAQI.find(rangoAQI => value >= rangoAQI.de && value <= rangoAQI.hasta);
    return rango ? rango.etiqueta : 'fuera_de_rango';
}

module.exports.registrarAQI = registrarAQI;
module.exports.calcularPocentajes = calcularPorcentajes;
global.rangosAQI = [
    { etiqueta: 'excelente', de: 0, hasta: 30},
    { etiqueta: 'bueno', de: 31, hasta: 50},
    { etiqueta: 'moderado', de: 51, hasta: 100},
    { etiqueta: 'bajo', de: 101, hasta: 150},
    { etiqueta: 'insalubre', de: 151, hasta: 200},
    { etiqueta: 'peligroso', de: 201, hasta: 300},
];
