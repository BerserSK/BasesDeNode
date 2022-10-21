const fs = require('fs');
const { Console } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('close', function(){
    process.exit(0);
})

console.clear();
console.log('====================================');
console.log(`       Tablas de multiplicar        `)
console.log('====================================');

multis()

let  multis = function multi(){
    rl.question(`---> Introduce la tabla que desea generar: `,function(num){
        for(let i = 1; i <= 10; i++){
            multi = num * i
            console.log('| ------------------- |');
            console.log("|" +  num + " x " + i + " = " +  multi );
            console.log('| ------------------- |');
        }
        rl.close(); 
    })
}

/*const base = 3;
let salida = '';

salida += `                         Tabla del ${base} \n===============================================\n`;

for(let i=1; i <= 10; i++){
    salida += `${base} x ${i} = ${base*i}\n`
}

console.log(salida);

fs.writeFile(`Tabla-${base}.txt`, salida, (err)=>{
    if(err){
        throw err,
        console.log(`Tabla-${base}.txt creado`);
    }
});*/
