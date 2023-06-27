import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.PG_URI
})

module.exports = {
  query: (text: string, params?: any) => {
    console.log('executed query', text)
    return pool.query(text, params);
  }
}