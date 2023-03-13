
USE STACKOVERFLOW;
GO

CREATE TABLE answers
(
    id VARCHAR ( 255 ) NOT NULL ,
    answer VARCHAR ( 255 ) NOT NULL ,
    created_at TIMESTAMP NOT NULL ,
    updated_at TIMESTAMP NOT NULL ,
    user_id VARCHAR ( 255 ) NOT NULL ,
    question_id VARCHAR ( 255 ) NOT NULL ,
    code VARCHAR ( 255 ) NOT NULL ,
    is_deleted BIT DEFAULT  0 ,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);