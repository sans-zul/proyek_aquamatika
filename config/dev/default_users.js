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
        },
        {
          id: 3,
          name: 'Tentor Name',
          my_id: 1,
          email: 'tentor@aquamatika.id',
          password: 'tentor',
          image: 'default',
          role_id: 3,
          is_active: 1,
          created_at: new Date()
        },
        {
          id: 4,
          name: 'Siswa Name',
          my_id: 1,
          email: 'siswa@aquamatika.id',
          password: 'siswa',
          image: 'default',
          role_id: 4,
          is_active: 1,
          created_at: new Date()
        },
        {
          id: 5,
          name: 'Wali Name',
          my_id: 1,
          email: 'wali@aquamatika.id',
          password: 'wali',
          image: 'default',
          role_id: 5,
          is_active: 1,
          created_at: new Date()
        }
      ]);
    });
};