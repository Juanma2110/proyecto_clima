import { Component, OnInit, Input } from '@angular/core';
import{ClimaService} from  '../clima.service';
@Component({
  selector: 'app-detalles-clima',
  templateUrl: './detalles-clima.component.html',
  styleUrls: ['./detalles-clima.component.css']
})
export class DetallesClimaComponent implements OnInit {
  @Input() detalles: any
  constructor(private climaService: ClimaService) { }

  resolverImagen() {
    return `assets/${this.detalles.weather}.png`;
  }

  ngOnInit(): void {
  }

}
