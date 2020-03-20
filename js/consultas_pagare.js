const info1 = `
-- CATEGORIA PRODUCTO = PA
-- Pagare
-- Tablas involucradas
-- bdinvers:"informix".sv_maeinv\n
`

const consulta1 = (A,J,L) => {
    return `INSERT INTO bdinvers:"informix".sv_maeinv(empresa, /*CUENTA*/cuenta, secuencia, cod_instrum, /*NUMERO CLIENTE*/num_cte, /*ESTATUS*/status_cta, motivo, fec_ult_mov, fec_cancelac, fec_reinversion, capital, sdo_retenido, sdo_cong, plazo, fecha_venc, opcion_retiro, intereses, isr, tasa, sobretasa, dia_sdo_pos, acum_sdo_pos, sdo_prom_mesant, sdo_mes_ant, sdo_dia_ant, sdo_ult_corte, adicionado, fecha_alta, fecha_val, modificado, fecha_mod, cta_cheques, sucursal, plaza, promotor, tipo_banca, reg_firmas, envio, direcc_envio, cobraisr, per_acred_int)
    VALUES('001', /*cuenta*/'${J}', 1, '3000', /*num_cte*/'${A}', /*status_cta*/'${L}', '  ', EXTEND(MDY(2,1,2020), YEAR to SECOND), NULL, EXTEND(MDY(2,1,2020), YEAR to SECOND), 2500.00, 0.00, 0.00, 30, EXTEND(MDY(3,2,2020), YEAR to SECOND), '0 ', 4.17, 2.97, 2.000000, 0.000000, 0, 0.00, 0.00, 3.22, 0.00, 3.22, '95032193', EXTEND(MDY(2,1,2020), YEAR to SECOND), EXTEND(MDY(2,24,2020), YEAR to SECOND), '        ', NULL, '18001305960         ', '0269', '049', '95032193', '001', '1', '1', 1, 'S', '0');\n\n`
}


module.exports = {
    info1,
    consulta1
}