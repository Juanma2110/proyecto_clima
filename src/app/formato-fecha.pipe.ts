import { Pipe, PipeTransform } from '@angular/core';
import { ClimaService} from './clima.service'
@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

 
  constructor(private climaService: ClimaService) { }

  transform(value: string): string {
    return this.climaService.parsearFecha(value);
  }

}
