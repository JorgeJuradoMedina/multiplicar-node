//tipo de required proytecto propio de un paquete de node
const fs = require('fs');
const color = require('colors');

let listartabla = (base, limite = 10) => {
    console.log('=================='.green);
    console.log(`== tabla de ${base} ==`.white);
    console.log('=================='.red);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base}*${i}= ${base * i}`);
    }
}
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';
        // imprimir en un ciclo for la tabla de 2
        for (let n = 1; n <= limite; n++) {

            data += `${base}*${n}= ${base * n}\n`;

        }
        // primera seccion en comillas es el nombre del archivo y la seguna seccion es el contenido a guardar
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}
module.exports = {
        crearArchivo,
        listartabla
    }
    // paquete muy importante si se cambia de una maquina a otra
    // por cuestiones de versiones o instalaciones