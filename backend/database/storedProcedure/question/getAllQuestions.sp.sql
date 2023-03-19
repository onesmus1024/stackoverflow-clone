
-- pagination for questions table 

USE STACKOVERFLOW;
GO

CREATE OR ALTER PROCEDURE getAllQuestions
    @page INT,
    @pageSize INT
AS
BEGIN
    SELECT * FROM questions
    ORDER BY id
    OFFSET (@page - 1) * @pageSize ROWS
    FETCH NEXT @pageSize ROWS ONLY
END

