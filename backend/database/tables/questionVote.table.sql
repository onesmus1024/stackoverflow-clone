

USE STACKOVERFLOW;
GO

CREATE TABLE question_votes
(
    id VARCHAR ( 255 ) PRIMARY KEY ,
    vote INT NOT NULL ,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    user_id VARCHAR ( 255 ) NOT NULL ,
    question_id VARCHAR ( 255 ) NOT NULL ,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id),
    CONSTRAINT FK_question_votes_user_id_users_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,

);



USE STACKOVERFLOW;
GO

ALTER TABLE question_votes
DROP CONSTRAINT FK_question_votes_user_id_users_id;

ALTER TABLE question_votes
ADD CONSTRAINT FK_question_votes_user_id_users_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE NO ACTION;


ALTER TABLE question_votes
ADD CONSTRAINT FK_question_votes_question_id_questions_id FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE;

