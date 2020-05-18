import { Pipe, PipeTransform } from '@angular/core';
import {ClimaService} from './clima.service'
@Pipe({
  name: 'diaFecha'
})
export class DiaFechaPipe implements PipeTransform {
  constructor(private climaService: ClimaService) { }

  transform(fechaComoCadena): string {
    fechaComoCadena = this.climaService.parsearFecha(fechaComoCadena) + " 00:00:00";
    const dias = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
    ];
    const numeroDia = new Date(fechaComoCadena).getDay();
    const nombreDia = dias[numeroDia];
    return nombreDia;
  }

}
