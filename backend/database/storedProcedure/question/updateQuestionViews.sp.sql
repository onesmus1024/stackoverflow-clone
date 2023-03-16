

USE  STACKOVERFLOW;
GO


CREATE OR ALTER PROCEDURE updateQuestionViews
    @id VARCHAR ( 255 )
AS
BEGIN
    UPDATE QUESTION
    SET views = views + 1
    WHERE id = @id;
    SELECT * FROM QUESTION WHERE id = @id;
END;

