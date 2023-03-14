

USE STACKOVERFLOW;
GO

CREATE TABLE question_votes
(
    id VARCHAR ( 255 ) PRIMARY KEY ,
    vote INT NOT NULL ,
    created_at TIMESTAMP NOT NULL ,
    updated_at TIMESTAMP NOT NULL ,
    user_id VARCHAR ( 255 ) NOT NULL ,
    question_id VARCHAR ( 255 ) NOT NULL ,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);