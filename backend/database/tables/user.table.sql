

CREATE DATABASE  STACKOVERFLOW;


USE  STACKOVERFLOW;

CREATE TABLE users
(
    id VARCHAR ( 255 ) NOT NULL ,
    name VARCHAR ( 255 ) NOT NULL ,
    email VARCHAR ( 255 ) NOT NULL ,
    password VARCHAR ( 255 ) NOT NULL ,
    created_at TIMESTAMP NOT NULL ,
    updated_at TIMESTAMP NOT NULL ,
    is_sent BIT DEFAULT  0 ,
    is_admin BIT DEFAULT  0,
    is_deleted BIT DEFAULT  0
    
);