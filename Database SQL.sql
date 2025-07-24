
-- Migration: Initial IPO table
CREATE TABLE ipo (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    lot_size INT NOT NULL,
    status VARCHAR(20) NOT NULL
);
