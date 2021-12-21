import { createPopper } from '@popperjs/core';
import { listStudents } from './mocks/alumnos-mock';
import { Pagina, People , Student } from './classes';
import validaRegistroForm , { FormP } from './extras/validarFormAlumno';
import serialize from './extras/serialize';
//const bootstrap = require('bootstrap');


const paginaAlumnos = new Pagina('Alumnos', '#50aad7');
const formAlumno = <HTMLFormElement>document.getElementById('formAddAlumno');
let tablaFormat = document.querySelector('.box-alumnos tbody');
let btnForm = <HTMLInputElement>document.getElementById('btn-add-alumno');
// console.log('alumnosOb: ', JSON.parse(alumnosOb));


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



