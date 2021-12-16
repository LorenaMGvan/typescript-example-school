// function log(target: Object, propertyKey: string, descriptor: any) {
// 	console.log('Clase: ', target.constructor.prototype);
// 	console.log('Método: ', propertyKey);
// 	console.log('Property Descriptor: ', descriptor);

// 	descriptor.value = function (...args: any[]) {
// 		console.log('Argumentos de la funcion', args);
//     }
//     return descriptor;
// }
export abstract class People {

  constructor(
    public id: number,
    public name: string,
    public lastNameF: string,
    public lastNameM: string,
    public age: number
  ){} 


  //@log




}