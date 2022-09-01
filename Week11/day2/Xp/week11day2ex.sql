-- Exercise I: 
-- I:

SELECT name FROM language;

-- II:


SELECT film.title,film.description,language.name
FROM film
INNER JOIN language
ON film.language_id = language.language_id;

SELECT film.title,film.description,language.name
FROM film
FULL OUTER JOIN language
ON film.language_id = language.language_id;

SELECT film.title,film.description,language.name
FROM film
LEFT JOIN language
ON film.language_id = language.language_id;

SELECT film.title,film.description,language.name
FROM film
RIGHT JOIN language
ON film.language_id = language.language_id;

-- III:

CREATE TABLE new_film(
id SERIAL NOT NULL PRIMARY KEY,
name VARCHAR(200) NOT NULL
);

INSERT INTO new_film(name)
VALUES
('newMovie1'),
('newMovie2'),
('newMovie3')
;

-- IV:
CREATE TABLE customer_review(
review_id SERIAL NOT NULL PRIMARY KEY,
new_film_id int REFERENCES new_film(id),
language_id int REFERENCES language(language_id),
title VARCHAR(200),
score smallint,
review_text VARCHAR,
last_update date
);

-- V and VI:

-- couldn't do this part..

-- Exercise II:
-- I:
UPDATE film 
SET language_id = 2
WHERE film_id> 100;


--II:
--store_id,The FOREIGN KEY constraint prevents invalid data from being inserted into the foreign key column,
-- because it has to be one of the values contained in the parent table.

-- III:

--it will be okay to drop because it is not a
-- parent so it wont influence any other tables.
DROP TABLE customer_review;

-- IV:

select * from rental WHERE return_date IS NULL;

-- V: 

select film.rental_rate,film.title 
from rental
INNER JOIN inventory ON rental.inventory_id=inventory.inventory_id
INNER JOIN film ON inventory.film_id=film.film_id
WHERE rental.return_date IS NULL 
ORDER BY film.rental_rate DESC LIMIT 30


-- VI:

--1
SELECT film.title , film_actor.actor_id ,actor.actor_id FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id
INNER JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.description LIKE '%sumo%' AND actor.actor_id =120;

-- 2
SELECT title from film
INNER JOIN film_category ON film_category.film_id=film.film_id
WHERE film.rating='R' AND length<60 AND film_category.category_id=7

-- 3

	SELECT film.title FROM film 
	JOIN inventory ON film.film_id  = inventory.film_id
	JOIN rental ON rental.inventory_id = inventory.inventory_id
	JOIN customer ON rental.customer_id = customer.customer_id
	WHERE customer.first_name='Matthew' AND customer.last_name='Mahan'
	AND film.rental_rate > 4 
	AND rental.return_date BETWEEN '28-07-2005' AND '01-08-2005';

--4
	SELECT DISTINCT film.title, film.replacement_cost FROM film 
	JOIN inventory ON film.film_id  = inventory.film_id
	JOIN rental ON rental.inventory_id = inventory.inventory_id
	JOIN customer ON rental.customer_id = customer.customer_id
	WHERE customer.first_name='Matthew' AND customer.last_name='Mahan'
	AND film.title ILIKE '%boat%' OR film.description ILIKE '%boat%'
	order by film.replacement_cost DESC
--"looked like it was expensive" , expensive is objective so 
-- it can be any of these...
	
