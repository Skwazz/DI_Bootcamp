--  Basic Select Statement
-- Q1  Write a query to display the names (first_name, last_name) using an alias name “First Name”, “Last Name” from the employee table.:
select first_name AS "First Name",last_name AS "Last Name" from employees

-- Q2 Write a query to get unique departments ID from the employee table (ie. without duplicates). 
SELECT DISTINCT department_id   FROM employees 

-- Q3 Write a query to get the details of all employees from the employee table, do so in descending order by first name.
SELECT * FROM employees ORDER BY employees.first_name DESC

-- Q4 Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.
SELECT first_name, last_name, salary, salary/15 AS PF FROM employees;

-- Q5 Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.
select employee_id, first_name, last_name, salary from employees order by employees.salary ASC

-- Q6 Write a query to get the total sum of all salaries paid to the employees.
select sum(salary) from employees

-- Q7 Write a query to get the maximum and minimum salaries paid to the employees.
select max(salary) , min(salary)  from employees

-- Q8 Write a query to get the average salary paid to the employees.
select avg(salary) from employees

-- Q9  Write a query to get the number of employees working in the company.
select count(employees.employee_id) from employees

-- Q10 Write a query to get all the first names from the employees table in upper case.
select UPPER(first_name) from employees

-- Q11  Write a query to get the first three characters of each first name of all the employees in the employees table.
select substring(first_name, 1 , 3) from employees

-- Q12 Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.
SELECT CONCAT(first_name,' ', last_name) AS "FullName" FROM employees

-- Q13 Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.
SELECT first_name, last_name, LENGTH(CONCAT(first_name, last_name)) AS "FullNameLength" FROM employees

-- Q14 Write a query to check whether the first_name column of the employees table contains any numbers.
SELECT * FROM employees WHERE first_name LIKE '%[0-9]%';

-- Q15  Write a query to select the first ten records from a table.
SELECT * FROM employees ORDER BY employee_id ASC LIMIT 10;

-- Restricting And Sorting
-- Q1 : write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.
SELECT first_name ,last_name,salary FROM employees WHERE 10000<salary AND salary<15000;

-- Q2 : Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.
SELECT first_name, last_name, hire_date FROM employees WHERE (EXTRACT (YEAR FROM hire_date)= 1987);

-- Q3 : Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.
SELECT * FROM employees WHERE first_name LIKE '%c%' AND first_name LIKE '%e%'

-- Q4: Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.
SELECT employees.last_name ,employees.salary,jobs.job_title FROM jobs
INNER JOIN employees
ON jobs.job_id=employees.job_id
WHERE jobs.job_title <>'Programmer'
AND jobs.job_title <>'Shipping Clerk' ;

-- Q5 Write a query to display the last names of all employees whose last name contains exactly six characters.
SELECT last_name from employees 
WHERE LENGTH(last_name) = 3;

-- Q6 Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.
SELECT last_name FROM employees WHERE SUBSTRING(last_name,3,1)= 'e';

-- Q7 Write a query to display the jobs title appearing in the employees table.
SELECT job_title FROM jobs WHERE EXISTS (SELECT job_id FROM employees WHERE 
employees.job_id = jobs.job_id);

-- Q8 Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.
SELECT * FROM employees
WHERE last_name = 'Jones' 
OR last_name = 'King' 
OR last_name = 'Blake' 
OR last_name = 'Scott' 
OR last_name = 'Ford';