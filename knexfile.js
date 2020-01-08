// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:sans@127.0.0.1:5432/aquamatika',
    migrations: {
      directory: './config/migrations'
    },
    seeds: {
      directory: './config/dev'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './config/migrations'
    },
    seeds: {
      directory: './config/dev'
    },
    useNullAsDefault: true
  }

};