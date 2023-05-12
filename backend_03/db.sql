CREATE DATABASE BackendIII;

CREATE TABLE users (
	id		SERIAL PRIMARY KEY,
	nome	VARCHAR(100) NOT NULL,
	usuario	VARCHAR(20) NOT NULL UNIQUE,
	email	VARCHAR(30) NOT NULL UNIQUE,
	passwd	VARCHAR(100) NOT NULL
);

INSERT INTO users (id, nome, usuario, email, passwd) VALUES (DEFAULT, 'João', 'jpfalcuci', 'jpfalcuci@email.com', 'hash_senha');
