exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_access_menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_access_menu').insert([{
          id: 1,
          users_role_id: 2,
          users_menu_id: 2,
          created_at: new Date()
        },
        {
          id: 2,
          users_role_id: 2,
          users_menu_id: 3,
          created_at: new Date()
        },
        {
          id: 3,
          users_role_id: 3,
          users_menu_id: 3,
          created_at: new Date()
        }
      ]);
    });
};