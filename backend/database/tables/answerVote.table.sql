

USE STACKOVERFLOW;
GO

CREATE TABLE answer_votes
(
    id VARCHAR ( 255 ) PRIMARY KEY ,
    vote INT NOT NULL ,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    user_id VARCHAR ( 255 ) NOT NULL ,
    answer_id VARCHAR ( 255 ) NOT NULL ,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (answer_id) REFERENCES answers(id),
    CONSTRAINT FK_answer_votes_user_id_users_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,

);



USE STACKOVERFLOW;
GO

ALTER TABLE answer_votes
DROP CONSTRAINT FK_answer_votes_user_id_users_id;

ALTER TABLE answer_votes
ADD CONSTRAINT FK_answer_votes_user_id_users_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE NO ACTION;

ALTER TABLE answer_votes
ADD CONSTRAINT FK_answer_votes_answer_id_answers_id FOREIGN KEY (answer_id) REFERENCES answers(id) ON DELETE CASCADE;


