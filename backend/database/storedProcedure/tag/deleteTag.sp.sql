USE STACKOVERFLOW;
GO


CREATE OR ALTER PROCEDURE deleteTag
    @id VARCHAR ( 255 )
AS
BEGIN
    UPDATE tags SET is_deleted = 1 WHERE id = @id
    SELECT * FROM tags WHERE id = @id
END