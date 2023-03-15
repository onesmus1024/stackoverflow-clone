
USE STACKOVERFLOW;
GO

CREATE OR ALTER PROCEDURE insertOrUpdateTag
    @id VARCHAR ( 255 ),
    @tag VARCHAR ( 255 ),
    @description VARCHAR ( 255 ),
    @created_at DATETIME,
    @updated_at DATETIME,
    @is_deleted BIT
AS
BEGIN
    IF EXISTS (SELECT * FROM tags WHERE id = @id)
    BEGIN
        UPDATE tags SET tag = @tag, description = @description, created_at = @created_at, updated_at = @updated_at, is_deleted = @is_deleted WHERE id = @id
        SELECT * FROM tags WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO tags (id, tag, description, created_at, updated_at, is_deleted) VALUES (@id, @tag, @description, @created_at, @updated_at, @is_deleted)
        SELECT * FROM tags WHERE id = @id
    END
END