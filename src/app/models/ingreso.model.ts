export class Ingreso{
    constructor(
        private name: string,
        private value: number
    ){}

    getName():string{
        return this.name
    }

    getValue():number{
        return this.value
    }

}