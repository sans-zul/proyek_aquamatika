exports.up = function (knex, Promise) {
  let createQuery = `CREATE TABLE users_sub_menu(
      id SERIAL PRIMARY KEY NOT NULL,
      menu_id int NOT NULL,
      title TEXT NOT NULL,
      url TEXT NOT NULL,
      icon TEXT NOT NULL,
      is_active int NOT NULL,
      created_at TIMESTAMP
    );
    ALTER SEQUENCE users_sub_menu_id_seq RESTART WITH 9 INCREMENT BY 1;`
  return knex.raw(createQuery)
}

exports.down = function (knex, Promise) {
  let dropQuery = `DROP TABLE users_sub_menu`
  return knex.raw(dropQuery)
}