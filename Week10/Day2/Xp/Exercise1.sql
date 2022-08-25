-- insert INTO 
-- items (product_id,item_name,price)

-- values
-- (1,'Small Desk', 100),
-- (2,'Large Desk', 300),
-- (3,'Fan',80)


insert INTO
customers(customer_id,first_name,last_name)

VALUES
(1,'Greg','Jones'),
(2,'Sandra','Jones'),
(3,'Scott','Scott'),
(4,'Trevor','Green'),
(5,'Melanie ','Johnson')

select * from customers


SELECT * FROM items

SELECT * FROM items WHERE price>80

SELECT * FROM items WHERE price<300

SELECT * FROM customers WHERE last_name ='Smith'
-- outcome will be null

SELECT * FROM customers WHERE last_name ='Jones'
SELECT * FROM customers WHERE last_name !='Scott'

