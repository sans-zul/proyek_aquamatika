exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_sub_menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_sub_menu').insert([{
          id: 1,
          menu_id: 2,
          title: 'Dashboard',
          url: '/admin',
          icon: 'fas fa-fw fa-tachometer-alt',
          is_active: 1,
          created_at: new Date()
        },
        {
          id: 2,
          menu_id: 3,
          title: 'My Frofile',
          url: '/tentor',
          icon: 'fas fa-fw fa-user',
          is_active: 1,
          created_at: new Date()
        }
      ]);
    });
};