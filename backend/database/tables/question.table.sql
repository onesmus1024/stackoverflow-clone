

USE STACKOVERFLOW;
GO

CREATE TABLE questions
(
    id VARCHAR ( 255 ) NOT NULL ,
    question VARCHAR ( 255 ) NOT NULL ,
    description VARCHAR ( 255 ) NOT NULL ,
    code VARCHAR ( 255 ) NOT NULL ,
    created_at TIMESTAMP NOT NULL ,
    updated_at TIMESTAMP NOT NULL ,
    user_id VARCHAR ( 255 ) NOT NULL ,
    views INT NOT NULL ,
    is_deleted BIT DEFAULT  0 ,
    FOREIGN KEY (user_id) REFERENCES users(id)
);