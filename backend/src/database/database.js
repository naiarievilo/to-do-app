import pgPromise from "pg-promise";

import db from "#/database/database.js";

const { DB_NAME, DB_USERNAME, DB_URI } = process.env;
if (!DB_NAME || !DB_URI) {
  throw new Error("No database configuration provided.");
}

const pgp = pgPromise({});
const cn = `postgres://${DB_USERNAME}@${DB_URI}/${DB_NAME}`;

try {
  const db = pgp(cn);
} catch(error) {
  console.log(`Error: ${error.message}`);
}

export default db;
