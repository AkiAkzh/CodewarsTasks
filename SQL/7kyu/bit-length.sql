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
  8 * LENGTH(name) AS name,
  birthday,
  8 * LENGTH(race) AS race
FROM demographics;