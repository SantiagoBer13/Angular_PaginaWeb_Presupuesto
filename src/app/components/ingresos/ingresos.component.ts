import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../../models/ingreso.model';
import { IngresoService } from '../../services/ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent implements OnInit {
  private ingresos: Ingreso[] = []
  constructor(
    private _ingresoService: IngresoService,
  ){}

  ngOnInit(): void {
      this.ingresos = this._ingresoService.ingresos
  }

  getIngresos():Ingreso[]{
    return this.ingresos
  }

  deleteIngreso(ingreso: Ingreso):void{
    this._ingresoService.deleteIngreso(ingreso)
  }
}
