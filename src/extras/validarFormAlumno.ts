export interface FormP {
  name: string;
  lastNameF: string;
  lastNameM: string;
  matricula: string;
  level: string;  
}

const validaRegistroForm = (form) => {
  
 const { name, lastNameM, lastNameF, matricula, level } = form;

 if( name === "") throw new Error('El nombre es requerido');
 if( lastNameF === "") throw new Error('El apellido es requerido') 

 return true;

}

export default validaRegistroForm;