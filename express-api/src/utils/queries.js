export const createProductsTable = `
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  contact VARCHAR,
  email VARCHAR NOT NULL,
  fault VARCHAR,
  extra VARCHAR,
  date VARCHAR,
  country VARCHAR,
  dropoff VARCHAR,
  comments VARCHAR
  )
  `;

export const insertProducts = `
INSERT INTO products(name, contact, email, fault, extra, date, country, dropoff, comments)
VALUES ('testname', '123456', 'email@email.com', 'return', 'free', '2022-12-23T13:24', 'india', 'home', 'no comment');
`;

export const dropProductsTable = 'DROP TABLE products';

export const createSalesTable = `
DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS sales;
CREATE TABLE IF NOT EXISTS sales (
  id SERIAL PRIMARY KEY,
  prodname VARCHAR DEFAULT '',
  email VARCHAR NOT NULL,
  name VARCHAR DEFAULT '',
  address VARCHAR,
  pin INT,
  phone VARCHAR
  )
  `;

export const insertSales = `
INSERT INTO sales(name, contact, email, fault, extra, date, country, dropoff, comments)
VALUES ('testname', '123456', 'email@email.com', 'return', 'free', '2022-12-23T13:24', 'india', 'home', 'no comment');
`;

export const dropSalesTable = 'DROP TABLE sales';

export const createRewardsTable = `
DROP TABLE IF EXISTS rewards;
DROP TABLE IF EXISTS rewards;
CREATE TABLE IF NOT EXISTS rewards (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  points INT NOT NULL,
  email VARCHAR NOT NULL,
  fault VARCHAR,
  extra VARCHAR,
  date VARCHAR,
  expiry VARCHAR,
  dropoff VARCHAR,
  comments VARCHAR
  )
  `;

export const insertRewards = `
INSERT INTO rewards(name, contact, email, fault, extra, date, country, dropoff, comments)
VALUES ('testname', '123456', 'email@email.com', 'return', 'free', '2022-12-23T13:24', 'india', 'home', 'no comment');
`;

export const dropRewardsTable = 'DROP TABLE rewards';