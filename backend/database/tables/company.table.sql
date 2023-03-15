

USE STACKOVERFLOW;
GO

CREATE TABLE companies
(
    id VARCHAR ( 255 ) PRIMARY KEY ,
    name VARCHAR ( 255 ) NOT NULL ,
    logo_url VARCHAR ( 255 ) NOT NULL ,
    tag_id VARCHAR ( 255 ) NOT NULL ,
    description VARCHAR ( 255 ) NOT NULL ,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    updated_at DATETIME NOT NULL DEFAULT GETDATE(),
    is_deleted BIT DEFAULT  0 ,
    FOREIGN KEY (tag_id) REFERENCES tags(id),
    CONSTRAINT FK_companies_tag_id_tags_id FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

