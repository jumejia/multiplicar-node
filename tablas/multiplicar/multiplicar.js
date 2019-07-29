const fs = require('fs');

let data = "";

crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("No es un número");
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${i * base} \n`
                //console.log(data);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    })
}

listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("La base no es un número");
            return;
        }

        if (!Number(limite)) {
            reject("El límite no es un número");
            return;
        }


        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${i * base} \n`
        }

        resolve(data);
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}