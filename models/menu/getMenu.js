const client = require('../connection');

async function getMenu(role_id) {
    let results = [];
    try {
        let kategori = await client.query(`
            SELECT users_menu.id, menu
            FROM users_menu JOIN users_access_menu
            ON users_menu.id = users_access_menu.users_menu_id
            WHERE users_access_menu.users_role_id = ${role_id}
            ORDER BY users_access_menu.users_menu_id ASC
        `);
        let subKategori = [];
        for (let i = 0; i < kategori.rows.length; i++) {
            menuId = kategori.rows[i].id
            let sub_kategori = await client.query(`
                SELECT title, url, icon FROM users_sub_menu
                WHERE menu_id = ${menuId}
                AND is_active = 1
            `);
            for (let j = 0; j < sub_kategori.rows.length; j++) {
                subKategori.push({
                    title: sub_kategori.rows[j].title,
                    url: sub_kategori.rows[j].url,
                    icon: sub_kategori.rows[j].icon
                });
            }
            results.push({
                id: kategori.rows[i].id,
                menu: kategori.rows[i].menu,
                sub_menu: subKategori
            });
            subKategori = new Array();
        }
    } catch (err) {
        return next(err);
    }
    return results;
}
module.exports = getMenu;