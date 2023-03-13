

USE  STACKOVERFLOW;
GO

CREATE TABLE tags
(
    id VARCHAR ( 255 ) NOT NULL ,
    tag VARCHAR ( 255 ) NOT NULL ,
    description VARCHAR ( 255 ) NOT NULL ,
    created_at TIMESTAMP NOT NULL ,
    updated_at TIMESTAMP NOT NULL ,
    is_deleted BIT DEFAULT  0
);