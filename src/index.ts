import { TaxaMetabolicaBasal } from "./TaxaMetabolicaBasal";
import express from 'express';
const app = express();

app.use(express.json());

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

const taxaMetabolicaBasal = new TaxaMetabolicaBasal();
app.get('/calculaTaxaMetabolicaBasal', validaDados, (request, response) => {
    taxaMetabolicaBasal.calculaTaxa(request, response);
});

app.listen(3333);