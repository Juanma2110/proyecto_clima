import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClimaService} from './clima.service';
import { AppComponent } from './app.component';
import { DetallesClimaComponent } from './detalles-clima/detalles-clima.component';
import { DiaFechaPipe } from './dia-fecha.pipe';
import { FormatoFechaPipe } from './formato-fecha.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { ClimaComponent } from './clima/clima.component';
import { RoutingModule } from './routing/routing.module';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DiaFechaPipe,
    DetallesClimaComponent,
    FormatoFechaPipe,
    NavbarComponent,
    InfoComponent,
    ClimaComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RoutingModule,
    NgbModalModule
  ],
  providers: [ClimaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
