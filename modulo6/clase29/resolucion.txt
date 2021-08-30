-- Ejercicios resueltos M06C02
-- Manipulación y consulta de datos

-- Micro desafío - Paso 1

-- 1.- Mostrar todos los registros de la tabla de movies.
SELECT * FROM movies;
-- 2.- Mostrar el nombre, apellido y rating de todos los actores.
SELECT first_name, last_name, rating FROM actors;  
-- Mostrar el título de todas las series, tomar en cuenta que 
-- al ejecutar la consulta el nombre del campo esté en español.
SELECT title AS 'Titulo' FROM series;

-- Micro desafío - Paso 2

-- 1.- Mostrar el nombre y apellido de los actores cuyo rating 
-- sea mayor a 7.5.
SELECT first_name, last_name FROM actors WHERE rating > 7.5;
-- 2.- Mostrar el título de las películas, el rating y los premios 
-- de las películas con un rating mayor a 7.5 y con más de dos premios.
SELECT title, rating, awards FROM movies 
	WHERE rating > 7.5 AND  awards > 2;
-- 3. Mostrar el título de las películas y el rating ordenadas por rating
-- en forma ascendente.
SELECT title,rating FROM movies ORDER BY rating ASC;  

-- Micro desafío - Paso 3

-- 1.- Mostrar los títulos de las primeras tres películas en la base de datos.
SELECT title FROM movies LIMIT 3; 
-- 2.- Mostrar el top 5 de las películas con mayor rating. 
SELECT * FROM movies ORDER BY rating DESC LIMIT 5;
-- 3.- Mostrar las top 5 a 10 de las películas con mayor rating.
SELECT * FROM movies ORDER BY rating DESC LIMIT 5 OFFSET 5;
-- 4.- Listar los primeros 10 actores (sería la página 1), 
SELECT * FROM actors LIMIT 10;
-- 4. (a) - Luego usar offset para traer la página 3
SELECT * FROM actors LIMIT 10 OFFSET 30;

-- Micro desafío - Paso 4

-- 1.- Mostrar el título y rating de todas las películas cuyo título sea de Harry Potter.
SELECT title, rating FROM movies WHERE title LIKE '%Harry Potter%';
-- 2.- Mostrar a todos los actores cuyos nombres empiecen con Sam.
SELECT * FROM actors WHERE first_name LIKE 'Sam%';
-- Mostrar el título y fecha de creación de las películas que salieron entre el 2004 y 2008.
SELECT title, release_date FROM movies WHERE YEAR(release_date) BETWEEN 2004  AND 2008;