exports.up = function (knex, Promise) {
  let createQuery = `CREATE TABLE users(
      id SERIAL PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      my_id int NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      image TEXT NOT NULL,
      role_id int NOT NULL,
      is_active int NOT NULL,
      created_at TIMESTAMP
    )`
  return knex.raw(createQuery)
}

exports.down = function (knex, Promise) {
  let dropQuery = `DROP TABLE users`
  return knex.raw(dropQuery)
}