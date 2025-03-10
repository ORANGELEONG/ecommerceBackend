const pool = require('../database');

async function getAllPrdoucts() {
    const [rows] = await pool.query(`SELECT id, name, 
                                    CAST(price AS DOUBLE) AS price, 
                                    image FROM products`);
    return row;

}

async function getProductsById() {
    const [rows] = await pool.query(`SELECT * FROM products WHERE id = ?`, [id]);
  return rows[0];

}


module.exports = {
    getAllProducts,
    getProductsById
}