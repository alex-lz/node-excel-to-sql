const moment = require('moment')
moment.updateLocale(moment.locale(), { invalidDate: "" })

const name = (B,C,D,E,lon) => {
    let n = D + ' ' + E + ' ' + B + ' ' + C;
    E === '' ? n = D + ' ' + B + ' ' + C : null;
    return n.substring(0, lon);
}

const info = `
-- HOJA: AMBIENTACION
`
const info1 = `
-- CATEGORIA PRODUCTO = DE

-- Informacion del cliente
-- Tablas involucradas
-- bdinteg:"informix".si_cliente
-- bdinteg:"informix".si_telefonos_actual
-- bdinteg:"informix".si_telefonos
-- bdinteg:"informix".si_ctepf
-- bdinteg:"informix".si_direcciones_actual
-- bdinteg:"informix".si_direcciones
-- bdinteg:"informix".si_correos

--Instrucciones insert con dato del archivo de entrada relacionado con columna de tabla y columna relacionada con el dato a insertar. El resto de los datos sin referencia se insertan siempre por default.
`


const consulta1 = (A,B,C,D,E) => {
    return `INSERT INTO bdinteg:"informix".si_cliente(empresa, /*NUMERO CLIENTE*/numcte, status_cte, sucursal, ejecutivo, tpo_persona, tipo_cliente, /*APELLIDO PATERNO*/apell_paterno, /*APELLIDO MATERNO*/apell_materno, /*NOMBRE 1*/nombre1, /*NOMBRE 2*/nombre2, razon_social, rfc, sector, segmento, actividad_princ, grupo, subgrupo, residencia, fecha_alta, apell_casada, distrito, numcte_ref, string1, string2, numeric1, numeric2, money1, date1, puesto_ppes, familiar_ppes, actividad_esp, ejecut_autoriza, user_insert, fecha_insert, rfc_alterno, tpo_biometria, cliente_pros, envio_movtos)
    VALUES('001', /*numcte*/'${A}', 'AL', '0002', '92129501', '01', '1', /*apell_paterno*/'${B}', /*apell_materno*/'${C}', /*nombre1*/'${D}', /*nombre2*/'${E}', '', 'RUME8612165S5', '32', '000', '', '000', '000', '1', '2020-2-6', '', '01', '140526277', '', '03', 0, 0, 0, null, '', '', '0000000', '93416792', '93416792', '2010-2-6', null, '0', null, null);\n\n`
}

const consulta2 = (A,G) => {
    return `INSERT INTO bdinteg:"informix".si_telefonos_actual(empresa, /*NUMERO CLIENTE*/numcte, /*TELEFONO*/telefono, tipo_tel, status_tel, secuencia, extension, carrier, canal, contacto, cofetel, fecha_hora, user_insert, movil_fijo, status_stel, tel_confirmado, fech_confirmado)
    VALUES('001', /*numcte*/'${A}', /*telefono*/'${G}', 2, 'A', 1, '', 1, 1, 0, 'V', '2020-3-6 5:16:21.0', '93825978', '0', '', null, null);\n\n`
}

const consulta3 = (A,G) => {
    return `INSERT INTO bdinteg:"informix".si_telefonos(empresa, /*NUMERO CLIENTE*/numcte, /*TELEFONO*/telefono, tipo_tel, status_tel, secuencia, extension, carrier, canal, contacto, cofetel, fecha_hora, user_insert, movil_fijo, status_stel, verificado, marcatel, fecha_actualiza, tel_confirmado, fech_confirmado)
    VALUES('001', /*numcte*/'${A}', /*telefono*/'${G}', 2, 'A', 1, '', 1, 1, 0, 'V', '2020-3-6 5:16:21.0', 'transBPI', '0', '', null, null, null, null, null);\n\n`
}

const consulta4 = (A,F) => {
    return `INSERT INTO bdinteg:"informix".si_ctepf(empresa, /*NUMERO CLIENTE*/numcte, /*FECHA NACIMIENTO*/fecha_nac, lugar_nac, nacionalidad, no_fm3, estado_civil, regim_matrimonio, profesion, sexo, curp, codidentifi, numidentifi, no_imss, dependientes, tutor, nom_conyuge, seguro_defunc, escolaridad, habita_en, anios_habita, nombre_prop, imp_hipo_renta, actividadogiro, numeroife, numerotutor, numeroconyuge, string1, string2, numeric1, numeric2, money1, date1, user_insert, fecha_insert, sms_cel, hora_insert, id_pais)
    VALUES('001', /*numcte*/'${A}', /*fecha_nac*/'${moment(F).format('YYYY-MM-DD')}', '', '001', 'S', '', null, 'M', '', 'A', '', '1181079488993', '', 0, '', '', '0', '', 'P', 0, '', 0, null, null, null, null, null, null, 0, 0, 0, null, 'interact', '2020-2-6', null, '2020-3-6 5:31:54.0', null);\n\n`
}

const consulta5 = (A) => {
    return `INSERT INTO bdinteg:"informix".si_direcciones_actual(/*NUMERO CLIENTE*/numcte, secuencia, tipo_dir, calle, colonia, entre_calles, pais, estado, ciudad, municipio, cod_postal, apart_postal, estado_inegi, municipio_inegi, localidad_inegi, numerociudad, numeroextcalle, numerointcalle, departamento, numerocalle, numerocolonia, puntocardinal, unidadhabitac, manzana, otros, andador, etapa, lote, edificio, entrada, observaciones, user_insert, fecha_insert, ind_cofeteltel1, ind_cofeteltel2, ind_cofeteltel3) 
    VALUES(/*numcte*/'${A}', 1, '1', '', '', '', '001', '01', '001', '0000', '00000', '', '', '', '', 0, '', '', '', 0, 0, '', '', 0, 0, 0, 0, 0, 0, 0, '', '93089741', '2020-2-6', 'F', 'F', 'F');\n\n`
}

const consulta6 = (A) => {
    return `INSERT INTO bdinteg:"informix".si_direcciones(/*NUMERO CLIENTE*/numcte, secuencia, tipo_dir, calle, colonia, entre_calles, pais, estado, ciudad, municipio, cod_postal, apart_postal, estado_inegi, municipio_inegi, localidad_inegi, numerociudad, numeroextcalle, numerointcalle, departamento, numerocalle, numerocolonia, puntocardinal, unidadhabitac, manzana, otros, andador, etapa, lote, edificio, entrada, observaciones, user_insert, fecha_insert, ind_cofeteltel1, ind_cofeteltel2, ind_cofeteltel3) 
    VALUES(/*numcte*/'${A}', 1, '1', '', '', '', '001', '01', '001', '0000', '00000', '', '', '', '', 0, '', '', '', 0, 0, '', '', 0, 0, 0, 0, 0, 0, 0, '', '93089741', '2020-2-6', 'F', 'F', 'F');\n\n`
}

const consulta7 = (A,H) => {
    return `INSERT INTO bdinteg:"informix".si_correos(empresa, /*NUMERO CLIENTE*/numcte, /*EMAIL*/correo_elec, tipo_correo, status_correo, secuencia, canal, fecha_hora, user_insert, valida_correo, valido, fecha_valida, correo_elec_alt) 
    VALUES('001', /*numcte*/'${A}', /*correo_elec*/'${H}', 1, 'A', 1, 1, '2020-3-6 5:49:59.0', '92599192', null, null, null, null);\n`
}


const info2 = `
-- Informacion de la cuenta de debito
-- Tablas involucradas
-- bdicheq:"informix".sc_maechq
-- bdicheq:"informix".sc_producto (Es tabla catalogo. Solo debe existir la relacion con la tabla. No es necesario generar insert)\n
`

const consulta8 = (A,J,K,L) => {
    return `INSERT INTO bdicheq:"informix".sc_maechq(empresa, /*CUENTA*/cuenta, sucursal, plaza, /*PRODUCTO*/producto, /*NUMERO CLIENTE*/num_cte, /*ESTATUS*/status_cta, motivo, ult_chq, colateral, fec_ult_mov, fec_cancelac, lim_chq_sbc, imp_chq_sbc, fech_alta_sbc, fech_venc_sbc, lim_chq_rem, imp_chq_rem, fech_alta_rem, fech_venc_rem, lim_sbg_ccc, imp_sbg_ccc, tipo_linea, fec_alta_ccc, fech_venc_ccc, imp_int_ccc, sdo_retenido, chq_exp_mes, chq_dev, monto_dev, chq_dev_obco, sdo_cong, num_cgos_mes, imp_cgos_mes, num_abonos_mes, imp_abonos_mes, sdo_actual, sdo_dia_ant, marca_ret, direcc_envio, com_pendiente, imp_chq_sbg, imp_int_sbg, fecha_proceso, cuenta_rel, saldo_sbc, fecultdep, fecultret, ultpagocap, ultpagoint, plazo, cobraisr, proced_aperturacta, proced_mantenercta, monto_mensual, depositos_cantidad, depositos_monto, retiros_cantidad, retiros_monto, /*CUENTA_MOD*/cuenta_clabe) 
    VALUES('001', /*cuenta*/'${J}', '0557', '017', /*producto*/'${K}', /*num_cte*/'${A}', /*status_cta*/'${L}', '', 0, 'N', '2020-2-6', null, 0, 0, null, null, 0, 0, null, null, 0, 0, '0', null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '1', 0, 0, 0, 0, '2020-2-6', '', 0, '2020-2-6', null, '2020-2-6', '2020-2-6', 0, 'S', '01', '01', '01', '01', '01', '01', '01', /*cuenta_clabe*/'137730${J}1');\n`
}

const info3 = `
-- Informacion de la tarjeta de debito
-- Tablas involucradas
-- bdicheq:"informix".sc_tarjeta\n
`

const consulta9 = (A,B,C,D,E,J,K,M,O) => {
    return `INSERT INTO bdicheq:"informix".sc_tarjeta(empresa, /*CUENTA*/cuenta, secuencia, /*NUMERO TARJETA*/num_tarjeta, /*NUMERO CLIENTE*/numcte, /*PRODUCTO*/prodtarjeta, expiracion, tipo_tarjeta, /*MODIFICACION*/nombre, /*ESTATUS TARJETA*/status_tar, limite_aut, disp_mes, motivo, tipo_asignacion, cobro_comision, gerente_autoriza, bandera_cobro, bandera_bonificacion, cobro_tarjeta, iva_cobrotar, fecha_insert) 
    VALUES('001', /*cuenta*/'${J}', 1, /*num_tarjeta*/'${O}', /*numcte*/'${A}', /*prodtarjeta*/'${K}', '2023-3-1', 'T', /*nombre*/'${name(B,C,D,E,30)}', /*status_tar*/'${M}', 0, 0, '01', 'R', 'N', '', '0', '0', 0, 0, '2020-2-6');\n`
}

const info4 = `
-- Informacion de la tarjeta
-- Tablas involucradas
-- intercard:"informix".tarjeta\n
`
const consulta10 = (A,B,C,D,E,K,N,O) => {
    return `INSERT INTO intercard:"informix".tarjeta(/*NUMERO TARJETA*/numtarjeta, /*ESTATUS TARJETA FISICA*/codstatustarjeta, /*PRODUCTO_MOD*/codproductotarjeta, /*NUMERO CLIENTE*/numcliente, titular, /*MODIFICACION*/nombre, direccion, coldeleg, ciudad, estado, codpostal, telcasa, teloficina, fechaexp, sefabricaplastico, seimprimenip, acumdiarioretatmnac, acumdiarioretatmint, acummensretatmnac, acummensretatmint, acumdiariocompraposnac, acumdiariocompraposint, acummenscompraposnac, acummenscompraposint, acumcomconsatmnac, acumcomconsatmint, acumcomretatmnac, acumcomretatmint, acumcomcompraposnac, acumcomcompraposint, acumcomrevatmnac, acumcomrevatmint, acumcomrevposnac, acumcomrevposint, acumcomfzdaposnac, acumcomfzdaposint, contcomconsatmnac, contcomconsatmint, contcomretatmnac, contcomretatmint, contcomcompraposnac, contcomcompraposint, contcomrevatmnac, contcomrevatmint, contcomrevposnac, contcomrevposint, contcomfzdaposnac, contcomfzdaposint, conttranconsatmlibres, conttranretatmlibres, conttrancompraposlibres, contmaxtranconsatmdiarias, contmaxtranretatmdiarias, contmaxtrancompraposdiarias, contmaxtranconsatmmens, contmaxtranretatmmens, contmaxtrancompraposmens, numerolote, contmaxtranretatmnachd, contmaxtrancompraposnachd, contmaxtranretatminthd, contmaxtrancompraposinthd, usuarioultmodif, fechaultmodif, acumretatmnachd, acumretatminthd, acumcompraposnachd, acumcompraposinthd, numreporte, enrenovacion, fechaexprenovacion, numtarjetasustituta, acumdiarioretatmpropio, acummensretatmpropio, acumcomconsatmpropio, acumcomretatmpropio, acumcomrevatmpropio, contcomconsatmpropio, contcomretatmpropio, contcomrevatmpropio, conttranconsatmlibrespropio, conttranretatmlibrespropio, contmaxtranconsatmdiariopropio, contmaxtranretatmdiariaspropio, contmaxtranconsatmmenspropio, contmaxtranretatmmenspropio, contmaxtranretatmpropiohd, acumretatmpropiohd, nombrecorto, fechanacimiento, nombrepromotor, cobracomreexptrj, cobracomreimpnip, idpaq, codstatusasignada, fechaasignacion, acumdiariocashbacknac, acummenscashbacknac, acumdiariocashadvancenac, acummenscashadvancenac, conttrancashbacklibres, conttrancashadvancelibres, contmaxtrancashbackdiarias, contmaxtrancashadvancediarias, contmaxtrancashbackmens, contmaxtrancashadvancemens, soportatranatmcajeropropio, soportatranatmcajeroconvenio, soportetranatmcajerored, contnipinvalido, acumdiarioretatmconvenio, acummensualretatmconvenio, acumcomconsatmconvenio, acumcomretatmconvenio, acumcomrevatmconvenio, contcomconsatmconvenio, contcomretatmconvenio, contcomrevatmconvenio, conttranconsatmconveniolibres, conttranretatmconveniolibres, contmaxtranconsatmdconveniodiarias, contmaxtranretatmconveniodiarias, contmaxtranconsatmconveniomens, contmaxtranretatmconveniomens, soportatranatmcajerointernacional, limitemenscompraposnac, limitemenscompraposint, numeroguia, acumdiarioqps, acumdiariocat, acumdiariomotovoz, acumdiariomotoint, acummensualmotovoz, acummensualmotoint, conttransmotovozdiario, conttransmotointdiario, conttransmotovozmensual, conttransmotointmensual, contcvv2invalido, acumdiariotag, acummensualtag, conttransdiariotag, conttransmensualtag, conttrancambionipdiario, conttrandepositolibres, contmaxtrandepositodiarias, contmaxtrandepositomens, acumdiariodepositonac, acummensdepositonac)
  VALUES(/*numtarjeta*/'${O}', /*codstatustarjeta*/'${N}', /*codproductotarjeta*/'${501}', /*numcliente*/'${A}', 'T', /*nombre*/'${name(B,C,D,E,104)}', '', '', '', '', '', '', '', '2409', 'V', 'V', 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90203, NULL, NULL, NULL, NULL, '90016794', EXTEND(MDY(11,12,2019), YEAR to SECOND)+12 UNITS HOUR+47 UNITS MINUTE+32 UNITS SECOND, NULL, NULL, NULL, NULL, NULL, 'F', NULL, NULL, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '', EXTEND(MDY(7,22,1997), YEAR to SECOND)+0 UNITS HOUR+0 UNITS MINUTE+0 UNITS SECOND, '', 'F', 'F', NULL, 'SIA', EXTEND(MDY(11,12,2019), YEAR to SECOND)+12 UNITS HOUR+47 UNITS MINUTE+31 UNITS SECOND, 0.00, 0.00, 0.00, 0.00, 0, 0, 0, 0, 0, 0, 'V', 'F', 'V', 0, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'V', 0.0000, 0.0000, 40, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0.00, 0.00);\n`
}


module.exports = {
    info,
    info1,
    consulta1,
    consulta2,
    consulta3,
    consulta4,
    consulta5,
    consulta6,
    consulta7,
    info2,
    consulta8,
    info3,
    consulta9,
    info4,
    consulta10,
}