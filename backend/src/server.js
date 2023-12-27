import "dotenv/config";
import app from "./app.js";

const SERVER_PORT = process.env.SERVER_PORT;

async function bootServer(port) {
  app.listen(port, () => {
    console.log(
      `\n> Server started!\n> Listening on http://localhost:${SERVER_PORT}\n`,
    );
  });
}

bootServer(SERVER_PORT);
