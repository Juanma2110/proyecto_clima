import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private RUTA_IP = "http://api.ipstack.com/check?access_key=0861bf5888c0b346165c869497d4eedf";

  constructor() { }

  getIp() {
    return from(fetch(this.RUTA_IP));
  }

  getClimaConditions(longitude: string, latitude: string) {
    return from(fetch(`http://www.7timer.info/bin/civillight.php?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json&tzshift=0`));
  }
  parsearFecha(value) {
    value = "" + value;
    if (!value) {
      return "";
    }
    let anio = value.substring(0, 4);
    let mes = value.substring(4, 6);
    let dia = value.substring(6, 8);
    return anio + "-" + mes + "-" + dia;
  }
}
