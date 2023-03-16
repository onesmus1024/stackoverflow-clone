
USE STACKOVERFLOW;
GO

CREATE OR ALTER PROCEDURE insertOrUpdateCompany
    @id VARCHAR ( 255 ) ,
    @name VARCHAR ( 255 ) ,
    @logo_url VARCHAR ( 255 ) ,
    @tag_id VARCHAR ( 255 ) ,
    @description VARCHAR ( 255 ) ,
    @created_at DATETIME ,
    @updated_at DATETIME ,
    @is_deleted BIT
AS
BEGIN
    IF EXISTS (SELECT * FROM companies WHERE id = @id)
    BEGIN
        UPDATE companies
        SET name = @name,
            logo_url = @logo_url,
            tag_id = @tag_id,
            description = @description,
            created_at = @created_at,
            updated_at = @updated_at,
            is_deleted = @is_deleted
        WHERE id = @id;
        SELECT * FROM companies WHERE id = @id;
    END
    ELSE
    BEGIN
        INSERT INTO companies (id, name, logo_url, tag_id, description, created_at, updated_at, is_deleted)
        VALUES (@id, @name, @logo_url, @tag_id, @description, @created_at, @updated_at, @is_deleted);
        SELECT * FROM companies WHERE id = @id;
    END
END