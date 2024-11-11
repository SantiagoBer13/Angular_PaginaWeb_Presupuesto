import { Injectable } from "@angular/core";
import { Egreso } from "../models/egreso.model";

@Injectable()
export class EgresoService{
    egresos: Egreso[] =[]

    deleteEgreso(egreso: Egreso):void{
        const indice = this.egresos.indexOf(egreso)
        this.egresos.splice(indice,1)
    }

    addEgreso(name: string, value: number){
        this.egresos.push(new Egreso(name, value));
    }
}
