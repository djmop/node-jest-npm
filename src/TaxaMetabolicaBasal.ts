// import { response } from 'express';
// import { Response, Request } from 'express';
import { Constants } from "./Constants";

export class TaxaMetabolicaBasal {
   public calculaTaxaMetabolica(request, response) {
      const { peso, idade, sexo } = request.query;
      let valorMetabolicoBasal = this.calculaTaxa(idade, peso, sexo);
      return response.send({
         taxaMetabolicaBasal: valorMetabolicoBasal,
      });
   }

  public calculaTaxa(idade: any, peso: any, sexo: any): number {
   if (peso <= 0) { throw new Error('Peso inválido'); }
   let calcCst = new Constants();
   let cst = calcCst.getConstants(idade, sexo);
   return cst.a * peso + cst.b;
  }
};