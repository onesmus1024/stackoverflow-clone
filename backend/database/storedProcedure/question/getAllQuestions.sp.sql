
-- paginate questions

USE STACKOVERFLOW;
GO

CREATE OR ALTER PROCEDURE getAllQuestions
    @page INT,
    @pageSize INT
AS
BEGIN
    SELECT * FROM questions WHERE  is_deleted = 0
    ORDER BY created_at DESC
    OFFSET (@page - 1) * @pageSize ROWS
    FETCH NEXT @pageSize ROWS ONLY
END


