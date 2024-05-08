-- membuat database
CREATE DATABASE jwt;

-- membuat tabel
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

-- membuat fake user
INSERT INTO users (user_name, user_email, user_password)
 VALUES ('willy', 'willywang@gmail.com', 'a123');