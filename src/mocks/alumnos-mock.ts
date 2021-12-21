"use strict";

let alumnos = [
    { 
        "id": 1,
        "name": "Fulanita 1",
        "lastNameF": "Ada",
        "lastNameM": "King",
        "age": 40,
        "matricula": 'xyz-3',
        "level": 1        
    },
    { 
        "id": 2,
        "name": "Fulanita 2",
        "lastNameF": "Heafield ",
        "lastNameM": "Hamilton",
        "age": 85,
        "matricula": 'xyz-3',
        "level": 1        
    },
    { 
        "id": 3,
        "name": "Fulanita 3",
        "lastNameF": "Ervin",
        "lastNameM": "Knuth",
        "age": 83,
        "matricula": 'xyz-3',
        "level": 1        
    },
    { 
        "id": 4,
        "name": "Fulanita 4",
        "lastNameF": "Lane",
        "lastNameM": "Thompson",
        "age": 78,
        "matricula": 'xyz-3',
        "level": 2        
    },
    { 
        "id": 5,
        "name": "Fulanita 5",
        "lastNameF": "Stallman",
        "lastNameM": "Stallman",
        "age": 40,
        "matricula": 'xyz-3',
        "level": 2        
    },
   
];

// Una función asincróna simulando la petición desde el servidor
export let listStudents = () => new Promise((resolve, reject) => {
    
    setTimeout(() => {
        if (alumnos) {
            resolve(alumnos);
        }
    
        else {
            reject("no se encuentra el archivo");
        }
    }, 1000);
    
});


// export { listStudents };


// export let alfa = 3.14159;