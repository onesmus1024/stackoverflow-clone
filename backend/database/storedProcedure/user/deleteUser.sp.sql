
USE STACKOVERFLOW;
GO



CREATE OR ALTER PROCEDURE deleteUser
@id VARCHAR ( 255 )
AS
BEGIN
    -- UPDATE users SET is_deleted = 1 WHERE id = @id
    -- SELECT * FROM users WHERE id = @id
    SELECT * FROM users WHERE id = @id
    DELETE FROM users WHERE id = @id
   
END

-- delete user where email is jonathanndambuki16@gmail.com

DELETE FROM users WHERE email = 'jonathanndambuki16@gmail.com'