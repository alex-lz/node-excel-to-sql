// 'use strict';
const excelToJson = require('convert-excel-to-json');
const colors = require('colors')
const fs = require('fs')

const print = (name) => {
    let sql = "";
    let name2 = "";

    let result = excelToJson({
        sourceFile: `./uploads/${ name }`
    });
    
    for(let i = 1; i < result.CLIENTES.length; i++) {
        name2 = result.CLIENTES[i].E ? result.CLIENTES[i].E : '';
        sql += consulta(result.CLIENTES[i].A, result.CLIENTES[i].B, result.CLIENTES[i].C, result.CLIENTES[i].D, name2);
    }
    // console.log(sql)
    crearArchivo(sql);
}

const consulta = (A,B,C,D,E/*,F,G,H*/) => {
    return `INSERT INTO bdinteg:"informix".si_cliente(
           empresa, /*NUMERO CLIENTE*/numcte, status_cte, sucursal,  ejecutivo, tpo_persona, tipo_cliente, /*APELLIDO PATERNO*/apell_paterno, /*APELLIDO MATERNO*/apell_materno, /*NOMBRE 1*/nombre1, /*NOMBRE 2*/nombre2, razon_social,             rfc, sector, segmento, actividad_princ, grupo, subgrupo, residencia, fecha_alta, apell_casada, distrito,  numcte_ref, string1, string2, numeric1, numeric2, money1, date1, puesto_ppes, familiar_ppes, actividad_esp, ejecut_autoriza, user_insert, fecha_insert, rfc_alterno, tpo_biometria, cliente_pros, envio_movtos)
    VALUES(  '001',           /*numcte*/${A},       'AL',   '0002', '92129501',        '01',          '1',             /*apell_paterno*/${B},             /*apell_materno*/${C},     /*nombre1*/${D},     /*nombre2*/${E},           '', 'RUME8612165S5',   '32',    '000',              '', '000',    '000',        '1',       2020-2-6,           '',     '01', '140526277',      '',    '03',        0,        0,      0,  null,          '',            '',     '0000000',      '93416792',  '93416792',   '2010-2-6',        null,           '0',         null,         null)\n`
}

// Crear archivo de ambientacion para descargar
crearArchivo = (datos) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`public/Ambientacion.sql`, datos, (err) => {
          if (err) 
            reject(err)
          else 
            resolve(`Ambientacion.sql`.green)
        });
    });
}

module.exports = {
    print
}