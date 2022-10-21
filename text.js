const fs = require('fs');

const base = "Funciones";
const text = `Hay otras formas de llamar funciones. A menudo hay casos en los que una función se tiene que llamar 
dinámicamente, o el número de argumentos de una función varía, o en los que el contexto de la llamada a la función
se tiene que establecer en un determinado objeto específico en tiempo de ejecución. 
Resulta que las funciones en sí mismas son objetos y, a su vez, estos objetos tienen métodos. (Consulta el objeto 
Function. Uno de estos, el método apply(), se puede utilizar para lograr este objetivo.

Ámbito de function

No se puede acceder a las variables definidas dentro de una función desde cualquier lugar fuera de la función, 
porque la variable se define solo en el ámbito de la función. Sin embargo, una función puede acceder a todas las 
variables y funciones definidas dentro del ámbito en el que está definida.
En otras palabras, una función definida en el ámbito global puede acceder a todas las variables definidas en el 
ámbito global. Una función definida dentro de otra función también puede acceder a todas las variables definidas 
en su función principal y a cualquier otra variable a la que tenga acceso la función principal.`;

fs.writeFile(`Informacion-${base}.txt`, text, (err)=>{
    if(err){
        throw err,
        console.log(`Tabla-${base}.txt creado`);
    }
});

console.log(`${text}`)