﻿CREATE PROC FI_SP_IncBeneficiarioV2

    @CPF           VARCHAR (14),
    @NOME          VARCHAR (50) ,
    @IDCLIENT      BIGINT
AS
BEGIN
	INSERT INTO BENEFICIARIOS (CPF, NOME, IDCLIENT) 
	VALUES (@CPF, @NOME,@IDCLIENT)

	SELECT SCOPE_IDENTITY()
END