
USE STACKOVERFLOW;
GO

CREATE OR ALTER PROCEDURE insertOrUpdateQuestionVote
    @id VARCHAR ( 255 ),
    @vote INT,
    @created_at DATETIME,
    @updated_at DATETIME,
    @user_id VARCHAR ( 255 ),
    @question_id VARCHAR ( 255 )
AS
BEGIN
    IF EXISTS (SELECT * FROM question_votes WHERE id = @id)
    BEGIN
        UPDATE question_votes SET vote = @vote, updated_at = @updated_at WHERE id = @id
        SELECT * FROM question_votes WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO question_votes (id, vote, created_at, updated_at, user_id, question_id) VALUES (@id, @vote, @created_at, @updated_at, @user_id, @question_id)
        SELECT * FROM question_votes WHERE id = @id
    END
END