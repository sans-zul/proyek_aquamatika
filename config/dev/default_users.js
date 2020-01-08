exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
          id: 1,
          name: 'Aquamatika',
          my_id: 1,
          email: 'aquamatika@aquamatika.id',
          password: 'aquamatika',
          image: 'default',
          role_id: 1,
          is_active: 1,
          created_at: new Date()
        },
        {
          id: 2,
          name: 'Sanjari',
          my_id: 1,
          email: 'admin@aquamatika.id',
          password: 'admin',
          image: 'default',
          role_id: 2,
          is_active: 1,
          created_at: new Date()
        }
      ]);
    });
};