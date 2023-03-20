

USE STACKOVERFLOW;
GO



CREATE OR ALTER PROCEDURE getAnswersByQuestionId
    @question_id VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM answers WHERE question_id = @question_id
END