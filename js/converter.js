// 'use strict';
const excelToJson = require('convert-excel-to-json');
const colors = require('colors')
const fs = require('fs')
const con = require('./consultas')

const print = (name) => {
    let sql = "";
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

    sql += con.info;
    for(let i = 1; i < excel.length; i++) {
        let n_cliente = excel[i].A ? aux_n_cliente = excel[i].A : aux_n_cliente;
        let a_paterno = excel[i].B ? aux_a_paterno = excel[i].B : aux_a_paterno;
        let a_materno = excel[i].C ? aux_a_materno = excel[i].C : aux_a_materno;
        let nombre    = excel[i].D ? aux_nombre    = excel[i].D : aux_nombre;
        let nombre2   = excel[i].D ? aux_nombre2   = (excel[i].E ? excel[i].E : '') : aux_nombre2;
        let fch_ncto  = excel[i].F ? aux_fch_ncto  = excel[i].F : aux_fch_ncto;
        let telefono  = excel[i].G ? aux_telefono  = excel[i].G : aux_telefono;
        let email     = excel[i].H ? aux_email     = excel[i].H : aux_email;

        
        if(excel[i].I === 'DE') {
            sql += con.info1;
            sql += con.consulta1(n_cliente, a_paterno, a_materno, nombre, nombre2);
            sql += con.consulta2(n_cliente, telefono);
            sql += con.consulta3(n_cliente, telefono);
            sql += con.consulta4(n_cliente, fch_ncto);
            sql += con.consulta5(n_cliente);
            sql += con.consulta6(n_cliente);
            sql += con.consulta7(n_cliente, email);
            sql += con.info2;
            sql += con.consulta8(n_cliente, excel[i].J, excel[i].K, excel[i].L);
            sql += con.info3;
            sql += con.consulta9(n_cliente, excel[i].J, excel[i].K, excel[i].M, excel[i].O);
            sql += con.info4;
            sql += con.consulta10(n_cliente, excel[i].K, excel[i].N, excel[i].O);
        }

        if(excel[i].I === 'CR') {
            sql += con.info5;
            sql += con.consulta11(n_cliente, excel[i].J, excel[i].K, excel[i].L);
            sql += con.consulta12(excel[i].J);
            sql += con.consulta13(excel[i].J);
            sql += con.consulta14(excel[i].J);
            sql += con.consulta15(excel[i].J);
            sql += con.consulta16(excel[i].J, excel[i].K, excel[i].O);
            sql += con.info6;
            sql += con.consulta17(n_cliente, excel[i].J, excel[i].K, excel[i].M, excel[i].O);
            sql += con.consulta18(n_cliente, excel[i].K, excel[i].N, excel[i].O);
        }
    }
    // console.log(sql)
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