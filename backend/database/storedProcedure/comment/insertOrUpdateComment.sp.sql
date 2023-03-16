
USE STACKOVERFLOW;
GO

CREATE OR ALTER PROCEDURE insertOrUpdateComment
    @id VARCHAR ( 255 ),
    @comment VARCHAR ( 255 ),
    @created_at DATETIME,
    @updated_at DATETIME,
    @user_id VARCHAR ( 255 ),
    @answer_id VARCHAR ( 255 ),
    @is_deleted BIT
AS
BEGIN
    IF EXISTS (SELECT * FROM comments WHERE id = @id)
    BEGIN
        UPDATE comments SET
            comment = @comment,
            created_at = @created_at,
            updated_at = @updated_at,
            user_id = @user_id,
            answer_id = @answer_id,
            is_deleted = @is_deleted
        WHERE id = @id
        SELECT * FROM comments WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO comments (id, comment, created_at, updated_at, user_id, answer_id, is_deleted)
        VALUES (@id, @comment, @created_at, @updated_at, @user_id, @answer_id, @is_deleted)
        SELECT * FROM comments WHERE id = @id
    END
END