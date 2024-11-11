import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { EgresosComponent } from './components/egresos/egresos.component';
import { FormComponent } from './components/form/form.component';
import { IngresoService } from './services/ingresos.service';
import { EgresoService } from './services/egressos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IngresosComponent,
    EgresosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    IngresoService,
    EgresoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
