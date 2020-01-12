exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_menu').insert([{
          id: 1,
          menu: 'Aquamatika',
          created_at: new Date()
        },
        {
          id: 2,
          menu: 'Admin',
          created_at: new Date()
        },
        {
          id: 3,
          menu: 'Tentor',
          created_at: new Date()
        },
        {
          id: 4,
          menu: 'Siswa',
          created_at: new Date()
        },
        {
          id: 5,
          menu: 'Wali',
          created_at: new Date()
        },
        {
          id: 6,
          menu: 'Menu',
          created_at: new Date()
        },
        {
          id: 7,
          menu: 'Menu Admin',
          created_at: new Date()
        }
      ]);
    });
};