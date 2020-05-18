import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../clima.service';
import { DetallesClimaComponent } from '../detalles-clima/detalles-clima.component';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  cargando = false;
  city = "";
  ip="";
  country_name = "";
  country_flag = "";
  zip="";
  hora = "";
  region_name="";
  latitude="";
  longitude="";
  detallesHoy = {};
  detallesProximos = [];

  constructor(private climaService: ClimaService) {

  }

  comenzarReloj() {
    const _this = this;
    setInterval(() => {
      let hora = "";
      let fecha = new Date();
      let horas = fecha.getHours();
      let minutos = fecha.getMinutes();
      let segundos = fecha.getSeconds();
      let horasArregladas = horas.toString();
      if (horas < 10) {
        horasArregladas = "0" + horasArregladas;
      }
      let minutosArreglados = minutos.toString();
      if (minutos < 10) {
        minutosArreglados = "0" + minutosArreglados;
      }
      let segundosArreglados = segundos.toString();
      if (segundos < 10) {
        segundosArreglados = "0" + segundosArreglados;
      }
      _this.hora = `${horasArregladas}:${minutosArreglados}:${segundosArreglados}`;
    }, 500);
  }

  async ngOnInit() {
    this.cargando = true;
    const _this = this;
    _this.climaService.getIp()
      .subscribe({
        async next(ipRaw) {
          const datosIp = await ipRaw.json();
          _this.city = datosIp.city;
          _this.ip=datosIp.ip;
          _this.zip=datosIp.zip;
          _this.region_name= datosIp.region_name;
          _this.country_name = datosIp.country_name;
          _this.country_flag = datosIp.location.country_flag;
          _this.latitude=datosIp.latitude;
          _this.longitude=datosIp.longitude;
         
           var  latitude= datosIp.latitude;
          var longitude=datosIp.longitude;

          _this.climaService.getClimaConditions(_this.latitude, _this.longitude)
            .subscribe({
              async next(weatherRaw) {
                const weatherData = await weatherRaw.json();
                _this.detallesHoy = weatherData.dataseries.slice(0, 1)[0];
                _this.detallesProximos = weatherData.dataseries.slice(1, 5);
                _this.cargando = false;
                _this.comenzarReloj();

              }
            });

        }
      });

  }

}

