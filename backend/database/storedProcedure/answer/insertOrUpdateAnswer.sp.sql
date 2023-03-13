USE STACKOVERFLOW;
GO

CREATE OR ALTER PROCEDURE insertOrUpdateAnswer
    @id VARCHAR ( 255 ) ,
    @answer VARCHAR ( 255 ) ,
    @created_at TIMESTAMP ,
    @updated_at TIMESTAMP ,
    @user_id VARCHAR ( 255 ) ,
    @question_id VARCHAR ( 255 ) ,
    @code VARCHAR ( 255 ) ,
    @is_deleted BIT 

AS
BEGIN
    IF EXISTS (SELECT * FROM answers WHERE id = @id)
    BEGIN
        UPDATE answers SET
            answer = @answer,
            created_at = @created_at,
            updated_at = @updated_at,
            user_id = @user_id,
            question_id = @question_id,
            code = @code,
            is_deleted = @is_deleted
        WHERE id = @id

        SELECT * FROM answers WHERE id = @id    
    END
    ELSE
    BEGIN
        INSERT INTO answers (id, answer, created_at, updated_at, user_id, question_id, code, is_deleted)
        VALUES (@id, @answer, @created_at, @updated_at, @user_id, @question_id, @code, @is_deleted)
        SELECT * FROM answers WHERE id = @id
    END
END

