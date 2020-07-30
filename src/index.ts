require('dotenv').config();
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import { PrismaClient } from '@prisma/client';
import schema from './schema';

export const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({ schema });

server.express.use(logger('dev'));

server.start({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
});
