const client = require('../connection');

async function getDataMenu() {
    let results = [];
    try {
        let nama = await client.query(`
            SELECT * FROM users_menu
            ORDER BY id ASC
        `);

        for (let i = 0; i < nama.rows.length; i++) {
            results.push({
                id: nama.rows[i].id,
                menu: nama.rows[i].menu,
                date: nama.rows[i].created_at
            });
        }
    } catch (err) {
        return (err);
    }
    return results;
}
module.exports = getDataMenu;