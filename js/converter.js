// 'use strict';
const excelToJson = require('convert-excel-to-json');
const colors = require('colors')
const fs = require('fs')
const DE = require('./consultas_debito')
const CR = require('./consultas_credito')
const PR = require('./consultas_prestamo')
const PA = require('./consultas_pagare')
const IN = require('./consultas_inversion')
const SU = require('./consultas_insumos')
const fun = require('./fun')

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
    let flag = true;

    let excel = excelToJson({
        sourceFile: `./uploads/${ name }`
    });

    excel = excel.AMBIENTACION;
    // console.log(excel)

    sql += DE.info;
    for(let i = 1; i < excel.length; i++) {
        let n_cliente = excel[i].A ? aux_n_cliente = excel[i].A : aux_n_cliente;
        let a_paterno = excel[i].B ? aux_a_paterno = excel[i].B : aux_a_paterno;
        let a_materno = excel[i].C ? aux_a_materno = excel[i].C : aux_a_materno;
        let nombre    = excel[i].D ? aux_nombre    = excel[i].D : aux_nombre;
        let nombre2   = excel[i].D ? aux_nombre2   = (excel[i].E ? excel[i].E : '') : aux_nombre2;
        let fch_ncto  = excel[i].F ? aux_fch_ncto  = excel[i].F : aux_fch_ncto;
        let telefono  = excel[i].G ? aux_telefono  = excel[i].G : aux_telefono;
        let email     = excel[i].H ? aux_email     = excel[i].H : aux_email;
        excel[i].A ? flag = true : flag = false;

        
        if(excel[i].I === 'DE' && flag) {
            sql += DE.info1;
            sql += DE.consulta1(n_cliente, a_paterno, a_materno, nombre, nombre2);
            sql += DE.consulta2(n_cliente, telefono);
            sql += DE.consulta3(n_cliente, telefono);
            sql += DE.consulta4(n_cliente, fch_ncto);
            sql += DE.consulta5(n_cliente);
            sql += DE.consulta6(n_cliente);
            sql += DE.consulta7(n_cliente, email);
        }
        if(excel[i].I === 'DE') {
            let CLABE = excel[i].K ? excel[i].K : fun.CLABE(excel[i].J);
            sql += DE.info2;
            sql += DE.consulta8(n_cliente, excel[i].J, excel[i].L, excel[i].M, excel[i].R, CLABE);// HERE
            sql += DE.info3;
            sql += DE.consulta9(n_cliente, a_paterno, a_materno, nombre, nombre2, excel[i].J, excel[i].L, excel[i].N, excel[i].P);
            sql += DE.info4;
            sql += DE.consulta10(n_cliente, a_paterno, a_materno, nombre, nombre2, excel[i].L, excel[i].O, excel[i].P);
        }

        if(excel[i].I === 'CR') {
            sql += CR.info1;
            sql += CR.consulta1(n_cliente, excel[i].J, excel[i].L, excel[i].M, excel[i].K);// HERE
            sql += CR.consulta2(excel[i].J, excel[i].S, excel[i].T);
            sql += CR.consulta3(excel[i].J);
            sql += CR.consulta4(excel[i].J);
            sql += CR.consulta5(excel[i].J, excel[i].T);
            sql += CR.consulta6(excel[i].J, excel[i].L, excel[i].P);
            sql += CR.info2;
            sql += CR.consulta7(n_cliente, excel[i].J, excel[i].L, excel[i].N, excel[i].P);
            sql += CR.consulta8(n_cliente, a_paterno, a_materno, nombre, nombre2, excel[i].L, excel[i].O, excel[i].P);
        }

        if(excel[i].I === 'PR') {
            sql += PR.info1;
            sql += PR.consulta1(n_cliente, excel[i].J, excel[i].L, excel[i].M, excel[i].K);// HERE 2
            sql += PR.consulta2(excel[i].J);
            sql += PR.consulta3(excel[i].J);
            sql += PR.consulta4(excel[i].J);
            sql += PR.consulta5(excel[i].J, excel[i].L);
            sql += PR.consulta6(excel[i].J, excel[i].L);
        }

        if(excel[i].I === 'PA') {
            sql += PA.info1;
            sql += PA.consulta1(n_cliente, excel[i].J, excel[i].M);
        }

        if(excel[i].I === 'IN') {
            sql += IN.info1;
            sql += IN.consulta1(n_cliente, excel[i].J, excel[i].L, excel[i].M, excel[i].R, excel[i].K);// HERE 2
        }
        // INSUMOS
        if(excel[i].Q) {
            sql += SU.info;
            sql += SU.consulta1(excel[i].P, excel[i].Q);
            sql += SU.consulta2(excel[i].J, excel[i].P);
        }
    }

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