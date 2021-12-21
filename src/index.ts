"use strict";
import { createPopper } from '@popperjs/core';
import { Pagina } from './classes';
import { MateriaI, materias } from './mocks/materias-mock';
const bootstrap = require('bootstrap');
import './style.scss';

const showMaterias = (subjects:MateriaI[]) => {

  let boxMaterias:HTMLDivElement | null= document.querySelector('.box-materias');
  let materiaFormat:string = '';
  
  if(!subjects.length) {
    materiaFormat = '<div class="materia-404" style="color:#ff1010;">Materia no existente...</div>';
  }
  
  subjects.forEach( (materia) => {
    materiaFormat += `<div class="card">
                          <img src="./assets/images/${ materia.logo }" class="card-img-top" alt="..." width="120" height="120">
                          <div class="card-body">
                            <h5 class="card-title">${ materia.nombre }</h5>
                            <p class="card-text">${ materia.descripcion.substr(0,150) }[...]</p>
                            <a href="#" class="btn btn-primary">Ver más</a>
                          </div>
                      </div>`;
  });

  boxMaterias.innerHTML = materiaFormat;
    
}

const buscarMateria = () => {
  let inputSearch:HTMLInputElement = document.querySelector('#searchMaterias');

  inputSearch.addEventListener('keyup', () => {    
    const resMaterias = materias.filter(materia => materia.nombre.toLowerCase().includes(inputSearch.value.toLowerCase()) );            
    showMaterias(resMaterias);
  });
}

const paginaMaterias = new Pagina('Materias', '#50aad7');
paginaMaterias.showMenu();
showMaterias(materias)
buscarMateria();
