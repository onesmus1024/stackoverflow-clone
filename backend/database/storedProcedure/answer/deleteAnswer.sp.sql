USE STACKOVERFLOW;
GO


CREATE OR ALTER PROCEDURE deleteAnswer
    @id VARCHAR ( 255 )
AS
BEGIN
    UPDATE answers SET is_deleted = 1 WHERE id = @id
END

