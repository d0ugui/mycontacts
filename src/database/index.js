const { Client } = require('pg');

// Objeto contendo as infos de conexão e acesso
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

// Efetuando conexão
client.connect();

// Função de query
exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
