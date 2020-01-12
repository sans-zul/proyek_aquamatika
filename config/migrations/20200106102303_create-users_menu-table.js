exports.up = function (knex, Promise) {
    let createQuery = `CREATE TABLE users_menu(
        id SERIAL PRIMARY KEY NOT NULL,
        menu TEXT NOT NULL,
        created_at TIMESTAMP
      );
      ALTER SEQUENCE users_menu_id_seq RESTART WITH 8 INCREMENT BY 1;`
    return knex.raw(createQuery)
}

exports.down = function (knex, Promise) {
    let dropQuery = `DROP TABLE users_menu`
    return knex.raw(dropQuery)
}