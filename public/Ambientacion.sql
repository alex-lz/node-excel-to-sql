
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
INSERT INTO bdinteg:"informix".si_cliente(empresa, /*NUMERO CLIENTE*/numcte, status_cte, sucursal, ejecutivo, tpo_persona, tipo_cliente, /*APELLIDO PATERNO*/apell_paterno, /*APELLIDO MATERNO*/apell_materno, /*NOMBRE 1*/nombre1, /*NOMBRE 2*/nombre2, razon_social, rfc, sector, segmento, actividad_princ, grupo, subgrupo, residencia, fecha_alta, apell_casada, distrito, numcte_ref, string1, string2, numeric1, numeric2, money1, date1, puesto_ppes, familiar_ppes, actividad_esp, ejecut_autoriza, user_insert, fecha_insert, rfc_alterno, tpo_biometria, cliente_pros, envio_movtos)
    VALUES('001', /*numcte*/'102000001', 'AL', '0002', '92129501', '01', '1', /*apell_paterno*/'GUTIERREZ', /*apell_materno*/'GUTIERREZ', /*nombre1*/'ALEXIS', /*nombre2*/'', '', 'RUME8612165S5', '32', '000', '', '000', '000', '1', '2020-2-6', '', '01', '140526277', '', '03', 0, 0, 0, null, '', '', '0000000', '93416792', '93416792', '2010-2-6', null, '0', null, null)

INSERT INTO bdinteg:"informix".si_telefonos_actual(empresa, /*NUMERO CLIENTE*/numcte, /*TELEFONO*/telefono, tipo_tel, status_tel, secuencia, extension, carrier, canal, contacto, cofetel, fecha_hora, user_insert, movil_fijo, status_stel, tel_confirmado, fech_confirmado)
    VALUES('001', /*numcte*/'102000001', /*telefono*/'5526600766', 1, 'A', 1, '', 1, 1, 0, 'V', '2020-3-6 5:16:21.0', '93825978', '0', '', null, null)

INSERT INTO bdinteg:"informix".si_telefonos(empresa, /*NUMERO CLIENTE*/numcte, /*TELEFONO*/telefono, tipo_tel, status_tel, secuencia, extension, carrier, canal, contacto, cofetel, fecha_hora, user_insert, movil_fijo, status_stel, verificado, marcatel, fecha_actualiza, tel_confirmado, fech_confirmado)
    VALUES('001', /*numcte*/'102000001', /*telefono*/'5526600766', 1, 'A', 1, '', 1, 1, 0, 'V', '2020-3-6 5:16:21.0', 'transBPI', '0', '', null, null, null, null, null)

INSERT INTO bdinteg:"informix".si_ctepf(empresa, /*NUMERO CLIENTE*/numcte, /*FECHA NACIMIENTO*/fecha_nac, lugar_nac, nacionalidad, no_fm3, estado_civil, regim_matrimonio, profesion, sexo, curp, codidentifi, numidentifi, no_imss, dependientes, tutor, nom_conyuge, seguro_defunc, escolaridad, habita_en, anios_habita, nombre_prop, imp_hipo_renta, actividadogiro, numeroife, numerotutor, numeroconyuge, string1, string2, numeric1, numeric2, money1, date1, user_insert, fecha_insert, sms_cel, hora_insert, id_pais)
    VALUES('001', /*numcte*/'102000001', /*fecha_nac*/'Fri Jul 12 1985 00:00:00 GMT-0600 (GMT-07:00)', '', '001', 'S', '', null, 'M', '', 'A', '', '1181079488993', '', 0, '', '', '0', '', 'P', 0, '', 0, null, null, null, null, null, null, 0, 0, 0, null, 'interact', '2020-2-6', null, '2020-3-6 5:31:54.0', null)

INSERT INTO bdinteg:"informix".si_direcciones_actual(/*NUMERO CLIENTE*/numcte, secuencia, tipo_dir, calle, colonia, entre_calles, pais, estado, ciudad, municipio, cod_postal, apart_postal, estado_inegi, municipio_inegi, localidad_inegi, numerociudad, numeroextcalle, numerointcalle, departamento, numerocalle, numerocolonia, puntocardinal, unidadhabitac, manzana, otros, andador, etapa, lote, edificio, entrada, observaciones, user_insert, fecha_insert, ind_cofeteltel1, ind_cofeteltel2, ind_cofeteltel3) 
    VALUES(/*numcte*/'102000001', 1, '1', '', '', '', '001', '01', '001', '0000', '00000', '', '', '', '', 0, '', '', '', 0, 0, '', '', 0, 0, 0, 0, 0, 0, 0, '', '93089741', '2020-2-6', 'F', 'F', 'F')

INSERT INTO bdinteg:"informix".si_direcciones(/*NUMERO CLIENTE*/numcte, secuencia, tipo_dir, calle, colonia, entre_calles, pais, estado, ciudad, municipio, cod_postal, apart_postal, estado_inegi, municipio_inegi, localidad_inegi, numerociudad, numeroextcalle, numerointcalle, departamento, numerocalle, numerocolonia, puntocardinal, unidadhabitac, manzana, otros, andador, etapa, lote, edificio, entrada, observaciones, user_insert, fecha_insert, ind_cofeteltel1, ind_cofeteltel2, ind_cofeteltel3) 
    VALUES(/*numcte*/'102000001', 1, '1', '', '', '', '001', '01', '001', '0000', '00000', '', '', '', '', 0, '', '', '', 0, 0, '', '', 0, 0, 0, 0, 0, 0, 0, '', '93089741', '2020-2-6', 'F', 'F', 'F')

INSERT INTO bdinteg:"informix".si_correos(empresa, /*NUMERO CLIENTE*/numcte, /*EMAIL*/correo_elec, tipo_correo, status_correo, secuencia, canal, fecha_hora, user_insert, valida_correo, valido, fecha_valida, correo_elec_alt) 
    VALUES('001', /*numcte*/'102000001', /*correo_elec*/'AlexisCD43@mailinator.com', 1, 'C', 1, 1, '2020-3-6 5:49:59.0', '92599192', null, null, null, null)

