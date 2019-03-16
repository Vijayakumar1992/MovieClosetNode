
DROP TABLE movie;
DROP TABLE genre;
DROP TABLE movie_type;

CREATE TABLE movie_type(
    movie_type_id SERIAL PRIMARY KEY,
    movie_type_name VARCHAR(50) NOT NULL
);

CREATE TABLE genre(
    genre_id        SERIAL PRIMARY KEY,
    genre_name      VARCHAR(100) NOT NULL
);

CREATE TABLE movie(
    movie_id        SERIAL PRIMARY KEY,
    movie_type_id   INT REFERENCES movie_type (movie_type_id), -- hollywood, bollywood
    movie_name      VARCHAR(50) NOT NULL,
    movie_watched   BOOLEAN NOT NULL,
    genre_id        INT REFERENCES genre (genre_id)    
);

INSERT INTO movie_type VALUES
(DEFAULT, 'Hollywood'),
(DEFAULT, 'Bollywood'),
(DEFAULT, 'Kollywood');

INSERT INTO genre VALUES
(DEFAULT, 'Action'),
(DEFAULT, 'Comedy'),
(DEFAULT, 'Romantic'),
(DEFAULT, 'Thriller'),
(DEFAULT, 'Horror');    

--('Coco', 'Tiger Hunter', 'The Meg', 'Nanban', 'Sivaji', 'Kaththi');
INSERT INTO movie VALUES 
(default, 1 , 'Coco', 'yes', 1),
(default, 2 , 'Dangal', 'no', 2),
(default, 3 , 'Nanban', 'no', 2);

