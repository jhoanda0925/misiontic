const calcularPorcentaje = (valor, limite) => {
    console.log(valor, limite, valor / limite);
    return limite ? (valor / limite) * 100 : 0;
};

const calcularPorcentajes = async (valorPM10, valorPM2punto5, valorNO2, valorCO, valorSO2) => {
    let response = await fetch('https://misiontic2022upb.vercel.app/api/air-quality/limits');
    let limits = await response.json();
    return {
        porcentajePM10: calcularPorcentaje(valorPM10, limits.limitePM10),
        porcentajePMpunto2: calcularPorcentaje(valorPM2punto5, limits.limitePM2punto5),
        porcentajeNO2: calcularPorcentaje(valorNO2, limits.limiteNO2),
        porcentajeCO: calcularPorcentaje(valorCO, limits.limiteCO),
        porcentajeSO2: calcularPorcentaje(valorSO2, limits.limiteS02)
    }
}

const registrarAQI = async value => {
    let response = await fetch('https://misiontic2022upb.vercel.app/api/air-quality/aqi-ranges');
    let rangosAQI = await response.json();
    const rango = rangosAQI.find(rangoAQI => value >= rangoAQI.de && value <= rangoAQI.hasta);
    return rango ? rango.etiqueta : 'fuera_de_rango';
}

module.exports.registrarAQI = registrarAQI;
module.exports.calcularPocentajes = calcularPorcentajes;
