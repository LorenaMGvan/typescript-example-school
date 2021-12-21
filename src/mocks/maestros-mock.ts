"use strict";

let maestros = [
    { 
        "id": 1,
        "name": "Augusta",
        "lastNameF": "Ada",
        "lastNameM": "King",
        "age": 40,
        "matricula": 'aaa00',
        "level": 1        
    },
    { 
        "id": 2,
        "name": "Margaret",
        "lastNameF": "Heafield ",
        "lastNameM": "Hamilton",
        "age": 85,
        "matricula": 'aaa00',
        "level": 1        
    },
    { 
        "id": 3,
        "name": "Donald",
        "lastNameF": "Ervin",
        "lastNameM": "Knuth",
        "age": 83,
        "matricula": 'aaa00',
        "level": 1        
    },
    { 
        "id": 4,
        "name": "Ken",
        "lastNameF": "Lane",
        "lastNameM": "Thompson",
        "age": 78,
        "matricula": 'aaa00',
        "level": 2        
    },
    { 
        "id": 5,
        "name": "Richard",
        "lastNameF": "Stallman",
        "lastNameM": "Stallman",
        "age": 40,
        "matricula": 'aaa00',
        "level": 2        
    },
   
];

// Una función asincróna simulando la petición desde el servidor
export let listMaestros = () => new Promise((resolve, reject) => {
    
    setTimeout(() => {
        if (maestros) {
            resolve(maestros);
        }
    
        else {
            reject("no se encuentra el archivo");
        }
    }, 1000);
    
});
