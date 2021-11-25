describe('src', () => {
    const Src = require('../src');

    describe('Tests on registrarAQI', function () {
        it('should be \'excelente\'', () => {
            Src.registrarAQI(3).then(val => expect(val).toBe('excelente'))
            Src.registrarAQI(0).then(val => expect(val).toBe('excelente'))
            Src.registrarAQI(30).then(val => expect(val).toBe('excelente'))
        });
        it('should be \'bueno\'', () => {
            Src.registrarAQI(40).then(val => expect(val).toBe('bueno'));
            Src.registrarAQI(31).then(val => expect(val).toBe('bueno'));
            Src.registrarAQI(50).then(val => expect(val).toBe('bueno'));
        });
        it('should be \'moderado\'', () => {
            Src.registrarAQI(51).then(val => expect(val).toBe('moderado'));
            Src.registrarAQI(80).then(val => expect(val).toBe('moderado'));
            Src.registrarAQI(100).then(val => expect(val).toBe('moderado'));
        });
        it('should be \'bajo\'', () => {
            Src.registrarAQI(101).then(val => expect(val).toBe('bajo'));
            Src.registrarAQI(150).then(val => expect(val).toBe('bajo'));
            Src.registrarAQI(120).then(val => expect(val).toBe('bajo'));
        });
        it('should be \'insalubre\'', () => {
            Src.registrarAQI(151).then(val => expect(val).toBe('insalubre'));
            Src.registrarAQI(171).then(val => expect(val).toBe('insalubre'));
            Src.registrarAQI(200).then(val => expect(val).toBe('insalubre'));
        });
        it('should be \'peligroso\'', () => {
            Src.registrarAQI(201).then(val => expect(val).toBe('peligroso'));
            Src.registrarAQI(221).then(val => expect(val).toBe('peligroso'));
            Src.registrarAQI(300).then(val => expect(val).toBe('peligroso'));
        });
        it('should be \'fuera_de_rango\'', () => {
            Src.registrarAQI(-3).then(val => expect(val).toBe('fuera_de_rango'));
            Src.registrarAQI(301).then(val => expect(val).toBe('fuera_de_rango'));
        });
    });

    describe('tests on calcularPorcentajes', () => {
        it('sould be 100%',  () => {
           Src.calcularPocentajes(1, 1, 1, 1, 1, 1,  1, 1, 1, 1).then(value => expect(value.porcentajePM10).toBeCloseTo(100));
        });
        it('sould be 0',  () => {
            Src.calcularPocentajes(0, 0, 0, 0, 0, 1,  1, 1, 1, 1).then(value => expect(value.porcentajePM10).toBeCloseTo(0));
        });
        it('sould calculate variable percentages',  () => {
            Src.calcularPocentajes(40, 100, 100, 100, 100, 10,  20, 30, 40, 50).then(value => expect(value.porcentajePM10).toBeCloseTo(25.001));
        });
    })
});
