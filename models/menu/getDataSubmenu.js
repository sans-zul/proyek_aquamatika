const client = require('../connection');

async function getDataSubmenu() {
    let results = [];
    try {
        let data = await client.query(`
            SELECT users_sub_menu.* , menu
              FROM users_sub_menu JOIN users_menu
                ON users_sub_menu.menu_id = users_menu.id
             ORDER BY id ASC
        `);

        for (let i = 0; i < data.rows.length; i++) {
            results.push({
                id: data.rows[i].id,
                menu: data.rows[i].menu,
                title: data.rows[i].title,
                url: data.rows[i].url,
                icon: data.rows[i].icon,
                active: data.rows[i].is_active,
                date: data.rows[i].created_at
            });
        }
    } catch (err) {
        return (err);
    }
    return results;
}
module.exports = getDataSubmenu;