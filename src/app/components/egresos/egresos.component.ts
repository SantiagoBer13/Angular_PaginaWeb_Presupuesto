import { Component, OnInit, Input } from '@angular/core';
import { Egreso } from '../../models/egreso.model'; 
import { EgresoService } from '../../services/egressos.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrl: './egresos.component.css'
})
export class EgresosComponent implements OnInit{

  @Input() ingresoTotal: number = 0
  private egresos: Egreso[] = []
  constructor(
    private _egresoService: EgresoService,
  ){}

  ngOnInit(): void {
    this.egresos = this._egresoService.egresos
  }

  getEgresos():Egreso[]{
    return this.egresos
  }

  deleteEgreso(egreso: Egreso):void{
    this._egresoService.deleteEgreso(egreso)
  }

}
