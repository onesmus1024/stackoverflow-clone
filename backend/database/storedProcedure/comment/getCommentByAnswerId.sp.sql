

USE STACKOVERFLOW;
GO

CREATE OR ALTER PROCEDURE getAnswerCommentByAnswerId
    @answer_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM comments WHERE answer_id = @answer_id;
END