export class Constants {
    consts = {'a': 0, 'b': 0};
 
    public getConstants(idade: any, sexo: any) {
       if (sexo == 'M') {
          this.constantesMasc(idade);
       } else if (sexo == 'F') {
          this.constantesFem(idade);
       } else {
          throw new Error('Sexo inválido');
       };
 
       return this.consts;
    };
 
    private constantesMasc(idade) {
       switch(true) {
          case (idade < 0):
            throw new Error('Idade inválida');
          case (idade >= 0 && idade < 3):
             this.consts.a = 59.512;
             this.consts.b = -30.4;
             break;
          case (idade < 10):
             this.consts.a = 22.706;
             this.consts.b = 504.3;
             break;
          case (idade < 18):
             this.consts.a = 17.686;
             this.consts.b = 658.2;
             break;
          case (idade < 30):
             this.consts.a = 11.472;
             this.consts.b = 873.1;
             break;
          case (idade < 60):
             this.consts.a = 11.472;
             this.consts.b = 873.1;
             break;
          case (idade >= 60):
             this.consts.a = 11.711; 
             this.consts.b = 587.7;
             break;
       };
    };
 
    private constantesFem(idade) {
       switch(true) {
            case (idade < 0):
                throw new Error('Idade inválida');
            case (idade >= 0 && idade < 3):
                this.consts.a = 58.317;
                this.consts.b = -31.1;
                break;
            case (idade < 10):
                this.consts.a = 20.315;
                this.consts.b = 485.9;
                break;
            case (idade < 18):
                this.consts.a = 13.384;
                this.consts.b = 692.6;
                break;
            case (idade < 30):
                this.consts.a = 14.818;
                this.consts.b = 486.6;
                break;
            case (idade < 60):
                this.consts.a = 8.126;
                this.consts.b = 845.6;
                break;
            case (idade >= 60):
                this.consts.a = 9.082;
                this.consts.b = 658.5;
                break;
       };
    };
 };