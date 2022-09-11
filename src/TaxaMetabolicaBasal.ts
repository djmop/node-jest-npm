import { response } from "express";
import { Response, Request } from "express";

export class TaxaMetabolicaBasal {

    public calculaTaxa(request: Request, response: Response) {

        const { peso, idade, sexo } = request.query;

        let valorMetabolicoBasal = 0.0;

        if (sexo == 'M') {
            this.calculaTaxaMasc(idade, peso);
        } else {
            this.calculaTaxaFem(idade, peso);
        }

        return valorMetabolicoBasal;

    }

    private calculaTaxaMasc(idade: any, peso: any) {

        let valorMetabolicoBasal = 0.0;

        switch (idade) {

            // De 0 a 3 anos
            case (idade >= 0 && idade < 3):
                valorMetabolicoBasal = (59.512 * peso) - 30.4;
                break;


            // De 3 a 10 anos
            case (idade >= 3 && idade < 10):
                valorMetabolicoBasal = (22.706 * peso) + 504.3;
                break;


            // De 10 a 18 anos
            case (idade >= 10 && idade < 18):
                valorMetabolicoBasal = (17.686 * peso) + 658.2;
                break;


            // De 18 a 30 anos
            case (idade >= 18 && idade < 30):
                valorMetabolicoBasal = (15.057 * peso) + 692.2;
                break;


            // De 18 a 30 anos
            case (idade >= 30 && idade < 60):
                valorMetabolicoBasal = (11.472 * peso) + 873.1;
                break;


            // >= 60 anos
            case (idade >= 60):
                valorMetabolicoBasal = (11.711 * peso) + 587.7;
                break;

            default:
                return response.status(400).json('Idade inválida');
        }

        return valorMetabolicoBasal;
    }

    private calculaTaxaFem(idade: any, peso: any) {

        let valorMetabolicoBasal = 0.0;

        switch (idade) {

            // De 0 a 3 anos
            case (idade >= 0 && idade < 3):
                valorMetabolicoBasal = (58.317 * peso) - 31.1;
                break;

            // De 3 a 10 anos
            case (idade >= 3 && idade < 10):
                valorMetabolicoBasal = (20.315 * peso) + 485.9;
                break;

            // De 10 a 18 anos
            case (idade >= 10 && idade < 18):
                valorMetabolicoBasal = (13.384 * peso) + 692.6;
                break;

            // De 18 a 30 anos
            case (idade >= 18 && idade < 30):
                valorMetabolicoBasal = (14.818 * peso) + 486.6;
                break;

            // De 18 a 30 anos
            case (idade >= 30 && idade < 60):
                valorMetabolicoBasal = (8.126 * peso) + 845.6;
                break;

            // >= 60 anos
            case (idade >= 60):
                valorMetabolicoBasal = (9.082 * peso) + 658.5;
                break;

            default:
                return response.status(400).json('Idade inválida');
        }

        return valorMetabolicoBasal;

    }
}



