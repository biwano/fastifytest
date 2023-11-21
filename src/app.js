async function plugin (fastify, opts) {
    fastify.get('/', async (req, reply) => {
      return { hello: 'world' }
    })
}
  
export default plugin