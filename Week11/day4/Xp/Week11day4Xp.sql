--Subqueries:
--I:

SELECT first_name, last_name FROM employees
WHERE salary > (SELECT salary FROM employees
 WHERE last_name ='Bull');

--II:

SELECT first_name, last_name FROM employees
WHERE manager_id IN
(SELECT manager_id FROM employees WHERE department_id IN(
SELECT department_id from departments
WHERE location_id IN (SELECT location_id FROM locations WHERE country_id = 'US')));

--III : 
SELECT first_name, last_name 
FROM employees
WHERE job_id IN 
(SELECT job_id FROM jobs WHERE job_title ILIKE '%manager%');

--IV :
SELECT first_name, last_name
FROM employees
WHERE salary>( SELECT AVG(salary) FROM employees )

--V :
SELECT first_name, last_name, salary 
FROM employees 
WHERE employees.salary = (SELECT min_salary
FROM jobs
WHERE employees.job_id = jobs.job_id);

--VI :
SELECT first_name, last_name 
FROM employees
WHERE job_id IN 
(SELECT job_id FROM jobs WHERE job_title not like '%supervisor%');

--VII :
SELECT first_name, last_name, salary , employee_id
FROM employees 
WHERE employees.salary > (SELECT min_salary/2 +max_salary/2
FROM jobs
WHERE employees.job_id = jobs.job_id);

-- VIII : Didn't understand that much ..


-- IX  : Again didn't understand and broke my head ove it.

-- X
SELECT department_id, department_name 
FROM departments
WHERE department_id NOT IN (select department_id from employees)

--Joins:
--I :
SELECT locations.location_id,locations.street_address,
locations.city,locations.state_province,
countries.country_name,departments.department_id
from locations
INNER JOIN countries
ON countries.country_id=locations.country_id
INNER JOIN departments 
ON departments.location_id = locations.location_id;

--II : 
SELECT employees.first_name,employees.last_name,
departments.department_id,departments.department_name
FROM employees 
INNER JOIN departments
ON employees.department_id = departments.department_id
ORDER BY department_id;

--III : 
SELECT employees.first_name,employees.last_name,
jobs.job_title,departments.department_name,departments.department_id
FROM employees 
INNER JOIN jobs 
ON jobs.job_id=employees.job_id
INNER JOIN departments 
ON departments.department_id=employees.department_id
WHERE departments.location_ID
IN (SELECT location_id FROM locations WHERE city LIKE 'London');

-- IV : 
SELECT T1.employee_id , T1.last_name AS "Employee",
T2.employee_id , T2.last_name AS "Manager"
FROM employees T1 JOIN employees T2
ON T1.manager_id= T2.employee_id;

-- V : 
SELECT employees.first_name,employees.last_name,employees.job_id, departments.department_id,departments.department_name
from employees
INNER JOIN departments ON departments.department_id=employees.department_id;

--VI : 
SELECT employees.employee_id, jobs.job_title
FROM employees
INNER JOIN jobs on jobs.job_id = employees.job_id
INNER JOIN departments on departments.department_id = employees.department_id
WHERE departments.department_id = 90

-- VII : 
SELECT departments.department_name, employees.first_name, locations.city, jobs.job_title
FROM departments
INNER JOIN employees on departments.department_id=employees.department_id
INNER JOIN locations on departments.location_id=locations.location_id
INNER JOIN jobs on jobs.job_id=employees.job_id
WHERE employees.job_id in (select job_id from jobs where job_title ilike '%manager%')

-- VIII: 
SELECT jobs.job_title, AVG(employees.salary) as average_salary
FROM jobs
INNER JOIN employees on jobs.job_id=employees.job_id
group by jobs.job_title;

-- IX : 
SELECT departments.department_name, employees.first_name,
employees.last_name,employees.hire_date, employees.salary
FROM departments
INNER JOIN employees ON employees.department_id = departments.department_id
INNER JOIN jobs ON jobs.job_id = employees.job_id
WHERE jobs.job_title ILIKE '%manager%'
AND employees.hire_date < now() - interval '15 years'

--String Function
-- I : 
UPDATE employees
SET phone_number=999
WHERE phone_number LIKE '%124%'

-- II : 
SELECT * FROM employees 
WHERE length(first_name)>8

-- III: 
SELECT CONCAT(LEFT(first_name,1),last_name,'@example.com')
as email from employees

-- IV: 
SELECT employee_id, substring(email,1,LENGTH(email)-3)
from employees

-- V : 
SELECT job_title,  SUBSTR(job_title,1, POSITION(' ' IN job_title)) 
FROM jobs;

-- VI : 
SELECT first_name "Name",
LENGTH(first_name) "Length"
FROM employees
WHERE first_name LIKE 'J%'
OR first_name LIKE 'M%'
OR first_name LIKE 'A%'
ORDER BY first_name ;

-- VII : 
SELECT first_name ,concat(salary,'$')  as SALARY
FROM employees