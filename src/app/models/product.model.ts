export class Product{
    constructor(
        public id:number,
        public name:string,
        public description:string, //descripcion
        public price:number, //precio unitario
        public image: string, 
        public type:string, //Si es hamburguesa o otro.
        public category: string,//Una vez conocemos el tipo que tipo de producto es.
        public quantity?:number //cantidads
    ){}
    getTotalUnitPrice():number{
        const qty= this.quantity ?? 1; 
        return this.price* qty; 
    }
    
}