
USE STACKOVERFLOW;
GO
CREATE TABLE comments
(
    id VARCHAR ( 255 ) PRIMARY KEY ,
    comment VARCHAR ( 255 ) NOT NULL ,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    user_id VARCHAR ( 255 ) NOT NULL ,
    answer_id VARCHAR ( 255 ) NOT NULL ,
    is_deleted BIT DEFAULT  0 ,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (answer_id) REFERENCES answers(id),
    CONSTRAINT FK_comments_user_id_users_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,

);


