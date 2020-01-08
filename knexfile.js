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
    connection: 'postgres://zqhqrezbmamvsx:c2e02210fb6f8f2845c9466883ed3447d45963219212d596c9bc1b0d6073a9bf@ec2-174-129-32-212.compute-1.amazonaws.com:5432/deuqdaue401q3k',
    migrations: {
      directory: './config/migrations'
    },
    seeds: {
      directory: './config/dev'
    },
    useNullAsDefault: true
  }

};