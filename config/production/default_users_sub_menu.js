exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_sub_menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_sub_menu').insert([{
          id: 1,
          menu_id: 1,
          title: 'Dashboard',
          url: '/aquamatika',
          icon: 'fas fa-fw fa-tachometer-alt',
          is_active: 1,
          created_at: new Date()
        },
        {
          id: 2,
          menu_id: 2,
          title: 'Dashboard',
          url: '/admin',
          icon: 'fas fa-fw fa-tachometer-alt',
          is_active: 1,
          created_at: new Date()
        },
        {
          id: 3,
          menu_id: 6,
          title: 'Menu Management',
          url: '/aquamatika/menu',
          icon: 'fas fa-fw fa-folder',
          is_active: 1,
          created_at: new Date()
        },
        {
          id: 4,
          menu_id: 6,
          title: 'Submenu Management',
          url: '/aquamatika/submenu',
          icon: 'fas fa-fw fa-folder-open',
          is_active: 1,
          created_at: new Date()
        },
        {
          id: 5,
          menu_id: 6,
          title: 'Access Menu',
          url: '/aquamatika/access',
          icon: 'fas fa-fw fa-universal-access',
          is_active: 1,
          created_at: new Date()
        },
        {
          id: 6,
          menu_id: 7,
          title: 'Menu Management',
          url: '/admin/menu',
          icon: 'fas fa-fw fa-folder',
          is_active: 1,
          created_at: new Date()
        },
        {
          id: 7,
          menu_id: 7,
          title: 'Submenu Management',
          url: '/admin/submenu',
          icon: 'fas fa-fw fa-folder-open',
          is_active: 1,
          created_at: new Date()
        },
        {
          id: 8,
          menu_id: 7,
          title: 'Access Menu',
          url: '/admin/access',
          icon: 'fas fa-fw fa-universal-access',
          is_active: 1,
          created_at: new Date()
        }
      ]);
    });
};