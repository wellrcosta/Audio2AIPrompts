import { fastify } from "fastify";

const app = fastify();

app.get('/', () => {
  return 'Hello World!';
})

app.listen({
  port: 3000,
}).then(() => {
  console.log('Server is running!');
})