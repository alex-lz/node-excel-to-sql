const moment = require('moment')
moment.updateLocale(moment.locale(), { invalidDate: "" })


let fecha = moment().add(24, 'M').format('YYYY-MM-01');
    fecha = `'${fecha}'`;
let fecha20 = Number(moment().format('DD'));// EXTEND(MDY(7,16,2011), YEAR to SECOND)
let fecha18 = Number(moment().format('DD'));// EXTEND(MDY(5,20,2018), YEAR to SECOND) MDY(11,18,2018), YEAR to SECOND)

if (fecha20 > 20){
   fecha20 = moment().add(1, 'M').format('YYYY-MM-20'); fecha20 = `'${fecha20}'`;
} else {
   fecha20 = moment().format('YYYY-MM-20'); fecha20 = `'${fecha20}'`;
}

if (fecha18 > 18){
   fecha18 = moment().format('YYYY-MM-18'); fecha18 = `'${fecha18}'`;
} else {
   fecha18 = moment().subtract(1, 'M').format('YYYY-MM-18'); fecha18 = `'${fecha18}'`;
}

const name = (B,C,D,E,lon) => {
    let n = D + ' ' + E + ' ' + B + ' ' + C;
    E === '' ? n = D + ' ' + B + ' ' + C : null;
    return n.substring(0, lon);
}


const info1 = `
-- CATEGORIA PRODUCTO = CR 

-- Informacion de la cuenta de credito
-- Tablas involucradas
-- bdicred:"informix".sd_maecred
-- bdicred:"informix".sd_maesdos
-- bdicred:"informix".sd_maecredanexo
-- bdicred:"informix".sd_amortiza_credito
-- bdicred:"informix".sd_maesdoshist
-- bdicred:"informix".sd_movdia
-- bdicred:"informix".sd_definicion (Es tabla catalogo. Solo debe existir la relacion con la tabla. No es necesario generar insert)
-- bdicred:"informix".sd_tipoprod (Es tabla catalogo. Solo debe existir la relacion con la tabla. No es necesario generar insert)\n
`
const consulta1 = (A,J,K,L) => {
    return `INSERT INTO bdicred:"informix".sd_maecred(empresa, /*CUENTA*/num_credito, /*PRODUCTO*/num_producto, ejecutivo, /*NUMERO CLIENTE*/numcte, divisa, sucursal, id_origen, origen, cod_tipo_linea, cod_linea, porc_rec_prop, /*ESTATUS*/status_cred, bandera_renovac, bandera_prorroga, periodo_plazo, plazo, fecha_apertura, /*MODIFICACION_9*/fecha_vencim, period_pago_cap, period_pag_int, dias_trasp_cap, dias_trasp_int, tasa_fija_o_var, cod_tasa_base, factor_sobretasa, sobretasa, tasa_interes, cod_tasa_mora, sobretasa_mora, fact_sobret_mora, tasa_moratorios, fecha_pago_cap, fecha_pago_int, es_fisica, bandera_fi_fo, codigo_pro, superficie, actividad, cal_edos_fin, tipo_calculo, admite_tlp, rel_garcred, id_unidad_prod, num_aper_ant, rev_tasa_var_per, dia_para_revisar, cod_prod, bandera_ministra, num_fideicomiso, credito_externo, gracia_capital, diferimiento_int, fecha_fin_prorrateo, campo_trab1, campo_trab2, campo_trab3, campo_trab4, calificacion_riesgo, cod_agricola, tasa_base_piso, sobretasa_piso, factor_piso, tasa_piso, tasa_base_techo, sobretasa_techo, factor_techo, tasa_techo, cod_caract, cod_caract_2, /*CUENTA_MOD*/cuenta_clabe)
    VALUES('001', /*num_credito*/'${J}', /*num_producto*/'${K}', '91033365', /*numcte*/'${A}', '01', '0204', '  ', '   ', '  ', '    ', 100.000000, /*status_cred*/'${L}', 'N', 'N', 'M', 0, EXTEND(MDY(7,2,2007), YEAR to SECOND), /*fecha_vencim*/${fecha}, '3', '2', 60, 60, ' ', 'TARJETA ', '+', 0.000000, 59.900000, 'TASAMORA', 0.000000, '+', 64.900000, NULL, NULL, 'S', '  ', '      ', 0.000, '   ', '  ', '  ', ' ', 0.00, NULL, '                    ', ' ', NULL, '  ', 'M', '                    ', '                    ', 0, 0, EXTEND(MDY(7,2,2007), YEAR to SECOND), 0.00, 0.00, '          ', '          ', 'A1', '     ', '        ', NULL, ' ', NULL, '        ', NULL, ' ', 3.000000, NULL, NULL,  /*cuenta_clabe*/'137730${J}');\n\n`
}

const consulta2 = (J) => {
    return `INSERT INTO bdicred:"informix".sd_maesdos(empresa, /*CUENTA*/num_credito, fecha_ult_mov, sdo_int_anticip, sdo_int_ant_dev, sdo_intereses, sdo_dia_ant_int, sdo_mes_ant_int, sdo_acum_mes_int, sdo_retenido, sdo_acum_cap_int, sdo_exig_int, sdo_no_exig, provision_normal, dias_acum_int, sdo_moratorio, sdo_dia_ant_mor, sdo_mes_ant_mor, sdo_contab_mora, dias_acum_mora, sdo_capital, sdo_cap_insoluto, sdo_dia_ant_cap, sdo_mes_ant_cap, sdo_acum_mes_cap, mto_capitalizado, mto_ministra_cap, cargos_dia_cap, abonos_dia_cap, cargos_mes_cap, abonos_mes_cap, dias_acum_cap, monto_vencido, mto_venc_trasp, monto_financiado, monto_reservado, sdo_acum_vencido, dias_acum_intper, sdo_global_int, sdo_acum_intper, monto_otorgado, provi_venc_normal, provi_venc_anticip, cap_tras_no_venci, mto_venc_int, mto_venc_tra_int, mto_finan_vdo, mto_reser_int, mto_fin_ven_trasp, mto_fin_vig_trasp, int_tra_no_exig, sdo_trab4) 
    VALUES('001', /*num_credito*/'${J}', '2020-1-1', 1.1, 0, 1.1, 0, 0, 1.1, 0, 0, 0, 98.32, 0, 1, 0, 0, 0, 0, 0, -1509.55, 7000.009, 606.58, 0, 606.58, 7356.53, 25891.25, 0, 0, 94276.81, 35656.78, 1, 0, 0, 320, 0, 0, 0, 7077.51, 1.1, 9000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 320);\n\n`
}

const consulta3 = (J) => {
    return `INSERT INTO bdicred:"informix".sd_maecredanexo(empresa, /*CUENTA*/num_credito, dia_corte, dias_gracia_mora, tp_dias_calc_mora, dias_fecha_max_pago, tp_dias_fecha_pago, cod_tasa_base_cte, factor_sobretasa_cte, sobretasa_cte, tasa_interes_cte, fecha_vencto, /*MODIFICACION_10*/prox_fecha_pago, fecha_proceso, fecha_ult_pago)
    VALUES('001', /*num_credito*/'${J}', 20, 4, '1', 26, '1', 'TARJETA ', '+', 0.000000, NULL, EXTEND(MDY(12,20,2010), YEAR to SECOND), /*prox_fecha_pago*/${fecha20}, EXTEND(MDY(6,30,2011), YEAR to SECOND), EXTEND(MDY(1,17,2011), YEAR to SECOND));\n\n`
}

const consulta4 = (J) => {
    return `INSERT INTO bdicred.sd_amortiza_credito(empresa, /*CUENTA*/num_credito, /*MODIFICACION_11*/fecha_cuota, tipo_cuota, capital_mto_cuota, capital_debe, capital_pagado, capital_status, capital_status_ant, capital_fecha_pago, interes_debe, interes_pagado, interes_status, interes_status_ant, interes_fecha_pago, iva_debe, iva_pagado, iva_status, iva_status_ant, iva_fecha_pago, mora_provi_ordi, mora_provi_cope, mora_sdo_ordi, mora_sdo_ordi_pag, mora_sdo_cope, mora_sdo_cope_pag, mora_bonificado, mora_status, mora_iva_debe, mora_iva_pagado, mora_iva_status, mora_iva_fecha_pago, num_pago, campo_trabajo1, campo_trabajo2, campo_trabajo3, campo_trabajo4)
    VALUES('001', /*num_credito*/'${J}', /*fecha_cuota*/${fecha18}, '3', 0.00, 0.00, 0.00, '5', '0', NULL, 0.00, 0.00, '1', '0                 ', '                  ', 0.00, 0.00, '1', '0', NULL, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, '1', 0.00, 0.00, '1', NULL, 5, 0.00, 0.00, '', '');\n\n`
}

const consulta5 = (J) => {
    return `INSERT INTO bdicred:"informix".sd_maesdoshist(/*MODIFICACION_12*/fecha, empresa, /*CUENTA*/num_credito, fecha_ult_mov, sdo_int_anticip, sdo_int_ant_dev, sdo_intereses, sdo_dia_ant_int, sdo_mes_ant_int, sdo_acum_mes_int, sdo_retenido, sdo_acum_cap_int, sdo_exig_int, sdo_no_exig, provision_normal, dias_acum_int, sdo_moratorio, sdo_dia_ant_mor, sdo_mes_ant_mor, sdo_contab_mora, dias_acum_mora, sdo_capital, sdo_cap_insoluto, sdo_dia_ant_cap, sdo_mes_ant_cap, sdo_acum_mes_cap, mto_capitalizado, mto_ministra_cap, cargos_dia_cap, abonos_dia_cap, cargos_mes_cap, abonos_mes_cap, dias_acum_cap, monto_vencido, mto_venc_trasp, monto_financiado, monto_reservado, sdo_acum_vencido, dias_acum_intper, sdo_global_int, sdo_acum_intper, monto_otorgado, provi_venc_normal, provi_venc_anticip, cap_tras_no_venci, mto_venc_int, mto_venc_tra_int, mto_finan_vdo, mto_reser_int, mto_fin_ven_trasp, mto_fin_vig_trasp, int_tra_no_exig, sdo_trab4, tasa_interes)
    VALUES(/*fecha*/${fecha18}, YEAR to SECOND), '001', /*num_credito*/'${J}', EXTEND(MDY(11,20,2018), YEAR to SECOND), 886.56, 0.00, 0.00, 858.18, 0.00, 886.56, 0.00, 0.00, 0.00, 886.56, 0.00, 31, 0.00, 0.00, 0.00, 2.79, 1, 16028.38, 17038.38, 16090.63, 0.00, 502644.91, 34804.15, -151506.99, 0.00, 0.00, 115975.45, 133741.22, 31, 1010.00, 0.00, 2620.00, 0.00, 0.00, 0, 12840.20, 886.56, 21600.00, 0.00, 0.00, 0.00, 0.00, 825.44, 0.00, 0.00, 1.00, 0.00, 0.00, 2620.00, NULL);\n\n`
}

const consulta6 = (J,K,O) => {
    return `INSERT INTO bdicred:"informix".sd_movdia(empresa, secuencia, fecha_mov, hora_mov, sucursal, /*CUENTA*/num_credito, plaza, transacc_suc, usuario, monto, codigo_fun, codigo_ref, divisa, reversado, folio_suc, /*PRODUCTO*/num_producto, /*NUMERO TARJETA*/nro_tarjeta, referencia, tipo_cambio, monto_dls, suc_origen, rfc_comer, referencia23, fecha_operacion)
    VALUES('001', 46009534, EXTEND(MDY(3,30,2009), YEAR to SECOND), EXTEND(MDY(3,1,1700), YEAR to SECOND)+10 UNITS HOUR+40 UNITS MINUTE+1 UNITS SECOND, '9290', /*num_credito*/'${J}', '900', '6857', 'c9258098', 10.00, '339', 17, '00', 'N', 'intercar2246050 ', /*num_producto*/'${K}', /*nro_tarjeta*/'${O}', 'intercar2246050  HSBC I96123            ', 0.000000, 0.00, NULL, '                ', '                       ', EXTEND(MDY(3,23,2017), YEAR to SECOND)+4 UNITS HOUR+10 UNITS MINUTE+5 UNITS SECOND);\n`
}

const info2 = `
-- Informacion de la tarjeta de credito
-- Tablas involucradas
-- bdicred:"informix".sd_tarjeta
-- intercard:"informix".tarjeta\n  
`

const consulta7 = (A,J,K,M,O) => {
    return `INSERT INTO bdicred:"informix".sd_tarjeta(empresa, /*CUENTA*/num_credito, secuencia, /*NUMERO TARJETA*/num_tarjeta, /*NUMERO CLIENTE*/numcte, /*PRODUCTO*/prodtarjeta, expiracion, tipo_tarjeta, nombre, /*ESTATUS TARJETA*/status_tar, limite_aut, disp_mes, motivo, tipo_asignacion, cobro_comision, gerente_autoriza, folio_canc) 
    VALUES('001', /*num_credito*/'${J}', 1, /*num_tarjeta*/'${O}', /*numcte*/'${A}', /*prodtarjeta*/'${K}', '2023-3-1', 'T', 'ALEXIS GUTIERREZ GUTIERREZ', /*status_tar*/'${M}', 3600, null, null, '', '', '', '');\n\n`
}

const consulta8 = (A,B,C,D,E,K,N,O) => {
    return `INSERT INTO intercard:"informix".tarjeta(/*NUMERO TARJETA*/numtarjeta, /*ESTATUS TARJETA FISICA*/codstatustarjeta, /*PRODUCTO_MOD*/codproductotarjeta, /*NUMERO CLIENTE*/numcliente, titular, /*MODIFICACION*/nombre, direccion, coldeleg, ciudad, estado, codpostal, telcasa, teloficina, fechaexp, sefabricaplastico, seimprimenip, acumdiarioretatmnac, acumdiarioretatmint, acummensretatmnac, acummensretatmint, acumdiariocompraposnac, acumdiariocompraposint, acummenscompraposnac, acummenscompraposint, acumcomconsatmnac, acumcomconsatmint, acumcomretatmnac, acumcomretatmint, acumcomcompraposnac, acumcomcompraposint, acumcomrevatmnac, acumcomrevatmint, acumcomrevposnac, acumcomrevposint, acumcomfzdaposnac, acumcomfzdaposint, contcomconsatmnac, contcomconsatmint, contcomretatmnac, contcomretatmint, contcomcompraposnac, contcomcompraposint, contcomrevatmnac, contcomrevatmint, contcomrevposnac, contcomrevposint, contcomfzdaposnac, contcomfzdaposint, conttranconsatmlibres, conttranretatmlibres, conttrancompraposlibres, contmaxtranconsatmdiarias, contmaxtranretatmdiarias, contmaxtrancompraposdiarias, contmaxtranconsatmmens, contmaxtranretatmmens, contmaxtrancompraposmens, numerolote, contmaxtranretatmnachd, contmaxtrancompraposnachd, contmaxtranretatminthd, contmaxtrancompraposinthd, usuarioultmodif, fechaultmodif, acumretatmnachd, acumretatminthd, acumcompraposnachd, acumcompraposinthd, numreporte, enrenovacion, fechaexprenovacion, numtarjetasustituta, acumdiarioretatmpropio, acummensretatmpropio, acumcomconsatmpropio, acumcomretatmpropio, acumcomrevatmpropio, contcomconsatmpropio, contcomretatmpropio, contcomrevatmpropio, conttranconsatmlibrespropio, conttranretatmlibrespropio, contmaxtranconsatmdiariopropio, contmaxtranretatmdiariaspropio, contmaxtranconsatmmenspropio, contmaxtranretatmmenspropio, contmaxtranretatmpropiohd, acumretatmpropiohd, nombrecorto, fechanacimiento, nombrepromotor, cobracomreexptrj, cobracomreimpnip, idpaq, codstatusasignada, fechaasignacion, acumdiariocashbacknac, acummenscashbacknac, acumdiariocashadvancenac, acummenscashadvancenac, conttrancashbacklibres, conttrancashadvancelibres, contmaxtrancashbackdiarias, contmaxtrancashadvancediarias, contmaxtrancashbackmens, contmaxtrancashadvancemens, soportatranatmcajeropropio, soportatranatmcajeroconvenio, soportetranatmcajerored, contnipinvalido, acumdiarioretatmconvenio, acummensualretatmconvenio, acumcomconsatmconvenio, acumcomretatmconvenio, acumcomrevatmconvenio, contcomconsatmconvenio, contcomretatmconvenio, contcomrevatmconvenio, conttranconsatmconveniolibres, conttranretatmconveniolibres, contmaxtranconsatmdconveniodiarias, contmaxtranretatmconveniodiarias, contmaxtranconsatmconveniomens, contmaxtranretatmconveniomens, soportatranatmcajerointernacional, limitemenscompraposnac, limitemenscompraposint, numeroguia, acumdiarioqps, acumdiariocat, acumdiariomotovoz, acumdiariomotoint, acummensualmotovoz, acummensualmotoint, conttransmotovozdiario, conttransmotointdiario, conttransmotovozmensual, conttransmotointmensual, contcvv2invalido, acumdiariotag, acummensualtag, conttransdiariotag, conttransmensualtag, conttrancambionipdiario, conttrandepositolibres, contmaxtrandepositodiarias, contmaxtrandepositomens, acumdiariodepositonac, acummensdepositonac)
  VALUES(/*numtarjeta*/'${O}', /*codstatustarjeta*/'${N}', /*codproductotarjeta*/'${001}', /*numcliente*/'${A}', 'T', /*nombre*/'${name(B,C,D,E,104)}', '', '', '', '', '', '', '', '2409', 'V', 'V', 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90203, NULL, NULL, NULL, NULL, '90016794', EXTEND(MDY(11,12,2019), YEAR to SECOND)+12 UNITS HOUR+47 UNITS MINUTE+32 UNITS SECOND, NULL, NULL, NULL, NULL, NULL, 'F', NULL, NULL, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '', EXTEND(MDY(7,22,1997), YEAR to SECOND)+0 UNITS HOUR+0 UNITS MINUTE+0 UNITS SECOND, '', 'F', 'F', NULL, 'SIA', EXTEND(MDY(11,12,2019), YEAR to SECOND)+12 UNITS HOUR+47 UNITS MINUTE+31 UNITS SECOND, 0.00, 0.00, 0.00, 0.00, 0, 0, 0, 0, 0, 0, 'V', 'F', 'V', 0, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'V', 0.0000, 0.0000, 40, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0.00, 0.00);\n\n`
}


module.exports = {
    info1,
    consulta1,
    consulta2,
    consulta3,
    consulta4,
    consulta5,
    consulta6,
    info2,
    consulta7,
    consulta8
}