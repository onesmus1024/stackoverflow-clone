

USE STACKOVERFLOW;
GO

CREATE TABLE answer_votes
(
    id VARCHAR ( 255 ) NOT NULL ,
    vote INT NOT NULL ,
    created_at TIMESTAMP NOT NULL ,
    updated_at TIMESTAMP NOT NULL ,
    user_id VARCHAR ( 255 ) NOT NULL ,
    answer_id VARCHAR ( 255 ) NOT NULL ,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (answer_id) REFERENCES answers(id)
);