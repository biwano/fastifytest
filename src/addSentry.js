"use strict";

import dotenv from "dotenv"
dotenv.config()

async function addSentry(fastify) {
  console.log(process.env.SENTRY_DSN)
  fastify.register(import("@immobiliarelabs/fastify-sentry"), {
    dsn: process.env.SENTRY_DSN,
    environment: process.env.VERCEL_GIT_COMMIT_REF,
    release: '1.0.0',
  });
}
    
export default addSentry