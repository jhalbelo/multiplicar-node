const fs = require('fs');
const colors = require('colors');
let listarTabla = (base, limite) => {
    return new Promise((resolve, rejects) => {
        if (!Number(base)) {
            rejects('La base no es valida');
            return;
        }
        console.log('=============================='.green);
        console.log(`==========Tabla de ${base}==========`.red);
        console.log('=============================='.green);
        for (let index = 1; index <= limite; index++) {
            console.log(`${base} * ${index} = ${base * index}\n`.rainbow);
        }
        resolve(`tabla del ${base} mostrada`);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, rejects) => {
        if (!Number(base)) {
            rejects('La base no es valida');
            return;
        }
        let data = ''
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) rejects(err);
            else resolve(`tablas/tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}