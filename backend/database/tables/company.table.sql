

USE STACKOVERFLOW;
GO

CREATE TABLE companies
(
    id VARCHAR ( 255 ) NOT NULL ,
    name VARCHAR ( 255 ) NOT NULL ,
    logo_url VARCHAR ( 255 ) NOT NULL ,
    tag_id VARCHAR ( 255 ) NOT NULL ,
    description VARCHAR ( 255 ) NOT NULL ,
    created_at TIMESTAMP NOT NULL ,
    updated_at TIMESTAMP NOT NULL,
    is_deleted BIT DEFAULT  0 ,
    FOREIGN KEY (tag_id) REFERENCES tags(id)
);