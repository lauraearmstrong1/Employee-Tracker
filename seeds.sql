USE employees_db;

INSERT INTO department
  (name)
VALUES
('Sales'), -- id 1
('Engineering'), -- id 2
('Finance'), -- id 3
('Legal'); -- id 4

INSERT INTO role
  (title, salary, department_id)
VALUES
  ('Sales Lead', 100000, 1),
  ('Salesperson', 80000, 1),
  ('Lead Engineer', 150000, 2),
  ('Software Engineer', 120000, 2),
  ('Account Manager', 160000, 3),
  ('Accountant', 125000, 3),
  ('Legal Team Lead', 250000, 4),
  ('Lawyer', 190000, 4);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('John', 'Doe', 1, 3),
  ('Mike', 'Chan', 2, 1),
  ('Ashley', 'Rodriguez', 3, NULL),
  ('Kevin', 'Tupik', 4, 3),
  ('Malia', 'Brown', 6, NULL),
  ('Sarah', 'Lourd', 7, NULL),
  ('Tom', 'Allen', 8, 6),
  ('Tammer', 'Galal', 4, 4);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

-- -- INNER JOIN will only return all matching values from both tables
-- SELECT title, firstName, lastName
-- FROM books
-- INNER JOIN authors ON books.authorId = authors.id;

-- -- show ALL books, even if we don't know the author
-- -- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
-- SELECT title, firstName, lastName
-- FROM books
-- LEFT JOIN authors ON books.authorId = authors.id;

-- -- show ALL books, even if we don't know the author
-- -- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
-- SELECT title, firstName, lastName
-- FROM books
-- RIGHT JOIN authors ON books.authorId = authors.id;
