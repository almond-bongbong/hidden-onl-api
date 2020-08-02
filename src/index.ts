import dotenv from 'dotenv';
import { GraphQLServer } from 'graphql-yoga';
import { PrismaClient } from '@prisma/client';
import logger from 'morgan';
import schema from './schema';

dotenv.config();

const isDev = process.env.NODE_ENV === 'development' || undefined;

export const prisma = new PrismaClient({
  log: isDev && ['query'],
});
const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({ schema });

server.express.use(logger('dev'));
server.start({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
});
