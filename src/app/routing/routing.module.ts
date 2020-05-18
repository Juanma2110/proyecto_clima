import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// npm i @angular/router
import { RouterModule } from '@angular/router';
import {ClimaComponent} from '../clima/clima.component';
import { InfoComponent} from '../info/info.component';

const routes = [
  { path: 'clima', component: ClimaComponent },
  { path: 'info', component: InfoComponent },
  { path: '**', redirectTo: 'clima', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
