-- Part I:
-- I:
CREATE TABLE customer(
id SERIAL primary key,
first_name VARCHAR(30),
last_name VARCHAR(30) NOT NULL
);

CREATE TABLE customer_profile(
id SERIAL,
isLoggedIn BOOLEAN DEFAULT false,
customer_id int REFERENCES customer(id));

-- II:

INSERT INTO customer (first_name,last_name)
VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- III:

INSERT INTO customer_profile(isLoggedIn,customer_id)
VALUES(TRUE,1);
INSERT INTO customer_profile(isLoggedIn,customer_id)
VALUES(FALSE,2);  

-- IV:

SELECT first_name from customer 
inner join customer_profile on customer_profile.customer_id = customer.id
where customer_profile.isloggedin=true

SELECT customer.first_name ,customer_profile.isLoggedIn from customer 
LEFT JOIN customer_profile ON customer.id= customer_profile.customer_id

SELECT COUNT(*) FROM customer_profile WHERE isloggedin = false

-- Part II:
-- I:
CREATE TABLE book 
(book_id SERIAL PRIMARY KEY, title varchar(250) NOT NULL, author varchar(250) NOT NULL);

-- II:
INSERT INTO book (title,author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

-- III:

CREATE TABLE student (student_id SERIAL PRIMARY KEY, name varchar(250) NOT NULL UNIQUE, age smallint);

-- IV:
INSERT INTO student (name, age)
VALUES 
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- V:
create table library (book_fk_id integer REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
student_fk_id integer REFERENCES student (student_id)ON DELETE CASCADE ON UPDATE CASCADE,
borrowstudent_fk_ided_date date);

-- VI:
INSERT INTO library(student_fk_id,book_fk_id,borrowstudent_fk_ided_date)
VALUES
((SELECT student_id FROM student WHERE NAME='John')
 ,(SELECT book_id FROM book where title='Alice In Wonderland'), '2022-02-15'),
 ((SELECT student_id FROM student WHERE NAME='Bob')
 ,(SELECT book_id FROM book where title='To kill a mockingbird'), '2021-03-03'),
 ((SELECT student_id FROM student WHERE NAME='Lera')
 ,(SELECT book_id FROM book where title='Alice In Wonderland'), '2021-05-23'),
 ((SELECT student_id FROM student WHERE NAME='Bob')
 ,(SELECT book_id FROM book where title='Harry Potter'), '2021-08-12')
 
--  VII:
	SELECT * FROM library;
	
	SELECT student.name ,book.title from student
	JOIN library ON student.student_id = library.student_fk_id
	JOIN book ON book.book_id = library.book_fk_id

SELECT AVG(student.age) from student, library,book
	WHERE library.student_fk_id=student.student_id
	AND library.book_fk_id = 1
	
	DELETE FROM student
	WHERE student_id =1
	
	--student is deleted from library



