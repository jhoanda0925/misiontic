describe('src', () => {
    const Src = require('../src');

    describe('Tests on registrarAQI', function () {
        it('should be \'excelente\'', () => {
            expect(Src.registrarAQI(3)).toBe('excelente');
            expect(Src.registrarAQI(0)).toBe('excelente');
            expect(Src.registrarAQI(30)).toBe('excelente');
        });
        it('should be \'bueno\'', () => {
            expect(Src.registrarAQI(40)).toBe('bueno');
            expect(Src.registrarAQI(31)).toBe('bueno');
            expect(Src.registrarAQI(50)).toBe('bueno');
        });
        it('should be \'moderado\'', () => {
            expect(Src.registrarAQI(51)).toBe('moderado');
            expect(Src.registrarAQI(80)).toBe('moderado');
            expect(Src.registrarAQI(100)).toBe('moderado');
        });
        it('should be \'bajo\'', () => {
            expect(Src.registrarAQI(101)).toBe('bajo');
            expect(Src.registrarAQI(150)).toBe('bajo');
            expect(Src.registrarAQI(120)).toBe('bajo');
        });
        it('should be \'insalubre\'', () => {
            expect(Src.registrarAQI(151)).toBe('insalubre');
            expect(Src.registrarAQI(171)).toBe('insalubre');
            expect(Src.registrarAQI(200)).toBe('insalubre');
        });
        it('should be \'peligroso\'', () => {
            expect(Src.registrarAQI(201)).toBe('peligroso');
            expect(Src.registrarAQI(221)).toBe('peligroso');
            expect(Src.registrarAQI(300)).toBe('peligroso');
        });
        it('should be \'fuera_de_rango\'', () => {
            expect(Src.registrarAQI(-3)).toBe('fuera_de_rango');
            expect(Src.registrarAQI(301)).toBe('fuera_de_rango');
        });
    });

    describe('tests on calcularPorcentajes', () => {
        it('sould be 100%',  () => {
           const value = Src.calcularPocentajes(1, 1, 1, 1, 1, 1,  1, 1, 1, 1);
           expect(value.porcentajePM10).toBeCloseTo(100)
        });
        it('sould be 0',  () => {
            const value = Src.calcularPocentajes(0, 0, 0, 0, 0, 1,  1, 1, 1, 1);
            expect(value.porcentajePM10).toBeCloseTo(0)
        });
        it('sould calculate variable percentages',  () => {
            const value = Src.calcularPocentajes(40, 100, 100, 100, 100, 10,  20, 30, 40, 50);
            expect(value.porcentajePM10).toBeCloseTo(25.001)
        });
    })
});
