import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    var arr: string[] = ['somar','subtrair','multiplicar','dividir'];
    var ret: string  = '<h4>Operações</h4>';
    arr.forEach(tipo => {
      ret += `<p><a href='/calcular/${tipo}/1/2'>${tipo}</a></p>`;
    });
    return ret;
  }
  getCalculate(n1,n2): number{
    return n1+n2;
  }
}
