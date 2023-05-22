CREATE DATABASE bancoDEVII;

CREATE TABLE Users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);


-- ativar módulo uuid-ossp no docker

-- docker exec -it <ID CONTAINER> psql -U postgres -d bancodevii

SELECT * FROM pg_extension WHERE extname = 'uuid-ossp';

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- \q
