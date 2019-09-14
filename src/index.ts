import express_graphql from 'express-graphql';
import http from 'http';
import { GraphQLError } from 'graphql';
import schema from './entities';

interface CustomError extends GraphQLError {
  code?: number;
}

http
  .createServer(
    express_graphql({
      schema,
      context: {},
      graphiql: true,
      customFormatErrorFn: (error: CustomError) => ({
        message: error.message,
        code: error.code, // null, why?
        path: error.path && error.path.length && error.path.join(','),
        stack: error.stack ? error.stack.split('\n') : [],
      }),
    }),
  )
  .listen(5000);
