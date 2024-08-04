SELECT
  number,
  CASE
    WHEN number % 2 != 0 THEN number * 9
    ELSE number * 8
  END AS res
FROM multiplication;