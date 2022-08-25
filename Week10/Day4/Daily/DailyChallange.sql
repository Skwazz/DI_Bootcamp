CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab

-- Q1 :
SELECT COUNT(*) 
    FROM firsttab AS ft WHERE ft.id NOT IN ( SELECT id FROM secondtab WHERE id IS NULL );

-- Q1 ANSWER: COUNT WITH 0 ( null = undefined)

-- Q2 :
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );
-- Q2 ANSWER: COUNT WITH 2

-- Q3:
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );
-- Q3 ANSWER : COUNT WITH 0
-- Q4
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL ); 
--Q4 ANSWER: COUNT WITH 2
