

USE STACKOVERFLOW;
GO


CREATE OR ALTER PROCEDURE increaseQuestionViews
    @question_id VARCHAR(255)
AS
BEGIN
    UPDATE questions
    SET views = views + 1
    WHERE id = @question_id
    SELECT * FROM questions WHERE id = @question_id
END
