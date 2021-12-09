require('jest-fetch-mock').enableMocks()
describe('src', () => {
    const Src = require('./src');
    describe('', () => {
        beforeEach(() => fetch.resetMocks)
        it('Debería ser CO', async () => {
            fetch.mockResponse(JSON.stringify({
                "limitePM10": 50,
                "limitePM2punto5": 60,
                "limiteNO2": 100,
                "limiteCO": 80,
                "limiteS02": 90
            }));
            const response = await Src.nombreMenorGas();
            expect(response).toBe('CO');
        });
        it('Debería ser NO2', async () => {
            fetch.mockResponse(JSON.stringify({
                "limitePM10": 50,
                "limitePM2punto5": 60,
                "limiteNO2": 10,
                "limiteCO": 80,
                "limiteS02": 90
            }));
            const response = await Src.nombreMenorGas();
            expect(response).toBe('NO2');
        });
        it('Debería ser SO2', async () => {
            fetch.mockResponse(JSON.stringify({
                "limitePM10": 50,
                "limitePM2punto5": 60,
                "limiteNO2": 10,
                "limiteCO": 80,
                "limiteS02": 9
            }));
            const response = await Src.nombreMenorGas();
            expect(response).toBe('SO2');
        });
    });
});
