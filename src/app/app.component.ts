import { Component } from '@angular/core';
import { Ingreso } from './models/ingreso.model';
import { Egreso } from './models/egreso.model';
import { IngresoService } from './services/ingresos.service';
import { EgresoService } from './services/egressos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App_Presupuesto';
  ingresos: Ingreso[] = []
  egresos: Egreso[] = []
  constructor(
    private _ingresoService: IngresoService,
    private _egresoService: EgresoService
  ) {
    this.ingresos = _ingresoService.ingresos
    this.egresos = _egresoService.egresos
  }

  getIngresoTotal(): number {
    let ingresoTotal = 0
    this.ingresos.forEach(i => {
      ingresoTotal += i.getValue()
    })
    return ingresoTotal
  }

  getEgresoTotal(): number {
    let egresoTotal = 0
    this.egresos.forEach(i => {
      egresoTotal += i.getValue()
    })
    return egresoTotal
  }

  getPorcentajeEgreso(): number {
    return this.getEgresoTotal() / this.getIngresoTotal()
  }

  getPresupuestoTotal(): number {
    return this.getIngresoTotal() - this.getEgresoTotal()
  }
}



