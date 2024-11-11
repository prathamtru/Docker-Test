// lib/mssql.js
import sql from 'mssql';

// Database configuration
const config = {
    user: process.env.DB_USER, // SQL Server username
    password: process.env.DB_PASS, // SQL Server password
    server: process.env.HOST, // Server name or IP address
    database: process.env.DB, // Database name
    port: 1433, // Default SQL Server port
    options: {
        trustServerCertificate: true // Change to false if using SSL certs
    }
};

// Create a database connection pool
let poolPromise;

export const getPool = () => {
  if (!poolPromise) {
    poolPromise = new sql.ConnectionPool(config)
      .connect()
      .then(pool => {
        console.log('Connected to MSSQL');
        return pool;
      })
      .catch(err => {
        console.error('Database connection failed:', err);
        throw err;
      });
  }
  return poolPromise;
};

// Example of querying the database
export const query = async (queryText) => {
  const pool = await getPool();
  const result = await pool.request().query(queryText);
  return result.recordset;
};
