import { ApolloServer, gql } from 'apollo-server'

async function runServer() {
  try {

    const server = new ApolloServer({
      typeDefs: gql``,
      resolvers: {}
    })

    const { url } = await server.listen({ port: process.env.PORT || 4000 })

    console.log(`Apollo Server is ready at ${url}`)

  } catch (error) {
    console.log(error)
  }
}

runServer()
