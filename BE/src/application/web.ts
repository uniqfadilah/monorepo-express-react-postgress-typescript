import express from 'express';
import { errorMiddleware } from 'middleware/error-middleware';
import { privateApi } from 'route/private-api';
import { publicRouter } from 'route/public-api';
export const web = express();

web.use(express.json());
web.use(publicRouter);
web.use(privateApi);
web.use(errorMiddleware);
