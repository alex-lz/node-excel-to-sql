const info1 = `
-- CATEGORIA PRODUCTO = IN
-- Inversion
-- Tablas involucradas
-- bdicheq:"informix".sc_maechq\n
`

const consulta1 = (A,J,K,L) => {
    return `INSERT INTO bdicheq:"informix".sc_maechq(empresa, /*CUENTA*/cuenta, sucursal, plaza, /*PRODUCTO*/producto, /*NUMERO CLIENTE*/num_cte, /*ESTATUS*/status_cta, motivo, ult_chq, colateral, fec_ult_mov, fec_cancelac, lim_chq_sbc, imp_chq_sbc, fech_alta_sbc, fech_venc_sbc, lim_chq_rem, imp_chq_rem, fech_alta_rem, fech_venc_rem, lim_sbg_ccc, imp_sbg_ccc, tipo_linea, fec_alta_ccc, fech_venc_ccc, imp_int_ccc, sdo_retenido, chq_exp_mes, chq_dev, monto_dev, chq_dev_obco, sdo_cong, num_cgos_mes, imp_cgos_mes, num_abonos_mes, imp_abonos_mes, sdo_actual, sdo_dia_ant, marca_ret, direcc_envio, com_pendiente, imp_chq_sbg, imp_int_sbg, fecha_proceso, cuenta_rel, saldo_sbc, fecultdep, fecultret, ultpagocap, ultpagoint, plazo, cobraisr, proced_aperturacta, proced_mantenercta, monto_mensual, depositos_cantidad, depositos_monto, retiros_cantidad, retiros_monto, cuenta_clabe) 
    VALUES('001', /*cuenta*/'${J}', '0557', '017', /*producto*/'${K}', /*num_cte*/'${A}', /*status_cta*/'${L}', '', 0, 'N', '2020-2-6', null, 0, 0, null, null, 0, 0, null, null, 0, 0, '0', null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '1', 0, 0, 0, 0, '2020-2-6', '', 0, '2020-2-6', null, '2020-2-6', '2020-2-6', 0, 'S', '01', '01', '01', '01', '01', '01', '01', '137730101006341445');\n\n`
}


module.exports = {
    info1,
    consulta1
}