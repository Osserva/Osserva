"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: process.env.PG_URI
});
module.exports = {
    query: (text, params) => {
        console.log('executed query', text);
    }
};
