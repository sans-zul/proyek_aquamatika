const {
    Client
} = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgres://postgres:sans@localhost:5432/aquamatika'
});
module.exports = client;