USE STACKOVERFLOW;
GO


CREATE OR ALTER PROCEDURE deleteCompany
    @id VARCHAR ( 255 )
AS
BEGIN
    UPDATE companies
    SET is_deleted = 1
    WHERE id = @id
END