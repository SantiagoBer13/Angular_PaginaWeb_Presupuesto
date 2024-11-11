import { Injectable } from "@angular/core";
import { Ingreso } from "../models/ingreso.model";

@Injectable()
export class IngresoService{
    ingresos: Ingreso[] =[]

    deleteIngreso(ingreso: Ingreso):void{
        const indice = this.ingresos.indexOf(ingreso)
        this.ingresos.splice(indice,1)
    }

    addIngreso(name: string, value: number){
        this.ingresos.push(new Ingreso(name, value));
    }
}