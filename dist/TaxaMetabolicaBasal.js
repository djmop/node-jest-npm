"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxaMetabolicaBasal = void 0;
class TaxaMetabolicaBasal {
    calculaTaxa(request, response) {
        const { peso, idade, sexo } = request.query;
        let valorMetabolicoBasal = 0.0;
        if (sexo == 'M') {
            valorMetabolicoBasal = this.calculaTaxaMasc(parseInt(idade), parseFloat(peso));
        }
        else {
            valorMetabolicoBasal = this.calculaTaxaFem(parseInt(idade), parseFloat(peso));
        }
        return response.send({
            'taxaMetabolicaBasal': valorMetabolicoBasal,
        });
    }
    calculaTaxaMasc(idade, peso) {
        let valorMetabolicoBasal = 0.0;
        if (idade >= 0 && idade < 3) {
            valorMetabolicoBasal = (59.512 * peso) - 30.4;
        }
        else if (idade >= 3 && idade < 10) {
            valorMetabolicoBasal = (22.706 * peso) + 504.3;
        }
        else if (idade >= 10 && idade < 18) {
            valorMetabolicoBasal = (17.686 * peso) + 658.2;
        }
        else if (idade >= 18 && idade < 30) {
            valorMetabolicoBasal = (11.472 * peso) + 873.1;
        }
        else if (idade >= 30 && idade < 60) {
            valorMetabolicoBasal = (11.472 * peso) + 873.1;
        }
        else if (idade >= 60) {
            valorMetabolicoBasal = (11.711 * peso) + 587.7;
        }
        return valorMetabolicoBasal;
    }
    calculaTaxaFem(idade, peso) {
        let valorMetabolicoBasal = 0.0;
        if (idade >= 0 && idade < 3) {
            valorMetabolicoBasal = (58.317 * peso) - 31.1;
        }
        if (idade >= 3 && idade < 10) {
            valorMetabolicoBasal = (20.315 * peso) + 485.9;
        }
        if (idade >= 10 && idade < 18) {
            valorMetabolicoBasal = (13.384 * peso) + 692.6;
        }
        if (idade >= 18 && idade < 30) {
            valorMetabolicoBasal = (14.818 * peso) + 486.6;
        }
        if (idade >= 30 && idade < 60) {
            valorMetabolicoBasal = (8.126 * peso) + 845.6;
        }
        if (idade >= 60) {
            valorMetabolicoBasal = (9.082 * peso) + 658.5;
        }
        return valorMetabolicoBasal;
    }
}
exports.TaxaMetabolicaBasal = TaxaMetabolicaBasal;