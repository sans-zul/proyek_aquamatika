exports.up = function (knex, Promise) {
    let createQuery = `CREATE TABLE my_aquamatika(
      id SERIAL PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      gender TEXT NOT NULL,
      jabatan TEXT NOT NULL,
      created_at TIMESTAMP
    )`
    return knex.raw(createQuery)
}

exports.down = function (knex, Promise) {
    let dropQuery = `DROP TABLE my_aquamatika`
    return knex.raw(dropQuery)
}