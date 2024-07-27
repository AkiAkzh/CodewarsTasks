/*  SQL  */
SELECT id,name,TRIM(SPLIT_PART(characteristics, ',', 1)) AS characteristic FROM monsters order by id