export interface FormP {
  name: string;
  lastNameF: string;
  lastNameM: string;
  matricula?: string;
  level: string;  
}

const validaRegistroForm = (form:any) => {
  
 const { name, lastNameM, lastNameF, matricula, level } = form;

 if( name === "") throw new Error('El nombre es requerido');
 if( lastNameF === "") throw new Error('El apellido es requerido') 

 return true;
}

export const validaFieldText = () => {
  let fieldsF: NodeListOf<HTMLInputElement> = document.querySelectorAll('.field-text');

  fieldsF.forEach(fieldInput => {                  
    fieldInput.addEventListener('keyup', () => {
      fieldInput.value = fieldInput.value.replace(/[^a-zA-Z]/g, '');      
    });
   });           
}

export const validaFieldEdad = () => {
  let fieldsF: NodeListOf<HTMLInputElement> = document.querySelectorAll('.field-text');

  fieldsF.forEach(fieldInput => {                  
    fieldInput.addEventListener('keyup', () => {
      fieldInput.value = fieldInput.value.replace(/[^0-9\.]/g, '');      
    });
   });           
}

export default validaRegistroForm;