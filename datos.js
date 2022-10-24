const fs = require('fs');

const base = "Hoja de vida"
let nombre = "William";
let apellido = "Latorre"
let date = "18/12/2003"
let cedula = "1022922468"
let sex = "Siempre"
let status = "Soltero :)"
let address = "Calle 13"
let phone = "3114748053"
let email = "Wa@misena.eudo.con"
let text=`Soy una persona dinámica y creativa, habituada al     |
              |      trabajo bajo presión. Tengo experiencia en atención   | 
              |      al usuario y buenas relaciones interpersonales, por   | 
              |      lo cual  se me facilita el trabajo en equipo, lo cual |
              |      además disfruto.                                      |`
let school = "Estanislao Zuleta "
let uni = "xxxxx"
const hoja = `
              ______________________________________________________________
              |                                                            |
              |                                                            |
              |                                                            |
              |                      HOJA DE VIDA                          |
              |                                                            |
              |                     ______________                         |
              |                     |            |                         |
              |                     |     (●̮̮̃•̃)   |                         |
              |                     |     /█\     |                         |
              |                     |     .Π.    |                         | 
              |                     |____________|                         | 
              |                                                            | 
              |                    DATOS PERSONALES                        |
              |                                                            |
              |      Nombres y Apellidos: ${nombre} ${apellido}                  |
              |                                                            |
              |      Lugar y fecha de nacimiento: ${date}               | 
              |                                                            |
              |      Cedula de Ciudadania: ${cedula}                      |             
              |                                                            |
              |      Sexo: ${sex}                                         |
              |                                                            |
              |      Estado Civil: ${status}                              |
              |                                                            |
              |      Dirreccion: ${address}                                  |
              |                                                            |
              |      Telefono : ${phone}                                 |
              |                                                            |
              |      E-Mail: ${email}                            |
              |                                                            |
              |                       PERFIL PROFESIONAL                   |
              |                                                            |
              |      ${text}                                               |
              |                                                            |
              |                       FORMACION ACADEMICA                  |
              |                                                            | 
              |     Colegio: ${school}| Bachiller Academico       |
              |     2011                                                   |
              |                                                            | 
              |     Universidad : ${uni}| Pregrado en XXX                   |
              |     2016                                                   |
              |                                                            |
              |____________________________________________________________|`
              

fs.writeFile(`Informacion-${base}.txt`, hoja, (err)=>{
    if(err){
        throw err,
        console.log(`Tabla-${base}.txt creado`);
    }
});

console.log(hoja)