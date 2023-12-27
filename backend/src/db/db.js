import pgPromise from "pg-promise";

const { DB_NAME, DB_USERNAME, DB_URI } = process.env;
if (!DB_NAME || !DB_URI) {
  throw new Error("No database configuration provided.");
}

const pgp = pgPromise({});
const cn = `postgres://${DB_USERNAME}@${DB_URI}/${DB_NAME}`;

function connect() {
  let db;
  try {
    db = pgp(cn);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }

  return db;
}

export const db = connect();
