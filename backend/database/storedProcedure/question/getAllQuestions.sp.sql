

USE STACKOVERFLOW;
GO

CREATE OR ALTER PROCEDURE getAllQuestions
AS
BEGIN
    SELECT * FROM questions
END
