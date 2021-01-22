exports.book = `
select
    isbn,
    name,
    image_url,
    quantity AS available_qty,
    publisher_id,
    genre_id
from
    books
where 
    isbn = ?;`;