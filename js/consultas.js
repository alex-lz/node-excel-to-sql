const moment = require('moment')
moment.updateLocale(moment.locale(), { invalidDate: "" })


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
    VALUES('001', /*numcte*/'${A}', /*telefono*/'${G}', 1, 'A', 1, '', 1, 1, 0, 'V', '2020-3-6 5:16:21.0', '93825978', '0', '', null, null);\n\n`
}

const consulta3 = (A,G) => {
    return `INSERT INTO bdinteg:"informix".si_telefonos(empresa, /*NUMERO CLIENTE*/numcte, /*TELEFONO*/telefono, tipo_tel, status_tel, secuencia, extension, carrier, canal, contacto, cofetel, fecha_hora, user_insert, movil_fijo, status_stel, verificado, marcatel, fecha_actualiza, tel_confirmado, fech_confirmado)
    VALUES('001', /*numcte*/'${A}', /*telefono*/'${G}', 1, 'A', 1, '', 1, 1, 0, 'V', '2020-3-6 5:16:21.0', 'transBPI', '0', '', null, null, null, null, null);\n\n`
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
    VALUES('001', /*numcte*/'${A}', /*correo_elec*/'${H}', 1, 'C', 1, 1, '2020-3-6 5:49:59.0', '92599192', null, null, null, null);\n`
}


const info2 = `
-- Informacion de la cuenta de debito
-- Tablas involucradas
-- bdicheq:"informix".sc_maechq
-- bdicheq:"informix".sc_producto (Es tabla catalogo. Solo debe existir la relacion con la tabla. No es necesario generar insert)\n
`

const consulta8 = (A,J,K,L) => {
    return `INSERT INTO bdicheq:"informix".sc_maechq(empresa, /*CUENTA*/cuenta, sucursal, plaza, /*PRODUCTO*/producto, /*NUMERO CLIENTE*/num_cte, /*ESTATUS*/status_cta, motivo, ult_chq, colateral, fec_ult_mov, fec_cancelac, lim_chq_sbc, imp_chq_sbc, fech_alta_sbc, fech_venc_sbc, lim_chq_rem, imp_chq_rem, fech_alta_rem, fech_venc_rem, lim_sbg_ccc, imp_sbg_ccc, tipo_linea, fec_alta_ccc, fech_venc_ccc, imp_int_ccc, sdo_retenido, chq_exp_mes, chq_dev, monto_dev, chq_dev_obco, sdo_cong, num_cgos_mes, imp_cgos_mes, num_abonos_mes, imp_abonos_mes, sdo_actual, sdo_dia_ant, marca_ret, direcc_envio, com_pendiente, imp_chq_sbg, imp_int_sbg, fecha_proceso, cuenta_rel, saldo_sbc, fecultdep, fecultret, ultpagocap, ultpagoint, plazo, cobraisr, proced_aperturacta, proced_mantenercta, monto_mensual, depositos_cantidad, depositos_monto, retiros_cantidad, retiros_monto, cuenta_clabe) 
    VALUES('001', /*cuenta*/'${J}', '0557', '017', /*producto*/'${K}', /*num_cte*/'${A}', /*status_cta*/'${L}', '', 0, 'N', '2020-2-6', null, 0, 0, null, null, 0, 0, null, null, 0, 0, '0', null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '1', 0, 0, 0, 0, '2020-2-6', '', 0, '2020-2-6', null, '2020-2-6', '2020-2-6', 0, 'S', '01', '01', '01', '01', '01', '01', '01', '137730101006341445');\n`
}

const info3 = `
-- Informacion de la tarjeta de debito
-- Tablas involucradas
-- bdicheq:"informix".sc_tarjeta\n
`

const consulta9 = (A,J,K,M,O) => {
    return `INSERT INTO bdicheq:"informix".sc_tarjeta(empresa, /*CUENTA*/cuenta, secuencia, /*NUMERO TARJETA*/num_tarjeta, /*NUMERO CLIENTE*/numcte, /*PRODUCTO*/prodtarjeta, expiracion, tipo_tarjeta, nombre, /*ESTATUS TARJETA*/status_tar, limite_aut, disp_mes, motivo, tipo_asignacion, cobro_comision, gerente_autoriza, bandera_cobro, bandera_bonificacion, cobro_tarjeta, iva_cobrotar, fecha_insert) 
    VALUES('001', /*cuenta*/'${J}', 1, /*num_tarjeta*/'${O}', /*numcte*/'${A}', /*prodtarjeta*/'${K}', '2023-3-1', 'T', 'ALEXIS GUTIERREZ GUTIERREZ', /*status_tar*/'${M}', 0, 0, '01', 'R', 'N', '', '0', '0', 0, 0, '2020-2-6');\n`
}

const info4 = `
-- Informacion de la tarjeta
-- Tablas involucradas
-- intercard:"informix".tarjeta\n
`
const consulta10 = (A,K,N,O) => {
    return `INSERT INTO intercard:"informix".tarjeta(/*NUMERO TARJETA*/numtarjeta, /*ESTATUS TARJETA FISICA*/codstatustarjeta, /*PRODUCTO*/codproductotarjeta, /*NUMERO CLIENTE*/numcliente, titular, nombre, direccion, coldeleg, ciudad, estado, codpostal, telcasa, teloficina, fechaexp, sefabricaplastico, seimprimenip, acumdiarioretatmnac, acumdiarioretatmint, acummensretatmnac, acummensretatmint, acumdiariocompraposnac, acumdiariocompraposint, acummenscompraposnac, acummenscompraposint, acumcomconsatmnac, acumcomconsatmint, acumcomretatmnac, acumcomretatmint, acumcomcompraposnac, acumcomcompraposint, acumcomrevatmnac, acumcomrevatmint, acumcomrevposnac, acumcomrevposint, acumcomfzdaposnac, acumcomfzdaposint, contcomconsatmnac, contcomconsatmint, contcomretatmnac, contcomretatmint, contcomcompraposnac, contcomcompraposint, contcomrevatmnac, contcomrevatmint, contcomrevposnac, contcomrevposint, contcomfzdaposnac, contcomfzdaposint, conttranconsatmlibres, conttranretatmlibres, conttrancompraposlibres, contmaxtranconsatmdiarias, contmaxtranretatmdiarias, contmaxtrancompraposdiarias, contmaxtranconsatmmens, contmaxtranretatmmens, contmaxtrancompraposmens, numerolote, contmaxtranretatmnachd, contmaxtrancompraposnachd, contmaxtranretatminthd, contmaxtrancompraposinthd, usuarioultmodif, fechaultmodif, acumretatmnachd, acumretatminthd, acumcompraposnachd, acumcompraposinthd, numreporte, enrenovacion, fechaexprenovacion, numtarjetasustituta, acumdiarioretatmpropio, acummensretatmpropio, acumcomconsatmpropio, acumcomretatmpropio, acumcomrevatmpropio, contcomconsatmpropio, contcomretatmpropio, contcomrevatmpropio, conttranconsatmlibrespropio, conttranretatmlibrespropio, contmaxtranconsatmdiariopropio, contmaxtranretatmdiariaspropio, contmaxtranconsatmmenspropio, contmaxtranretatmmenspropio, contmaxtranretatmpropiohd, acumretatmpropiohd, nombrecorto, fechanacimiento, nombrepromotor, cobracomreexptrj, cobracomreimpnip, idpaq, codstatusasignada, fechaasignacion, acumdiariocashbacknac, acummenscashbacknac, acumdiariocashadvancenac, acummenscashadvancenac, conttrancashbacklibres, conttrancashadvancelibres, contmaxtrancashbackdiarias, contmaxtrancashadvancediarias, contmaxtrancashbackmens, contmaxtrancashadvancemens, soportatranatmcajeropropio, soportatranatmcajeroconvenio, soportetranatmcajerored, contnipinvalido, acumdiarioretatmconvenio, acummensualretatmconvenio, acumcomconsatmconvenio, acumcomretatmconvenio, acumcomrevatmconvenio, contcomconsatmconvenio, contcomretatmconvenio, contcomrevatmconvenio, conttranconsatmconveniolibres, conttranretatmconveniolibres, contmaxtranconsatmdconveniodiarias, contmaxtranretatmconveniodiarias, contmaxtranconsatmconveniomens, contmaxtranretatmconveniomens, soportatranatmcajerointernacional, limitemenscompraposnac, limitemenscompraposint, numeroguia, acumdiarioqps, acumdiariocat, acumdiariomotovoz, acumdiariomotoint, acummensualmotovoz, acummensualmotoint, conttransmotovozdiario, conttransmotointdiario, conttransmotovozmensual, conttransmotointmensual, contcvv2invalido, acumdiariotag, acummensualtag, conttransdiariotag, conttransmensualtag, conttrancambionipdiario, conttrandepositolibres, contmaxtrandepositodiarias, contmaxtrandepositomens, acumdiariodepositonac, acummensdepositonac)
  VALUES(/*numtarjeta*/'${O}', /*codstatustarjeta*/'${N}', /*codproductotarjeta*/'${K}', /*numcliente*/'${A}', 'T', 'ALEXIS GUTIERREZ GUTIERREZ', '', '', '', '', '', '', '', '2409', 'V', 'V', 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90203, NULL, NULL, NULL, NULL, '90016794', EXTEND(MDY(11,12,2019), YEAR to SECOND)+12 UNITS HOUR+47 UNITS MINUTE+32 UNITS SECOND, NULL, NULL, NULL, NULL, NULL, 'F', NULL, NULL, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '', EXTEND(MDY(7,22,1997), YEAR to SECOND)+0 UNITS HOUR+0 UNITS MINUTE+0 UNITS SECOND, '', 'F', 'F', NULL, 'SIA', EXTEND(MDY(11,12,2019), YEAR to SECOND)+12 UNITS HOUR+47 UNITS MINUTE+31 UNITS SECOND, 0.00, 0.00, 0.00, 0.00, 0, 0, 0, 0, 0, 0, 'V', 'F', 'V', 0, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'V', 0.0000, 0.0000, 40, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0.00, 0.00);\n`
}

const info5 = `
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
const consulta11 = (A,J,K,L) => {
    return `INSERT INTO bdicred:"informix".sd_maecred(empresa, /*CUENTA*/num_credito, /*PRODUCTO*/num_producto, ejecutivo, /*NUMERO CLIENTE*/numcte, divisa, sucursal, id_origen, origen, cod_tipo_linea, cod_linea, porc_rec_prop, /*ESTATUS*/status_cred, bandera_renovac, bandera_prorroga, periodo_plazo, plazo, fecha_apertura, fecha_vencim, period_pago_cap, period_pag_int, dias_trasp_cap, dias_trasp_int, tasa_fija_o_var, cod_tasa_base, factor_sobretasa, sobretasa, tasa_interes, cod_tasa_mora, sobretasa_mora, fact_sobret_mora, tasa_moratorios, fecha_pago_cap, fecha_pago_int, es_fisica, bandera_fi_fo, codigo_pro, superficie, actividad, cal_edos_fin, tipo_calculo, admite_tlp, rel_garcred, id_unidad_prod, num_aper_ant, rev_tasa_var_per, dia_para_revisar, cod_prod, bandera_ministra, num_fideicomiso, credito_externo, gracia_capital, diferimiento_int, fecha_fin_prorrateo, campo_trab1, campo_trab2, campo_trab3, campo_trab4, calificacion_riesgo, cod_agricola, tasa_base_piso, sobretasa_piso, factor_piso, tasa_piso, tasa_base_techo, sobretasa_techo, factor_techo, tasa_techo, cod_caract, cod_caract_2, cuenta_clabe)
    VALUES('001', /*num_credito*/'${J}', /*num_producto*/'${K}', '91033365', /*numcte*/'${A}', '01', '0204', '  ', '   ', '  ', '    ', 100.000000, /*status_cred*/'${L}', 'N', 'N', 'M', 0, EXTEND(MDY(7,2,2007), YEAR to SECOND), EXTEND(MDY(7,2,2008), YEAR to SECOND), '3', '2', 60, 60, ' ', 'TARJETA ', '+', 0.000000, 59.900000, 'TASAMORA', 0.000000, '+', 64.900000, NULL, NULL, 'S', '  ', '      ', 0.000, '   ', '  ', '  ', ' ', 0.00, NULL, '                    ', ' ', NULL, '  ', 'M', '                    ', '                    ', 0, 0, EXTEND(MDY(7,2,2007), YEAR to SECOND), 0.00, 0.00, '          ', '          ', 'A1', '     ', '        ', NULL, ' ', NULL, '        ', NULL, ' ', 3.000000, NULL, NULL, '137975600000017608');\n\n`
}

const consulta12 = (J) => {
    return `INSERT INTO bdicred:"informix".sd_maesdos(empresa, /*CUENTA*/num_credito, fecha_ult_mov, sdo_int_anticip, sdo_int_ant_dev, sdo_intereses, sdo_dia_ant_int, sdo_mes_ant_int, sdo_acum_mes_int, sdo_retenido, sdo_acum_cap_int, sdo_exig_int, sdo_no_exig, provision_normal, dias_acum_int, sdo_moratorio, sdo_dia_ant_mor, sdo_mes_ant_mor, sdo_contab_mora, dias_acum_mora, sdo_capital, sdo_cap_insoluto, sdo_dia_ant_cap, sdo_mes_ant_cap, sdo_acum_mes_cap, mto_capitalizado, mto_ministra_cap, cargos_dia_cap, abonos_dia_cap, cargos_mes_cap, abonos_mes_cap, dias_acum_cap, monto_vencido, mto_venc_trasp, monto_financiado, monto_reservado, sdo_acum_vencido, dias_acum_intper, sdo_global_int, sdo_acum_intper, monto_otorgado, provi_venc_normal, provi_venc_anticip, cap_tras_no_venci, mto_venc_int, mto_venc_tra_int, mto_finan_vdo, mto_reser_int, mto_fin_ven_trasp, mto_fin_vig_trasp, int_tra_no_exig, sdo_trab4) 
    VALUES('001', /*num_credito*/'${J}', '2020-1-1', 1.1, 0, 1.1, 0, 0, 1.1, 0, 0, 0, 98.32, 0, 1, 0, 0, 0, 0, 0, -1509.55, 7000.009, 606.58, 0, 606.58, 7356.53, 25891.25, 0, 0, 94276.81, 35656.78, 1, 0, 0, 320, 0, 0, 0, 7077.51, 1.1, 9000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 320);\n\n`
}

const consulta13 = (J) => {
    return `INSERT INTO bdicred:"informix".sd_maecredanexo(empresa, /*CUENTA*/num_credito, dia_corte, dias_gracia_mora, tp_dias_calc_mora, dias_fecha_max_pago, tp_dias_fecha_pago, cod_tasa_base_cte, factor_sobretasa_cte, sobretasa_cte, tasa_interes_cte, fecha_vencto, prox_fecha_pago, fecha_proceso, fecha_ult_pago)
    VALUES('001', /*num_credito*/'${J}', 20, 4, '1', 26, '1', 'TARJETA ', '+', 0.000000, NULL, EXTEND(MDY(12,20,2010), YEAR to SECOND), EXTEND(MDY(7,16,2011), YEAR to SECOND), EXTEND(MDY(6,30,2011), YEAR to SECOND), EXTEND(MDY(1,17,2011), YEAR to SECOND));\n\n`
}

const consulta14 = (J) => {
    return `INSERT INTO bdicred.sd_amortiza_credito(empresa, /*CUENTA*/num_credito, fecha_cuota, tipo_cuota, capital_mto_cuota, capital_debe, capital_pagado, capital_status, capital_status_ant, capital_fecha_pago, interes_debe, interes_pagado, interes_status, interes_status_ant, interes_fecha_pago, iva_debe, iva_pagado, iva_status, iva_status_ant, iva_fecha_pago, mora_provi_ordi, mora_provi_cope, mora_sdo_ordi, mora_sdo_ordi_pag, mora_sdo_cope, mora_sdo_cope_pag, mora_bonificado, mora_status, mora_iva_debe, mora_iva_pagado, mora_iva_status, mora_iva_fecha_pago, num_pago, campo_trabajo1, campo_trabajo2, campo_trabajo3, campo_trabajo4)
    VALUES('001', /*num_credito*/'${J}', EXTEND(MDY(5,20,2018), YEAR to SECOND), '3', 0.00, 0.00, 0.00, '5', '0', NULL, 0.00, 0.00, '1', '0                 ', '                  ', 0.00, 0.00, '1', '0', NULL, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, '1', 0.00, 0.00, '1', NULL, 5, 0.00, 0.00, '', '');\n\n`
}

const consulta15 = (J) => {
    return `INSERT INTO bdicred:"informix".sd_maesdoshist(fecha, empresa, /*CUENTA*/num_credito, fecha_ult_mov, sdo_int_anticip, sdo_int_ant_dev, sdo_intereses, sdo_dia_ant_int, sdo_mes_ant_int, sdo_acum_mes_int, sdo_retenido, sdo_acum_cap_int, sdo_exig_int, sdo_no_exig, provision_normal, dias_acum_int, sdo_moratorio, sdo_dia_ant_mor, sdo_mes_ant_mor, sdo_contab_mora, dias_acum_mora, sdo_capital, sdo_cap_insoluto, sdo_dia_ant_cap, sdo_mes_ant_cap, sdo_acum_mes_cap, mto_capitalizado, mto_ministra_cap, cargos_dia_cap, abonos_dia_cap, cargos_mes_cap, abonos_mes_cap, dias_acum_cap, monto_vencido, mto_venc_trasp, monto_financiado, monto_reservado, sdo_acum_vencido, dias_acum_intper, sdo_global_int, sdo_acum_intper, monto_otorgado, provi_venc_normal, provi_venc_anticip, cap_tras_no_venci, mto_venc_int, mto_venc_tra_int, mto_finan_vdo, mto_reser_int, mto_fin_ven_trasp, mto_fin_vig_trasp, int_tra_no_exig, sdo_trab4, tasa_interes)
    VALUES(EXTEND(MDY(11,18,2018), YEAR to SECOND), '001', /*num_credito*/'${J}', EXTEND(MDY(11,20,2018), YEAR to SECOND), 886.56, 0.00, 0.00, 858.18, 0.00, 886.56, 0.00, 0.00, 0.00, 886.56, 0.00, 31, 0.00, 0.00, 0.00, 2.79, 1, 16028.38, 17038.38, 16090.63, 0.00, 502644.91, 34804.15, -151506.99, 0.00, 0.00, 115975.45, 133741.22, 31, 1010.00, 0.00, 2620.00, 0.00, 0.00, 0, 12840.20, 886.56, 21600.00, 0.00, 0.00, 0.00, 0.00, 825.44, 0.00, 0.00, 1.00, 0.00, 0.00, 2620.00, NULL);\n\n`
}

const consulta16 = (J,K,O) => {
    return `INSERT INTO bdicred:"informix".sd_movdia(empresa, secuencia, fecha_mov, hora_mov, sucursal, /*CUENTA*/num_credito, plaza, transacc_suc, usuario, monto, codigo_fun, codigo_ref, divisa, reversado, folio_suc, /*PRODUCTO*/num_producto, /*NUMERO TARJETA*/nro_tarjeta, referencia, tipo_cambio, monto_dls, suc_origen, rfc_comer, referencia23, fecha_operacion)
    VALUES('001', 46009534, EXTEND(MDY(3,30,2009), YEAR to SECOND), EXTEND(MDY(3,1,1700), YEAR to SECOND)+10 UNITS HOUR+40 UNITS MINUTE+1 UNITS SECOND, '9290', /*num_credito*/'${J}', '900', '6857', 'c9258098', 10.00, '339', 17, '00', 'N', 'intercar2246050 ', /*num_producto*/'${K}', /*nro_tarjeta*/'${O}', 'intercar2246050  HSBC I96123            ', 0.000000, 0.00, NULL, '                ', '                       ', EXTEND(MDY(3,23,2017), YEAR to SECOND)+4 UNITS HOUR+10 UNITS MINUTE+5 UNITS SECOND);\n`
}

const info6 = `
-- Informacion de la tarjeta de credito
-- Tablas involucradas
-- bdicred:"informix".sd_tarjeta
-- intercard:"informix".tarjeta\n  
`

const consulta17 = (A,J,K,M,O) => {
    return `INSERT INTO bdicred:"informix".sd_tarjeta(empresa, /*CUENTA*/num_credito, secuencia, /*NUMERO TARJETA*/num_tarjeta, /*NUMERO CLIENTE*/numcte, /*PRODUCTO*/prodtarjeta, expiracion, tipo_tarjeta, nombre, /*ESTATUS TARJETA*/status_tar, limite_aut, disp_mes, motivo, tipo_asignacion, cobro_comision, gerente_autoriza, folio_canc) 
    VALUES('001', /*num_credito*/'${J}', 1, /*num_tarjeta*/'${O}', /*numcte*/'${A}', /*prodtarjeta*/'${K}', '2023-3-1', 'T', 'ALEXIS GUTIERREZ GUTIERREZ', /*status_tar*/'${M}', 3600, null, null, '', '', '', '');\n\n`
}

const consulta18 = (A,K,N,O) => {
    return `INSERT INTO intercard:"informix".tarjeta(/*NUMERO TARJETA*/numtarjeta, /*ESTATUS TARJETA FISICA*/codstatustarjeta, /*PRODUCTO*/codproductotarjeta, /*NUMERO CLIENTE*/numcliente, titular, nombre, direccion, coldeleg, ciudad, estado, codpostal, telcasa, teloficina, fechaexp, sefabricaplastico, seimprimenip, acumdiarioretatmnac, acumdiarioretatmint, acummensretatmnac, acummensretatmint, acumdiariocompraposnac, acumdiariocompraposint, acummenscompraposnac, acummenscompraposint, acumcomconsatmnac, acumcomconsatmint, acumcomretatmnac, acumcomretatmint, acumcomcompraposnac, acumcomcompraposint, acumcomrevatmnac, acumcomrevatmint, acumcomrevposnac, acumcomrevposint, acumcomfzdaposnac, acumcomfzdaposint, contcomconsatmnac, contcomconsatmint, contcomretatmnac, contcomretatmint, contcomcompraposnac, contcomcompraposint, contcomrevatmnac, contcomrevatmint, contcomrevposnac, contcomrevposint, contcomfzdaposnac, contcomfzdaposint, conttranconsatmlibres, conttranretatmlibres, conttrancompraposlibres, contmaxtranconsatmdiarias, contmaxtranretatmdiarias, contmaxtrancompraposdiarias, contmaxtranconsatmmens, contmaxtranretatmmens, contmaxtrancompraposmens, numerolote, contmaxtranretatmnachd, contmaxtrancompraposnachd, contmaxtranretatminthd, contmaxtrancompraposinthd, usuarioultmodif, fechaultmodif, acumretatmnachd, acumretatminthd, acumcompraposnachd, acumcompraposinthd, numreporte, enrenovacion, fechaexprenovacion, numtarjetasustituta, acumdiarioretatmpropio, acummensretatmpropio, acumcomconsatmpropio, acumcomretatmpropio, acumcomrevatmpropio, contcomconsatmpropio, contcomretatmpropio, contcomrevatmpropio, conttranconsatmlibrespropio, conttranretatmlibrespropio, contmaxtranconsatmdiariopropio, contmaxtranretatmdiariaspropio, contmaxtranconsatmmenspropio, contmaxtranretatmmenspropio, contmaxtranretatmpropiohd, acumretatmpropiohd, nombrecorto, fechanacimiento, nombrepromotor, cobracomreexptrj, cobracomreimpnip, idpaq, codstatusasignada, fechaasignacion, acumdiariocashbacknac, acummenscashbacknac, acumdiariocashadvancenac, acummenscashadvancenac, conttrancashbacklibres, conttrancashadvancelibres, contmaxtrancashbackdiarias, contmaxtrancashadvancediarias, contmaxtrancashbackmens, contmaxtrancashadvancemens, soportatranatmcajeropropio, soportatranatmcajeroconvenio, soportetranatmcajerored, contnipinvalido, acumdiarioretatmconvenio, acummensualretatmconvenio, acumcomconsatmconvenio, acumcomretatmconvenio, acumcomrevatmconvenio, contcomconsatmconvenio, contcomretatmconvenio, contcomrevatmconvenio, conttranconsatmconveniolibres, conttranretatmconveniolibres, contmaxtranconsatmdconveniodiarias, contmaxtranretatmconveniodiarias, contmaxtranconsatmconveniomens, contmaxtranretatmconveniomens, soportatranatmcajerointernacional, limitemenscompraposnac, limitemenscompraposint, numeroguia, acumdiarioqps, acumdiariocat, acumdiariomotovoz, acumdiariomotoint, acummensualmotovoz, acummensualmotoint, conttransmotovozdiario, conttransmotointdiario, conttransmotovozmensual, conttransmotointmensual, contcvv2invalido, acumdiariotag, acummensualtag, conttransdiariotag, conttransmensualtag, conttrancambionipdiario, conttrandepositolibres, contmaxtrandepositodiarias, contmaxtrandepositomens, acumdiariodepositonac, acummensdepositonac)
  VALUES(/*numtarjeta*/'${O}', /*codstatustarjeta*/'${N}', /*codproductotarjeta*/'${K}', /*numcliente*/'${A}', 'T', 'ALEXIS GUTIERREZ GUTIERREZ', '', '', '', '', '', '', '', '2409', 'V', 'V', 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90203, NULL, NULL, NULL, NULL, '90016794', EXTEND(MDY(11,12,2019), YEAR to SECOND)+12 UNITS HOUR+47 UNITS MINUTE+32 UNITS SECOND, NULL, NULL, NULL, NULL, NULL, 'F', NULL, NULL, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '', EXTEND(MDY(7,22,1997), YEAR to SECOND)+0 UNITS HOUR+0 UNITS MINUTE+0 UNITS SECOND, '', 'F', 'F', NULL, 'SIA', EXTEND(MDY(11,12,2019), YEAR to SECOND)+12 UNITS HOUR+47 UNITS MINUTE+31 UNITS SECOND, 0.00, 0.00, 0.00, 0.00, 0, 0, 0, 0, 0, 0, 'V', 'F', 'V', 0, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'V', 0.0000, 0.0000, 40, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0.0000, 0.0000, 0, 0, 0, 0, 0, 0, 0.00, 0.00);\n\n`
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
    info5,
    consulta11,
    consulta12,
    consulta13,
    consulta14,
    consulta15,
    consulta16,
    info6,
    consulta17,
    consulta18
}