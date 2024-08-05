-- You will be given a table 'kata' with columns 'id', 'n', 'x', and 'y'. 
-- Return the 'id' and your result in a column named 'res' using a SELECT statement.
-- You DON'T need to create a function, that's for other languages.
SELECT
  id,
  CASE
    WHEN (n % x = 0) and (n % y = 0) THEN true
    ELSE false
  END AS res
FROM kata