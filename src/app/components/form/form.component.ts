import { Component } from '@angular/core';
import { IngresoService } from '../../services/ingresos.service';
import { EgresoService } from '../../services/egressos.service';
import { Ingreso } from '../../models/ingreso.model';
import { Egreso } from '../../models/egreso.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  tipoOperacion: string = "+"
  name: string = ""
  value: number = 0
  message: string = "Usa los campos para ingresar la información.";

  constructor(
    private _ingresoService: IngresoService,
    private _egresoService: EgresoService
  ){}

  cambioOperacio(evento: any){
    this.tipoOperacion = evento.target.value
  }

  addValor() {
    if (this.name === "" || this.value <= 0) {
      this.message = "Ingresa valores válidos.";
    } else {
      if (this.tipoOperacion === "+") {
        this._ingresoService.addIngreso(this.name, this.value);
      } else {
        this._egresoService.addEgreso(this.name, this.value);
      }
      this.message = "Valor agregado.";
    }
  }
}
