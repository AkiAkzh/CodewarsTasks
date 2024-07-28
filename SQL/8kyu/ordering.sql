-- Your task is to sort the information in the provided table 'companies' by number of employees (high to low). Returned table should be in the same format as provided:

-- companies table schema

-- id
-- ceo
-- motto
-- employees


-- SOLUTION

SELECT 
  id,
  ceo,
  motto,
  employees
FROM companies
order by employees desc;