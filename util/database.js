const mysql = require('mysql2');
const config = require('./config'); // Requerir el archivo config.js para cargar las variables de entorno

const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  database: config.DB_DATABASE,
  password: config.DB_PASSWORD,
});

pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
    } else {
      console.log('Conexión exitosa a la base de datos!');
      connection.release();
    }
  });

module.exports = pool.promise();

