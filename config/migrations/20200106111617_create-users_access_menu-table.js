exports.up = function (knex, Promise) {
  let createQuery = `CREATE TABLE users_access_menu(
      id SERIAL PRIMARY KEY NOT NULL,
      users_role_id int NOT NULL,
      users_menu_id int NOT NULL,
      created_at TIMESTAMP
    );
    ALTER SEQUENCE users_access_menu_id_seq RESTART WITH 11 INCREMENT BY 1;`
  return knex.raw(createQuery)
}

exports.down = function (knex, Promise) {
  let dropQuery = `DROP TABLE users_access_menu`
  return knex.raw(dropQuery)
}