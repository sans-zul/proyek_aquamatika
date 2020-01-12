const client = require('../connection');

async function getDataAccessMenu() {
    let results = [];
    try {
        let nama = await client.query(`
            SELECT users_access_menu.id, users_role_id, users_menu_id, users_access_menu.created_at, name, menu
            FROM users_access_menu
            JOIN users_role ON users_role_id = users_role.id
            JOIN users_menu ON users_menu_id = users_menu.id
            ORDER BY users_access_menu.id ASC
        `);

        for (let i = 0; i < nama.rows.length; i++) {
            results.push({
                id: nama.rows[i].id,
                role_id: nama.rows[i].users_role_id,
                menu_id: nama.rows[i].users_menu_id,
                role: nama.rows[i].name,
                menu: nama.rows[i].menu,
                date: nama.rows[i].created_at
            });
        }
    } catch (err) {
        return (err);
    }
    return results;
}
module.exports = getDataAccessMenu;