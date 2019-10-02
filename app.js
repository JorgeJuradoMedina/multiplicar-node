// requireds
//paquetes que no son nativos de node
// const fs = require('express');
// los que se crean en un proyecto por nuestra parte
// const fs = require('./fs');
// despues de un const y llaves es una destructuracion
const argv = require('./config/yargs').argv;
const color = require('colors/safe');
const { crearArchivo, listartabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, color.green(archivo)))
            .catch(e => console.log(e));

        break;
    default:
        console.log('comando no reconocido');
}

// let argv = process.argv;
// // no hay que definirla,cuando node se ejecuta la define
// let parametro = argv[2];
// // recibimos la base desde consola por medio de node 'app' -b=numero 
// let base = parametro.split('=')[1]