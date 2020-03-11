// 'use strict';
const excelToJson = require('convert-excel-to-json');
const colors = require('colors')
const fs = require('fs')
const con = require('./consultas')

const print = (name) => {
    let sql = "";
    let name2 = "";
    let sql1 = "";
    let sql2 = "";
    let sql3 = "";
    let sql4 = "";
    let sql5 = "";
    let sql6 = "";
    let sql7 = "";

    let result = excelToJson({
        sourceFile: `./uploads/${ name }`
    });
    
    for(let i = 1; i < result.CLIENTES.length; i++) {
        name2 = result.CLIENTES[i].E ? result.CLIENTES[i].E : '';
        sql1 += con.consulta1(result.CLIENTES[i].A, result.CLIENTES[i].B, result.CLIENTES[i].C, result.CLIENTES[i].D, name2);
        sql2 += con.consulta2(result.CLIENTES[i].A, result.CLIENTES[i].G);
        sql3 += con.consulta3(result.CLIENTES[i].A, result.CLIENTES[i].G);
        sql4 += con.consulta4(result.CLIENTES[i].A, result.CLIENTES[i].F);
        sql5 += con.consulta5(result.CLIENTES[i].A);
        sql6 += con.consulta6(result.CLIENTES[i].A);
        sql7 += con.consulta7(result.CLIENTES[i].A, result.CLIENTES[i].H);
    }
    // console.log(sql)
    sql = con.info + sql1 + sql2 + sql3 + sql4 + sql5 + sql6 + sql7;
    crearArchivo(sql);
}

// Crear archivo de ambientacion para descargar
crearArchivo = (datos) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('public/Ambientacion.sql', datos, (err) => {
          if (err) 
            reject(err)
          else 
            resolve('Ambientacion.sql')
        });
    });
}

module.exports = {
    print
}