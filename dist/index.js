"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaxaMetabolicaBasal_1 = require("./TaxaMetabolicaBasal");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
function validaDados(request, response, next) {
    const { peso, idade, sexo } = request.query;
    // Validação
    if (peso == '' || peso == null) {
        return response.status(400).json('Peso inválido ou não informado.');
    }
    if (idade == '' || idade == null) {
        return response.status(400).json('Idade inválida ou não informado');
    }
    if (sexo != 'M' && sexo != 'F') {
        return response.status(400).json('Sexo inválido ou não informado.');
    }
    return next();
}
const taxaMetabolicaBasal = new TaxaMetabolicaBasal_1.TaxaMetabolicaBasal();
app.get('/calculaTaxaMetabolicaBasal', validaDados, (request, response) => {
    taxaMetabolicaBasal.calculaTaxa(request, response);
});
app.listen(3333);