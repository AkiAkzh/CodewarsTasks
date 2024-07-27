-- DESCRIPTION:
-- Complete the method that takes a boolean value 
-- and return a "Yes" string for true, or a "No" string for false.

--SOLUTION

SELECT 
  bool,
  CASE
      WHEN bool THEN 'Yes'
      ELSE 'No'
  END AS res
FROM booltoword;