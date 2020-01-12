const client = require('./connection');

async function getUsers() {
    let results = [];
    try {
        let nama = await client.query(`
            SELECT * FROM users
            ORDER BY id ASC
        `);

        for (let i = 0; i < nama.rows.length; i++) {
            results.push({
                id: nama.rows[i].id,
                name: nama.rows[i].name,
                my_id: nama.rows[i].my_id,
                email: nama.rows[i].email,
                password: nama.rows[i].password,
                image: nama.rows[i].image,
                role_id: nama.rows[i].role_id,
                is_active: nama.rows[i].is_active,
                date: nama.rows[i].created_at
            });
        }
    } catch (err) {
        return (err);
    }
    return results;
}
module.exports = getUsers;