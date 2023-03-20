

USE STACKOVERFLOW;
GO

CREATE OR ALTER PROCEDURE getVotesByQuestionId
    @question_id VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM question_votes WHERE question_id = @question_id
END