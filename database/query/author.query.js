exports.authorsWrittenIsbn = `
select
    a.author_id,
    a.fullname
from 
    authors a
join 
    writtens w 
on 
    a.author_id = w.author_id
where 
    w.isbn = ?;`;