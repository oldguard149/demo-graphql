const pool = require('./pool');

function query(query, parameters = []) {
    return new Promise(async function (resolve, reject) {
        try {
            const [result, field] = await pool.query(query, parameters);
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })
}

function findOne(query, parameters=[]) {
    return new Promise(async (resolve, reject) => {
        try {
            const [result, _] = await pool.query(query, parameters);
            resolve(result[0]);
        } catch (error) {
            reject(error);
        }
    })
}

function countData(query, parameters=[]) {
    return new Promise(async (resolve, reject) => {
        try {
            const [result, field] = await pool.query(query, parameters);
            resolve(result[0].count);
        } catch (error) {
            reject(error)
        }
    })
}

function findOneUsingTransaction(connection, query, parameters=[]) {
    return new Promise(async (resolve, reject) => {
        try {
            const [result, field] = await connection.query(query, parameters);
            resolve(result[0]);
        } catch(error) {
            reject(error);
        }
    })
}

function queryUsingTransaction(connection, query, parameters=[]) {
    return new Promise(async (resolve, reject) => {
        try {
            const [result, field] = await connection.query(query, parameters);
            resolve(result);
        } catch (err) {
            reject(err);
        }
    })
}

module.exports = {
    query,
    countData,
    findOne,
    findOneUsingTransaction,
    queryUsingTransaction
}