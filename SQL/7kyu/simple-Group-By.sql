-- DESCRIPTION:
-- For this challenge you need to create a simple GROUP BY statement, you want to group all the people by their age and count the people who have the same age.

--          people table schema
-- 1)id
-- 2)name
-- 3)age
--          select table schema
-- 1)age [group by]
-- 2)people_count (people count)


--SOLUTION
SELECT age,
    COUNT(*) AS people_count 
FROM people 
GROUP BY age;