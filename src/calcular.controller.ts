import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiParam } from '@nestjs/swagger/dist/decorators/api-param.decorator';
import { AppService } from './app.service';

@Controller('calcular')
export class CalcularController {

    constructor(private appService: AppService) {}

    @Get(':operacao/:n1/:n2')
    @ApiParam({name: 'operacao', required: true, description: 'Define o tipo de operação', enum:['somar','subtrair','dividir','multiplicar','porcentagem']})
    @ApiParam({name: 'n1', required: true, description: 'Primeiro valor a ser calculado'})
    @ApiParam({name: 'n2', required: true, description: 'Segundo valor a ser calculado'})
    getCalculate(@Param('operacao') operacao:string,@Param('n1') n1:number, @Param('n2')  n2:number): Object{        
        switch(operacao){
            case 'somar':
                return {'resultado': +n1 + +n2};
            case 'subtrair':
                return {'resultado': +n1 - +n2};
            case 'multiplicar':
                return {'resultado': +n1 * +n2};
            case 'dividir':
                return {'resultado': +n1 / +n2};
            case 'porcentagem':
                return {'resultado': (+n1/100)*+n2};
            default:
                return {'resultado': +n1 + +n2};
        }
        

    }

}
