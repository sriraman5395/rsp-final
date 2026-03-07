import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, '../railway.db');
const schemaPath = path.join(__dirname, '../schema.sql');

console.log(`Initializing database at ${dbPath}...`);

try {
  const db = new Database(dbPath);
  const schema = fs.readFileSync(schemaPath, 'utf-8');

  // Execute schema
  db.exec(schema);

  console.log('Database initialized successfully!');
  db.close();
} catch (error) {
  console.error('Failed to initialize database:', error);
  process.exit(1);
}
