
-- question

--     id VARCHAR ( 255 ) PRIMARY KEY ,
--     question VARCHAR ( 255 ) NOT NULL ,
--     description VARCHAR ( 255 ) NOT NULL ,
--     code VARCHAR ( 255 ) NOT NULL ,
--     created_at DATETIME NOT NULL DEFAULT GETDATE(),
--     updated_at DATETIME NOT NULL DEFAULT GETDATE(),
--     user_id VARCHAR ( 255 ) NOT NULL ,
--     views INT NOT NULL ,
--     is_deleted BIT DEFAULT  0 ,
--     tag_id VARCHAR ( 255 ) NOT NULL DEFAULT  '53dc6a4e-2aa9-414a-b95e-a0e7d6156998',
--     FOREIGN KEY (user_id) REFERENCES users(id),
--     FOREIGN KEY (tag_id) REFERENCES tags(id),
--     CONSTRAINT FK_questions_user_id_users_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
--     CONSTRAINT FK_questions_tag_id_tags_id FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
-- );



-- paginate questions

USE STACKOVERFLOW;
GO

CREATE OR ALTER PROCEDURE getAllQuestions
    @page INT,
    @pageSize INT
AS
BEGIN
    SELECT * FROM questions
    ORDER BY created_at DESC
    OFFSET (@page - 1) * @pageSize ROWS
    FETCH NEXT @pageSize ROWS ONLY
END


