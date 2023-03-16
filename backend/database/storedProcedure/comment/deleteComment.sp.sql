USE STACKOVERFLOW;
GO

CREATE OR ALTER PROCEDURE deleteComment
    @id VARCHAR ( 255 )
AS
BEGIN
    UPDATE comments SET is_deleted = 1 WHERE id = @id
    SELECT * FROM comments WHERE id = @id
END