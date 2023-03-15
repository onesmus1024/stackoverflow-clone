
USE STACKOVERFLOW;
GO

CREATE TABLE answers
(
    id VARCHAR ( 255 ) PRIMARY KEY ,
    answer VARCHAR ( 255 ) NOT NULL ,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    user_id VARCHAR ( 255 ) NOT NULL ,
    question_id VARCHAR ( 255 ) NOT NULL ,
    code VARCHAR ( 255 ) NOT NULL ,
    is_deleted BIT DEFAULT  0 ,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id),
    CONSTRAINT FK_answers_user_id_users_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT FK_answers_question_id_questions_id FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);