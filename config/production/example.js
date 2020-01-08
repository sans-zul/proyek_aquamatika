exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('example').del()
    .then(function () {
      // Inserts seed entries
      return knex('example').insert([{
          id: 1,
          message: 'berhasil'
        },
        {
          id: 2,
          message: 'berhasil'
        },
        {
          id: 3,
          message: 'berhasil'
        }
      ]);
    });
};