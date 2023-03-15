
USE STACKOVERFLOW;
GO



CREATE OR ALTER PROCEDURE insertOrUpdateQuestion
    @id VARCHAR ( 255 ),
    @question VARCHAR ( 255 ),
    @description VARCHAR ( 255 ),
    @code VARCHAR ( 255 ),
    @created_at DATETIME,
    @updated_at DATETIME,
    @user_id VARCHAR ( 255 ),
    @views INT,
    @is_deleted BIT
AS
BEGIN
    IF EXISTS (SELECT * FROM questions WHERE id = @id)
    BEGIN
        UPDATE questions SET question = @question, description = @description, code = @code, created_at = @created_at, updated_at = @updated_at, user_id = @user_id, views = @views, is_deleted = @is_deleted WHERE id = @id
        SELECT * FROM questions WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO questions (id, question, description, code, created_at, updated_at, user_id, views, is_deleted) VALUES (@id, @question, @description, @code, @created_at, @updated_at, @user_id, @views, @is_deleted)
        SELECT * FROM questions WHERE id = @id
    END
END