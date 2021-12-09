const nombreMenorGas = async () => {
    let response = await fetch('https://misiontic2022upb.vercel.app/api/air-quality/limits');
    response = await response.json();
    if(response.limiteNO2 < response.limiteCO && response.limiteNO2 < response.limiteS02) {
        return 'NO2';
    }
    if(response.limiteCO < response.limiteS02) {
        return 'CO';
    }
    return 'SO2';
}

module.exports.nombreMenorGas = nombreMenorGas;
