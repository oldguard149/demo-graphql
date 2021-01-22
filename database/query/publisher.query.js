exports.publishers = `
SELECT
    p.name,
    p.publisher_id,
    (
        SELECT
            COUNT(*)
        FROM
            books b
        WHERE
            b.publisher_id = p.publisher_id
    ) AS bookcount
FROM
    publishers p
ORDER BY
    publisher_id ASC
LIMIT
    ?, ?;`;

exports.publisherById = `SELECT * FROM publishers WHERE publisher_id = ?;`;
