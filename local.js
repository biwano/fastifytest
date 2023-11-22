// Import the framework and instantiate it
import Fastify from 'fastify'
import addSentry from './src/addSentry.js'
const fastify = Fastify({
  logger: true
})


addSentry(fastify)
fastify.register(import("./src/app.js"));

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}