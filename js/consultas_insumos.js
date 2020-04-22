
const info = `
-- INSUMOS
-- Tablas involucradas
-- intercard@coppel_tcp:detalle_maquila
-- intercard@coppel_tcp:tarjetacuenta\n  
`

// MOD18 - Campo ID_DISEÑO(P) id_diseno
const consulta1 = (O,P) => {
    return `INSERT INTO intercard@coppel_tcp:detalle_maquila(secuencia_maquila, clave_sucursal, domicilio_sucursal, numguia, /*NUMEROTARJETA*/numtarjeta, servicecode, leyenda_tarjeta, numlote, fecha_generacion, fecha_expiracion, indicadortipoproceso, flagprocesorealizado, prefijo_archivo, sufijo_archivo, consecutivo_archivo, provedormaquila, tipomaquila, flagdiseno, /*MOD18_ID_DISEÑO*/id_diseno, idsolicitud, idsolmaquila)
    VALUES(663889, '663879', 'AV INSURGENTES SUR 553 PISO 3 ESQ INSURGENTES Y MARTI       ESCANDON I SECCION                                MIGUEL HIDALGO,DF             11800     ', 1, '${O}', '221', 'CLIENTE DISTINGUIDO', 62440, EXTEND(MDY(2,21,2019), YEAR to SECOND)+13 UNITS HOUR+26 UNITS MINUTE+0 UNITS SECOND, '2402', 'P', 'V', 'DEBC      ', 'BCPL      ', '02', 2, 'S', 'F', /*id_diseno*/${P}, NULL, 65945);\n\n`
}

const consulta2 = (J,O) => {
    return ` INSERT INTO intercard@coppel_tcp:tarjetacuenta(/*CUENTA*/numcuenta, /*NUMEROTARJETA*/numtarjeta)
    VALUES('${J}', '${O}');\n\n`
}


module.exports = {
    info,
    consulta1,
    consulta2
}