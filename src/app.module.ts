import { CalcularController } from './calcular.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    CalcularController, AppController],
  providers: [AppService],
})
export class AppModule { }
