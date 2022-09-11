// Enviar
// Compartilhar
// Tua SaúdeTemas Emagrecer
// Taxa metabólica basal: o que é e como calcular
// dezembro 2021
// A taxa metabólica basal, conhecida também como gasto energético basal, é a quantidade de energia que o corpo, em repouso, gasta para manter as suas funções vitais, como respiração, batimentos do coração e manutenção da temperatura corporal.

// Os valores da taxa metabólica basal variam de acordo com a idade, o peso e o sexo, e são usados para calcular a quantidade total de energia que o corpo gasta por dia, sendo uma ferramenta para auxiliar no planejamento alimentar de pessoas que desejam manter o peso, engordar ou emagrecer. Veja como calcular as calorias da dieta para engordar ou emagrecer.

// Uma forma simples de calcular a taxa metabólica basal é usando a calculadora a seguir, bastando apenas inserir seus dados:

// Outra forma de calcular a taxa metabólica basal é utilizando uma fórmula criada pela Organização Mundial da Saúde, onde se multiplica o peso corporal por um valor fixo e, após, soma-se esse resultado a outro valor pré definido, de acordo com o sexo e a idade da pessoa.

// Sexo
// Mulher
// Homem
// Idade:
// Ex: 35
//  anos
// Peso:
// Ex: 62,5
//  kg
// Atividade Física no trabalho:

// Trabalho com pouco esforço físico
// Exercicio Físico Semanal:

// Pouco ou nada
// Como calcular a taxa metabólica basal

const express = require('express');

const app = express();
app.use(express.json());

app.get('/calculaTaxaMetabolicaBasal', (request, response) => {
    const { peso, idade } = request.query;

});

app.listen(3333);