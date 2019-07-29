const argv = require('./tablas/config/yargs').argv;
const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./tablas/multiplicar/multiplicar')

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(colors.gray(tabla)))
            .catch(e => console.log(e));

        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;


    default:
        console.log('comando no reconocido');

        break;
}

console.log(argv);




//console.log(process);
//let argv2 = process.argv;
//console.log(argv.base);
// let parametro = argv[2];
// let base = parametro.split('=')[1];
//console.log(argv.limite);