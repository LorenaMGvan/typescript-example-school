"use strict";
import { createPopper } from '@popperjs/core';
import { materias } from './mocks/materias-mock';
const bootstrap = require('bootstrap');
import './style.scss';

let boxMaterias:HTMLDivElement | null= document.querySelector('.box-materias');
let materiaFormat:string = '';


materias.forEach( (materia) => {
  materiaFormat += `<div class="card">
                        <img src="./assets/images/${ materia.logo }" class="card-img-top" alt="..." width="120" height="120">
                        <div class="card-body">
                          <h5 class="card-title">${ materia.nombre }</h5>
                          <p class="card-text">${ materia.descripcion.substr(0,150) }[...]</p>
                          <a href="#" class="btn btn-primary">Ver más</a>
                        </div>
                     </div>`;
});

if( boxMaterias  ) {
  boxMaterias.innerHTML = materiaFormat;
}
