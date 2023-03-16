
USE STACKOVERFLOW;
GO

CREATE OR ALTER PROCEDURE deleteQuestion
    @id VARCHAR ( 255 )
AS
BEGIN
    UPDATE questions SET is_deleted = 1 WHERE id = @id
    SELECT * FROM questions WHERE id = @id
END