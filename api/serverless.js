"use strict";

// Read the .env file.
import addSentry from '../src/addSentry.js'
import Fastify from "fastify";

// Instantiate Fastify with some config
const app = Fastify({
  logger: true,
});

addSentry(app)
// Register your application as a normal plugin.
app.register(import("../src/app.js"));

export default async (req, res) => {
    await app.ready();
    app.server.emit('request', req, res);
}
