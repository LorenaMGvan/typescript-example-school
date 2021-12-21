import { createPopper } from '@popperjs/core';
import { listStudents } from './mocks/alumnos-mock';
import { Pagina, People , Student } from './classes';
import validaRegistroForm , { FormP, validaFieldText, validaFieldEdad } from './extras/validarForms';
import serialize from './extras/serialize';
import { json } from 'node:stream/consumers';
//const bootstrap = require('bootstrap');


const paginaAlumnos = new Pagina('Alumnos', '#50aad7');
const formAlumno = <HTMLFormElement>document.getElementById('formAddAlumno');
let tablaFormat = document.querySelector('.box-alumnos tbody');
let btnForm = <HTMLInputElement>document.getElementById('btn-add-alumno');

const showAlumnos = (alumnos) => {
  let  rowItem = '';

  for ( let item of alumnos) {
    rowItem+= `<tr>                  
                  <td>${ item.name }</td>
                  <td>${ item.lastNameF } , ${ item.lastNameM } </td>                  
                  <td>${ item.matricula }</td>                  
                  <td>${ item.level }</td>                  
                </tr>`;  
  }

  tablaFormat.innerHTML = rowItem;  

}

listStudents()
  .then((alumnos:{}) => {    
    let alumnosOb = localStorage.getItem('alumnosLocal');    

     if( !alumnosOb ) {
        localStorage.setItem('alumnosLocal',  JSON.stringify(alumnos));                        
        alumnosOb = localStorage.getItem('alumnosLocal');    
     }          
    
     let alumnosN = JSON.parse(alumnosOb)
      showAlumnos(alumnosN);      

  })
  .catch((err) => alert(err));
  

  /**************** 
    Agregar Efecto en Row new
  ******************/
  const addStyleRow = () => {
      let trTable = document.querySelectorAll('.box-alumnos tbody tr');
      let trLast = <HTMLInputElement>trTable[trTable.length- 1];
      trLast.style.background = '#b3f3b3';    
      setTimeout(() => {
        trLast.removeAttribute('style');   
      },3000);
      
  }

  const getMatricula = () => {
    let studentLevel = <HTMLFormElement>document.querySelector('#user-nivel');
    let studentName = <HTMLFormElement>document.querySelector('#user-name');
    let studentApeP = <HTMLFormElement>document.querySelector('#user-apePaterno');
    let studentApeM = <HTMLFormElement>document.querySelector('#user-apeMaterno');
    let matricula:string = `xyz-${studentLevel.value}    
                            ${studentName.value.substring(0, 3)}-
                            ${studentApeP.value.substring(0, 3)}${studentApeM.value.substring(0, 3)}`;
    return matricula;
  }

  /**************** 
    Agregar alumno 
  ******************/
  const addAlumno = (event) => {
    event.preventDefault();   
    let dataForm = new FormData(formAlumno);      
    let formObj:{} = serialize(dataForm); // Convertir to an object
    let itemNew = <HTMLFormElement>document.querySelector('.itemnew');
    
    if (validaRegistroForm(formObj)) {              
      let alumnosN = JSON.parse(localStorage.getItem('alumnosLocal'));      
      // generar matricula de alumno      
      formObj['matricula'] = getMatricula();            
      alumnosN.push(formObj);               
      localStorage.setItem('alumnosLocal',  JSON.stringify(alumnosN));                        
      showAlumnos(JSON.parse(localStorage.getItem('alumnosLocal')));      
      formAlumno.reset();
      //
      addStyleRow();
    }
    
  }

  
  //btnForm.disabled = true;
  formAlumno.addEventListener('submit', addAlumno, false);
  paginaAlumnos.showMenu();
  validaFieldText();


