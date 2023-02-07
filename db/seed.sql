INSERT INTO department (name)
    VALUES
    ('Human Resources'),
    ('Security'),
    ('Engineering'),
    ('Sales');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    ('Eddard', 'Stark', '1', NULL),
    ('Robert', 'Baratheon', '1', NULL),    
    ('Cersei', 'Lannister', '1', NULL),
    ('Daenerys', 'Targaryen' '1', NULL),
    ('Jorah', 'Mormont', '3', '4'),
    ('Jon', 'Snow'),    
    ('Arya', 'Stark'),
    ('Tormund', 'Giantsbane', '4', '1'),
    ('Three-Eyed', 'Raven', '12', '4'),
    ('Petyr', 'Baelish', '1', '1'),    
    ('Tyrion', 'Lannister', '11', '4'),
    ('Khal', 'Drogo', '2', '1');

INSERT INTO role (id, title, salary, department_id)
    ('Recruiter', '75000', '1'),
    ('Resource Coordinator', '55000', '1'),    
    ('Front Desk', '45000', '2'),
    ('Cyber Security', '125000', '2'),
    ('Junior Developer', '75000', '3'),
    ('Senior Developer', '95000', '3'),    
    ('Staff Developer', '135000', '3'),
    ('Data Analyst', '85000', '4'),
    ('Copywriter', '90000', '4'),
    ('Pricing Adjuster', '60000', '4'),    
    ('Sales Lead', '95000', '4'),
    ('Marketing Lead', '95000', '4');