import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'my_database',
  port: parseInt(process.env.DB_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export const initDB = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to MySQL database');
    
    await connection.query(`
      CREATE TABLE IF NOT EXISTS location_images (
        id INT AUTO_INCREMENT PRIMARY KEY,
        marker_id VARCHAR(255) NOT NULL,
        image_data LONGBLOB NOT NULL,
        mime_type VARCHAR(50) NOT NULL,
        filename VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    connection.release();
  } catch (error) {
    console.error('Error connecting to MySQL database:', error);
    console.log('Please ensure your .env file has the correct database credentials.');
  }
};

export default pool;
