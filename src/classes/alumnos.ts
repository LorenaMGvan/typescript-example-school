import { People } from ".";

export class Student extends People {

  constructor(
    id: number,
    name: string,
    lastNameF: string,
    lastNameM: string,
    age: number,
    public matricula: string,
    public level: number
  ){
    super( id, name, lastNameM, lastNameF, age );
  }

  createStudent() {
    console.log('Crear un estudiante');
  }

  getStudent() {
    console.log('obtiene el estudiante X');
  }

 

}