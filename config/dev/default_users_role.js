exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_role').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_role').insert([{
          id: 1,
          name: 'Aquamatika',
          created_at: new Date()
        },
        {
          id: 2,
          name: 'Admin',
          created_at: new Date()
        },
        {
          id: 3,
          name: 'Tentor',
          created_at: new Date()
        },
        {
          id: 4,
          name: 'Siswa',
          created_at: new Date()
        },
        {
          id: 5,
          name: 'Wali',
          created_at: new Date()
        }
      ]);
    });
};