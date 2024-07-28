-- Given a demographics table in the following format:

-- ** demographics table schema **

-- id
-- name
-- birthday
-- race
-- you need to return the same table where all text fields (name & race) are changed to the bit length of the string.

--SOLUTION

SELECT 
  id,
  CHAR_LENGTH(name) AS name,
  birthday,
  CHAR_LENGTH(race) AS race
FROM demographics;