

USE STACKOVERFLOW;
GO


CREATE OR ALTER PROCEDURE insertOrUpdateAnswerVote
    @id VARCHAR ( 255 ),
    @vote INT,
    @created_at DATETIME,
    @updated_at DATETIME,
    @user_id VARCHAR ( 255 ),
    @answer_id VARCHAR ( 255 )
AS
BEGIN
    IF EXISTS (SELECT * FROM answer_votes WHERE id = @id)
    BEGIN
        UPDATE answer_votes SET
            vote = @vote,
            created_at = @created_at,
            updated_at = @updated_at,
            user_id = @user_id,
            answer_id = @answer_id
        WHERE id = @id
        SELECT * FROM answer_votes WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO answer_votes (id, vote, created_at, updated_at, user_id, answer_id)
        VALUES (@id, @vote, @created_at, @updated_at, @user_id, @answer_id)
        SELECT * FROM answer_votes WHERE id = @id   
    END
END

