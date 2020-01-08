exports.up = function (knex, Promise) {
    let createQuery = `CREATE TABLE example(
      id SERIAL PRIMARY KEY NOT NULL,
      message TEXT,
      created_at TIMESTAMP
    )`
    return knex.raw(createQuery)
}

exports.down = function (knex, Promise) {
    let dropQuery = `DROP TABLE example`
    return knex.raw(dropQuery)
}