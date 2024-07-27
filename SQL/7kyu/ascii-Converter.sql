-- DESCRIPTION:
-- Given a demographics table in the following format:

--          ** demographics table schema **
-- id
-- name
-- birthday
-- race

-- you need to return the same table where all text fields (name & race) are changed to the ascii code of their first byte.

-- e.g. Verlie = 86 Warren = 87 Horace = 72 Tracy = 84

--SOLUTION
SELECT 
    id,
    ASCII(SUBSTRING(name,1,1)) AS name,
    birthday, ASCII(SUBSTRING(race,1,1)) AS race 
FROM demographics;