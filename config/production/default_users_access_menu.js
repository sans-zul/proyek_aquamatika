exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_access_menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_access_menu').insert([{
          id: 1,
          users_role_id: 1,
          users_menu_id: 1,
          created_at: new Date()
        },
        {
          id: 2,
          users_role_id: 1,
          users_menu_id: 3,
          created_at: new Date()
        },
        {
          id: 3,
          users_role_id: 1,
          users_menu_id: 4,
          created_at: new Date()
        },
        {
          id: 4,
          users_role_id: 1,
          users_menu_id: 5,
          created_at: new Date()
        },
        {
          id: 5,
          users_role_id: 1,
          users_menu_id: 6,
          created_at: new Date()
        },
        {
          id: 6,
          users_role_id: 2,
          users_menu_id: 2,
          created_at: new Date()
        },
        {
          id: 7,
          users_role_id: 2,
          users_menu_id: 3,
          created_at: new Date()
        },
        {
          id: 8,
          users_role_id: 2,
          users_menu_id: 4,
          created_at: new Date()
        },
        {
          id: 9,
          users_role_id: 2,
          users_menu_id: 5,
          created_at: new Date()
        },
        {
          id: 10,
          users_role_id: 2,
          users_menu_id: 7,
          created_at: new Date()
        }
      ]);
    });
};