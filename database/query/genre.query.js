exports.genres = `
SELECT
    g.genre_id,
    g.name,
    (
        SELECT
            COUNT(*)
        FROM
            books b
        WHERE
            b.genre_id = g.genre_id
    ) AS bookcount
FROM
    genres g
ORDER BY
    name ASC;   `;

exports.genreById = `SELECT genre_id, name FROM genres WHERE genre_id = ?;`;