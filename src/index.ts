import dotenv from 'dotenv';
import { GraphQLServer } from 'graphql-yoga';
import { PrismaClient } from '@prisma/client';
import logger from 'morgan';
import authenticateJwt from 'middlewares/authenticateJwt';
import authenticateFilter from 'middlewares/authenticateFilter';
import schema from './schema';

dotenv.config();
const PORT = process.env.PORT || 4000;
export const isDev = process.env.NODE_ENV === 'development' || undefined;
export const prisma = new PrismaClient({
  log: isDev && ['query'],
});

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({
    request,
    isAuthenticated: () => authenticateFilter(request),
  }),
});

server.express.use(logger('dev'));
server.express.use(authenticateJwt);
server.start({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
});
