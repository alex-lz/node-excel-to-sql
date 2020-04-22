const moment = require('moment')
moment.updateLocale(moment.locale(), { invalidDate: "" })


let fecha = moment().add(24, 'M').format('YYYY-MM-01');
    fecha = `'${fecha}'`;
let fecha22 = Number(moment().format('DD'));// EXTEND(MDY(1,1,1900), YEAR to SECOND)

if (fecha22 > 22){
   fecha22 = moment().add(1, 'M').format('YYYY-MM-22'); fecha22 = `'${fecha22}'`;
} else {
   fecha22 = moment().format('YYYY-MM-22'); fecha22 = `'${fecha22}'`;
}

fecha22_18 = Number(moment().format('DD')); // EXTEND(MDY(7,17,2010), YEAR to SECOND)

if (fecha22_18 > 18){
    fecha22_18 = moment().add(1, 'M').format('YYYY-MM-22'); fecha22_18 = `'${fecha22_18}'`;
 } else {
    fecha22_18 = moment().format('YYYY-MM-22'); fecha22_18 = `'${fecha22_18}'`;
 }
    

const info1 = `
-- CATEGORIA PRODUCTO = PR
-- Prestamos
-- Tablas involucradas
-- bdicred:"informix".sd_maecredcrd
-- bdicred:"informix".sd_maecredanexocrd
-- bdicred:"informix".sd_amortiza_creditocrd
-- bdicred:"informix".sd_maesdoscrd
-- bdicred:"informix".sd_movhiscrd
-- bdicred:"informix".sd_movdiacrd\n
`

const consulta1 = (A,J,K,L,CLABE) => {// '137730${J}'
    return `INSERT INTO bdicred:"informix".sd_maecredcrd(empresa, /*CUENTA*/num_credito, /*PRODUCTO*/num_producto, ejecutivo, /*NUMERO CLIENTE*/numcte, aval_cte, aval_linea, divisa, sucursal, id_origen, origen, cod_tipo_linea, cod_linea, /*ESTATUS*/status_cred, bandera_renovac, bandera_prorroga, periodo_plazo, plazo, fecha_apertura, /*MODIFICACION_9*/fecha_vencim, period_pago_cap, period_pag_int, dias_trasp_cap, dias_trasp_int, tasa_fija_o_var, cod_tasa_base, factor_sobretasa, sobretasa, tasa_interes, cod_tasa_mora, sobretasa_mora, fact_sobret_mora, tasa_moratorios, tasa_preferencial, sobretasa_preferencial, factor_preferencial, valor_preferencial, fecha_pago_cap, fecha_pago_int, es_fisica, bandera_fi_fo, actividad, tipo_calculo, num_aper_ant, rev_tasa_var_per, dia_para_revisar, cod_prod, bandera_ministra, credito_externo, califica_riesgo, cod_agricola, pagos_sostenidos, campo_trab1, campo_trab2, campo_trab3, campo_trab4, /*CUENTA_MOD*/cuenta_clabe)
    VALUES('001', /*num_credito*/'${J}', /*num_producto*/'${K}', '94066531', /*numcte*/'${A}', '                    ', '                    ', '01', '0448', '  ', '   ', '  ', '    ', /*status_cred*/'${L}', 'S', 'N', 'M', 12, EXTEND(MDY(5,12,2012), YEAR to SECOND), /*fecha_vencim*/${fecha}, '3', '2', 90, 90, '1', 'TASAPRES', '+', 0.000000, 60.750000, 'MORAPRES', 0.000000, '+', 96.750000, '        ', 0.000000, ' ', 0.00, EXTEND(MDY(5,12,2013), YEAR to SECOND), EXTEND(MDY(5,12,2013), YEAR to SECOND), 'S', '  ', '   ', '01', '0.160               ', ' ', '0', '  ', 'M', '                    ', '  ', '     ', 0, 0.00, 0.00, '          ', '          ', /*cuenta_clabe*/'${CLABE}');\n\n`
}

const consulta2 = (J) => {
    return `INSERT INTO bdicred:"informix".sd_maecredanexocrd(empresa, /*CUENTA*/num_credito, localidad, dia_corte, dias_gracia_mora, tp_dias_calc_mora, dias_fecha_max_pago, tp_dias_fecha_pago, cod_tasa_base_cte, factor_sobretasa_cte, sobretasa_cte, tasa_interes_cte, fecha_vencto, /*MODIFICACION_13*/prox_fecha_pago, fecha_proceso, fecha_ult_pago, nombre_pres, cat)
    VALUES('001', /*num_credito*/'${J}', NULL, 2, 0, '1', 1, '0', 'CRDREEST', '+', 0.000000, 65.000000, NULL, /*prox_fecha_pago*/${fecha22}, EXTEND(MDY(3,5,2011), YEAR to SECOND), EXTEND(MDY(3,5,2011), YEAR to SECOND), NULL, 0.00);\n\n`
}

const consulta3 = (J) => {
    return `INSERT INTO bdicred:"informix".sd_amortiza_creditocrd(empresa, /*CUENTA*/num_credito, /*MODIFICACION_14*/fecha_cuota, tipo_cuota, capital_mto_cuota, capital_debe, capital_pagado, capital_status, capital_status_ant, capital_fecha_pago, interes_debe, interes_pagado, interes_status, interes_status_ant, interes_fecha_pago, iva_debe, iva_pagado, iva_status, iva_status_ant, iva_fecha_pago, mora_provi_ordi, mora_provi_cope, mora_sdo_ordi, mora_sdo_ordi_pag, mora_sdo_cope, mora_sdo_cope_pag, mora_bonificado, mora_status, mora_iva_debe, mora_iva_pagado, mora_iva_status, mora_iva_fecha_pago, num_pago, campo_trabajo1, campo_trabajo2, campo_trabajo3, campo_trabajo4)
    VALUES('001', /*num_credito*/'${J}', /*fecha_cuota*/${fecha22_18}, '3', 1000.00, 681.96, 0.00, '5', '1', NULL, 274.17, 0.00, '3', '0                 ', '                  ', 43.87, 43.87, '1', '0', NULL, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, '1', 0.00, 0.00, '1', NULL, 5, 0.00, 0.00, '', '');\n\n`
}

const consulta4 = (J) => {
    return `INSERT INTO bdicred:"informix".sd_maesdoscrd(empresa, /*CUENTA*/num_credito, fecha_ult_mov, sdo_int_anticip, sdo_int_ant_dev, sdo_intereses, sdo_dia_ant_int, sdo_mes_ant_int, sdo_acum_mes_int, sdo_retenido, sdo_acum_cap_int, sdo_exig_int, sdo_no_exig, provision_normal, dias_acum_int, sdo_moratorio, sdo_dia_ant_mor, sdo_mes_ant_mor, sdo_contab_mora, dias_acum_mora, sdo_capital, sdo_cap_insoluto, sdo_dia_ant_cap, sdo_mes_ant_cap, sdo_acum_mes_cap, mto_capitalizado, mto_ministra_cap, cargos_dia_cap, abonos_dia_cap, cargos_mes_cap, abonos_mes_cap, dias_acum_cap, monto_vencido, mto_venc_trasp, monto_financiado, monto_reservado, sdo_acum_vencido, dias_acum_intper, sdo_global_int, sdo_acum_intper, monto_otorgado, provi_venc_normal, provi_venc_anticip, cap_tras_no_venci, mto_venc_int, mto_venc_tra_int, mto_finan_vdo, mto_reser_int, mto_fin_ven_trasp, mto_fin_vig_trasp, int_tra_no_exig, sdo_trab4)
    VALUES('001', /*num_credito*/'${J}', EXTEND(MDY(3,28,2012), YEAR to SECOND), 0.00, 0.00, 0.00, 0.00, 27.17, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 27, 0.00, 0.00, 0.00, 0.00, 122, 0.00, 30.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 660, 0.00, 0.00, 0.00, 0.00, 0.00, 152, 0.00, 2180.96, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 3027.20);\n\n`
}

const consulta5 = (J,K) => {
    return `INSERT INTO bdicred:"informix".sd_movhiscrd(empresa, secuencia, fecha_mov, hora_mov, sucursal, /*CUENTA*/num_credito, plaza, transacc_suc, usuario, monto, codigo_fun, codigo_ref, divisa, reversado, folio_suc, /*PRODUCTO*/num_producto, nro_tarjeta, referencia, tipo_cambio, monto_dls, suc_origen, rfc_comer, referencia23)
    VALUES('001', 840779726, EXTEND(MDY(6,9,2019), YEAR to SECOND), EXTEND(MDY(3,1,1700), YEAR to SECOND)+0 UNITS HOUR+8 UNITS MINUTE+20 UNITS SECOND, '1255', /*num_credito*/'${J}', '047', '0000', 'informix', 470.89, '222', 43, '01', 'N', 'informix96190008', /*num_producto*/'${K}', NULL, 'INT', NULL, NULL, '1255', NULL, '');\n\n`
}

const consulta6 = (J,K) => {
    return `INSERT INTO bdicred:"informix".sd_movdiacrd(empresa, secuencia, fecha_mov, hora_mov, sucursal, /*CUENTA*/num_credito, plaza, transacc_suc, usuario, monto, codigo_fun, codigo_ref, divisa, reversado, folio_suc, /*PRODUCTO*/num_producto, nro_tarjeta, referencia, tipo_cambio, monto_dls, suc_origen, rfc_comer, referencia23)
    VALUES('001', 31, EXTEND(MDY(3,17,2010), YEAR to SECOND), EXTEND(MDY(3,1,1700), YEAR to SECOND)+14 UNITS HOUR+9 UNITS MINUTE+46 UNITS SECOND, '0490', /*num_credito*/'${J}', '042', '0000', 'informix', 3118.62, '021', 1, '01', 'S', 'informix63000000', /*num_producto*/'${K}', NULL, 'ANTICIPO', NULL, NULL, '0490', NULL, '');\n\n`
}


module.exports = {
    info1,
    consulta1,
    consulta2,
    consulta3,
    consulta4,
    consulta5,
    consulta6
}