import { TaxaMetabolicaBasal } from '../../src/TaxaMetabolicaBasal';

test('Deve lançar Erro para peso <= 0', () => {
    const calc = new TaxaMetabolicaBasal();
    const peso = -1;
    const idade = 40;
    expect(() => {calc.calculaTaxaMasc(idade, peso)}).toThrow('Peso inválido');
    expect(() => {calc.calculaTaxaFem(idade, peso)}).toThrow('Peso inválido');
});

test('Deve lançar Erro para idade < 0', () => {
    const calc = new TaxaMetabolicaBasal();
    const peso = 10;
    const idade = -1;
    expect(() => {calc.calculaTaxaMasc(idade, peso)}).toThrow('Idade inválida');
    expect(() => {calc.calculaTaxaFem(idade, peso)}).toThrow('Idade inválida');
});

test('(Sexo: Masculino) resultados ser iguais ao esperado', () => {
    const calc = new TaxaMetabolicaBasal();
    let peso;
    let idade;
    let resultado;

    peso = 5;
    idade = 2;
    resultado = 59.512 * peso - 30.4;
    expect(calc.calculaTaxaMasc(idade, peso)).toEqual(resultado);

    peso = 25;
    idade = 7;
    resultado = 22.706 * peso + 504.3;
    expect(calc.calculaTaxaMasc(idade, peso)).toEqual(resultado);

    peso = 50;
    idade = 14;
    resultado = 17.686 * peso + 658.2;
    expect(calc.calculaTaxaMasc(idade, peso)).toEqual(resultado);

    peso = 75;
    idade = 24;
    resultado = 11.472 * peso + 873.1;
    expect(calc.calculaTaxaMasc(idade, peso)).toEqual(resultado);

    peso = 75;
    idade = 45;
    resultado = 11.472 * peso + 873.1;
    expect(calc.calculaTaxaMasc(idade, peso)).toEqual(resultado);

    peso = 75;
    idade = 61;
    resultado = 11.711 * peso + 587.7;
    expect(calc.calculaTaxaMasc(idade, peso)).toEqual(resultado);
});

test('(Sexo: Feminino) resultados ser iguais ao esperado', () => {
    const calc = new TaxaMetabolicaBasal();
    let peso;
    let idade;
    let resultado;

    peso = 5;
    idade = 2;
    resultado = 58.317 * peso - 31.1;
    expect(calc.calculaTaxaFem(idade, peso)).toEqual(resultado);

    peso = 25;
    idade = 7;
    resultado = 20.315 * peso + 485.9;
    expect(calc.calculaTaxaFem(idade, peso)).toEqual(resultado);

    peso = 50;
    idade = 14;
    resultado = 13.384 * peso + 692.6;
    expect(calc.calculaTaxaFem(idade, peso)).toEqual(resultado);

    peso = 75;
    idade = 24;
    resultado = 14.818 * peso + 486.6;
    expect(calc.calculaTaxaFem(idade, peso)).toEqual(resultado);

    peso = 75;
    idade = 45;
    resultado = 8.126 * peso + 845.6;
    expect(calc.calculaTaxaFem(idade, peso)).toEqual(resultado);

    peso = 75;
    idade = 61;
    resultado = 9.082 * peso + 658.5;
    expect(calc.calculaTaxaFem(idade, peso)).toEqual(resultado);
});
