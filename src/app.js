"use strict";

async function plugin (fastify, opts) {
  fastify.get('/', async (req, reply) => {
    throw new Error("New one")
    return { hello: 'world' }
  })
}
  
export default plugin