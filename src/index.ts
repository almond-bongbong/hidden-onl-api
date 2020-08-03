import dotenv from 'dotenv';
import { GraphQLServer } from 'graphql-yoga';
import { PrismaClient } from '@prisma/client';
import logger from 'morgan';
import schema from './schema';
import authenticateJwt from 'middlewares/authenticateJwt';
import isAuthenticated from 'middlewares/isAuthenticated';

dotenv.config();

const isDev = process.env.NODE_ENV === 'development' || undefined;

export const prisma = new PrismaClient({
  log: isDev && ['query'],
});
const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({
    request,
    isAuthenticated: () => {
      isAuthenticated(request);
    },
  }),
});

server.express.use(logger('dev'));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
});
