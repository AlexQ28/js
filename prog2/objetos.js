let sujeto1 = {
    nombre : 'Emporio',
    apellido : 'Armani',
    edad: 89
};
 
let sujeto2 = {
    nombre : 'Carolina',
    apellido : 'Herrera',
    edad: 26
};

/*
function imprimirNombreEnMayusculas(persona){  //Atributos del objeto
    console.log(persona.nombre.toUpperCase());
    console.log(persona.apellido.toUpperCase());
    console.log(persona.edad);
}

imprimirNombreEnMayusculas(sujeto1);
imprimirNombreEnMayusculas(sujeto2);

*/

//OTRO Ejemplo 
/*
function imprimirNombreEnMayusculas(persona){
    // var nombre = persona.nombre
    let {nombre} = persona
    let {apellido} = persona
    let {edad} = persona
    console.log(nombre.toUpperCase());
    console.log(apellido.toUpperCase());
    console.log(edad);
}

imprimirNombreEnMayusculas(sujeto1)
imprimirNombreEnMayusculas(sujeto2)
*/

function imprimirNombreYEdad(persona){
   let {nombre} = persona
   let {edad} =  persona
   let {apellido} = persona
   console.log('Hola, me llamo '+ nombre + ' '+ apellido + ' y tengo ' + edad + ' años');
}

imprimirNombreYEdad (sujeto1)
imprimirNombreYEdad (sujeto2)

