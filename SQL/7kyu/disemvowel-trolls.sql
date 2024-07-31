SELECT
    str,
    REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(
    str, 'a', ''), 'e', ''), 'i', ''), 'o', ''), 'u', ''),
    'A', ''), 'E', ''), 'I', ''), 'O', ''), 'U', '') AS res
FROM
    disemvowel;
