let alumnos = [
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
let listStudents = () => new Promise((resolve, reject) => {
    
    if (alumnos) {
        resolve(alumnos);
    }

    else {
        reject("no se encuentra el archivo");
    }
});


// const myAsync = async (): Promise<Record<string, number | string>> => {
//     await alumnos
//     const response = await myPaymentPromise
//     return response
// }


exports.listStudents = alumnos;
//export * from "OtherClass";