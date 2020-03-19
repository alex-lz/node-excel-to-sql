// 'use strict';
const excelToJson = require('convert-excel-to-json');
const colors = require('colors')
const fs = require('fs')
const con = require('./consultas')

const print = (name) => {
    let sql = "";
    let sql1 = "";
    let sql2 = "";
    let sql3 = "";
    let sql4 = "";
    let sql5 = "";
    let sql6 = "";
    let sql7 = "";
    let aux_n_cliente = ""; 
    let aux_a_paterno = "";
    let aux_a_materno = "";
    let aux_nombre = "";
    let aux_nombre2 = "";
    let aux_fch_ncto = "";
    let aux_telefono = "";
    let aux_email = "";

    let excel = excelToJson({
        sourceFile: `./uploads/${ name }`
    });
    excel = excel.AMBIENTACION;

    
    for(let i = 1; i < excel.length; i++) {
        let n_cliente = excel[i].A ? aux_n_cliente = excel[i].A : aux_n_cliente;
        let a_paterno = excel[i].B ? aux_a_paterno = excel[i].B : aux_a_paterno;
        let a_materno = excel[i].C ? aux_a_materno = excel[i].C : aux_a_materno;
        let nombre    = excel[i].D ? aux_nombre    = excel[i].D : aux_nombre;
        let nombre2   = excel[i].D ? aux_nombre2   = (excel[i].E ? excel[i].E : '') : aux_nombre2;
        let fch_ncto  = excel[i].F ? aux_fch_ncto  = excel[i].F : aux_fch_ncto;
        let telefono  = excel[i].G ? aux_telefono  = excel[i].G : aux_telefono;
        let email     = excel[i].H ? aux_email     = excel[i].H : aux_email;

        sql1 += con.consulta1(n_cliente, a_paterno, a_materno, nombre, nombre2);
        sql2 += con.consulta2(n_cliente, telefono);
        sql3 += con.consulta3(n_cliente, telefono);
        sql4 += con.consulta4(n_cliente, fch_ncto);
        sql5 += con.consulta5(n_cliente);
        sql6 += con.consulta6(n_cliente);
        sql7 += con.consulta7(n_cliente, email);
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