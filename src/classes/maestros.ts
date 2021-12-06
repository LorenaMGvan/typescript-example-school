import { People } from ".";

export class Teacher extends People {

  constructor(
    id: number,
    name: string,
    lastNameF: string,
    lastNameM: string,
    age: number,
    public cedula: string,
    public profesion: string
  ){
    super( id, name, lastNameM, lastNameF, age );
  }



}