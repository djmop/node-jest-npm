import { TaxaMetabolicaBasal } from '../../src/TaxaMetabolicaBasal';

test('should throw error for peso <= 0', () => {
    const calc = new TaxaMetabolicaBasal();
    const peso = -1;
    const idade = 40;
    expect(() => {calc.calculaTaxaMasc(idade, peso)}).toThrow('Peso inválido');
    expect(() => {calc.calculaTaxaFem(idade, peso)}).toThrow('Peso inválido');
});

test('should throw error for idade < 0', () => {
    const calc = new TaxaMetabolicaBasal();
    const peso = 10;
    const idade = -1;
    expect(() => {calc.calculaTaxaMasc(idade, peso)}).toThrow('Idade inválida');
    expect(() => {calc.calculaTaxaFem(idade, peso)}).toThrow('Idade inválida');
});
