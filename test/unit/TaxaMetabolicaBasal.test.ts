import { TaxaMetabolicaBasal } from '../../src/TaxaMetabolicaBasal';
import { Constants } from '../../src/Constants';

test('Deve lançar Erro para peso <= 0', () => {
    const calc = new TaxaMetabolicaBasal();
    const peso = -1;
    const idade = 40;
    expect(() => {calc.calculaTaxa(idade, peso, 'M')}).toThrow('Peso inválido');
    expect(() => {calc.calculaTaxa(idade, peso, 'F')}).toThrow('Peso inválido');
});

test('Deve lançar Erro para idade < 0', () => {
    const calc = new TaxaMetabolicaBasal();
    const peso = 10;
    const idade = -1;
    expect(() => {calc.calculaTaxa(idade, peso, 'M')}).toThrow('Idade inválida');
    expect(() => {calc.calculaTaxa(idade, peso, 'F')}).toThrow('Idade inválida');
});

test("Deve lançar Erro para sexo diferente de 'M' ou 'F'", () => {
    const calc = new TaxaMetabolicaBasal();
    const peso = 75;
    const idade = 30;
    expect(() => {calc.calculaTaxa(idade, peso, 'Z')}).toThrow('Sexo inválido');
});

test('(Sexo: Masculino) resultados devem ser iguais ao esperado', () => {
    const calc = new TaxaMetabolicaBasal();
    const calcCst = new Constants();
    let peso;
    let idade;
    let resultado;

    peso = 5;
    idade = 2;
    resultado = 59.512 * peso - 30.4;
    expect(calc.calculaTaxa(idade, peso, 'M')).toEqual(resultado);

    peso = 25;
    idade = 7;
    resultado = 22.706 * peso + 504.3;
    expect(calc.calculaTaxa(idade, peso, 'M')).toEqual(resultado);

    peso = 50;
    idade = 14;
    resultado = 17.686 * peso + 658.2;
    expect(calc.calculaTaxa(idade, peso, 'M')).toEqual(resultado);

    peso = 75;
    idade = 24;
    resultado = 11.472 * peso + 873.1;
    expect(calc.calculaTaxa(idade, peso, 'M')).toEqual(resultado);

    peso = 75;
    idade = 45;
    resultado = 11.472 * peso + 873.1;
    expect(calc.calculaTaxa(idade, peso, 'M')).toEqual(resultado);

    peso = 75;
    idade = 61;
    resultado = 11.711 * peso + 587.7;
    expect(calc.calculaTaxa(idade, peso, 'M')).toEqual(resultado);
});

test('(Sexo: Feminino) resultados devem ser iguais ao esperado', () => {
    const calc = new TaxaMetabolicaBasal();
    let peso, idade, resultado;

    peso = 5;
    idade = 2;
    resultado = 58.317 * peso - 31.1;
    expect(calc.calculaTaxa(idade, peso, 'F')).toEqual(resultado);

    peso = 25;
    idade = 7;
    resultado = 20.315 * peso + 485.9;
    expect(calc.calculaTaxa(idade, peso, 'F')).toEqual(resultado);

    peso = 50;
    idade = 14;
    resultado = 13.384 * peso + 692.6;
    expect(calc.calculaTaxa(idade, peso, 'F')).toEqual(resultado);

    peso = 75;
    idade = 24;
    resultado = 14.818 * peso + 486.6;
    expect(calc.calculaTaxa(idade, peso, 'F')).toEqual(resultado);

    peso = 75;
    idade = 45;
    resultado = 8.126 * peso + 845.6;
    expect(calc.calculaTaxa(idade, peso, 'F')).toEqual(resultado);

    peso = 75;
    idade = 61;
    resultado = 9.082 * peso + 658.5;
    expect(calc.calculaTaxa(idade, peso, 'F')).toEqual(resultado);
});
